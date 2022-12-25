const Tile  = require("@akashic-extension/akashic-tile").Tile;
const b2 = require("@akashic-extension/akashic-box2d");
const scene = new g.Scene({
    game: g.game,
    assetIds: ["background","map","yuusya","yajirusi"]
});
// 物理世界の生成
const box2d = new b2.Box2D({
    gravity: [0, 9.8],
    scale: 50,
    sleep: true
  });

// GameのSceneを作成する関数
function createGameScene(){
    scene.onLoad.add(()=>{
        scene.append(new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("background")
        }));
        var tile = createGameTile(scene);
        createFloorBox(tile);
        // createBox();
        scene.append(tile);
        createSuzuki();
        scene.update.add(function() {
            // 物理エンジンの世界を進める
            box2d.step(1/g.game.fps);
          });  
    });
    return scene;
}

// Map用のTileを作成する関数
function createGameTile(scene){
    var tile = new Tile({
        scene: scene,
        src: scene.asset.getImageById("map"),
        tileWidth: 32,
        tileHeight: 32,
        // マップデータの配置
        tileData:[
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,14,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,30,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [-1, -1, -1,-1,-1,-1, 8, 9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
          [19,19,19,19,19,19,24,25,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19.19,19],
          [19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19.19,19]
     ],
        touchable: true
    });

    return tile;
}

// 床の当たり判定を生成する関数
function createFloorBox(tile){
    for(let i = 0; i < tile.tileData.length; i ++){
        for(let k = 0; k < tile.tileData[i].length; k ++){
            if(tile.tileData[i][k] != -1){
                var entity = new g.FilledRect({
                    scene: scene,
                    x: (32*k),
                    y: (32*i),
                    width: 32,
                    height: 32,
                    cssColor: "black",
                    opacity: 0
                });
                scene.append(entity);
                entity.modified();
                var entityFixDef = box2d.createFixtureDef({
                    density: 1.0, // 密度
                    friction: 0.5, // 摩擦係数
                    restitution: 0.3, // 反発係数
                    shape: box2d.createRectShape(entity.width, entity.height) // 形状
                  });
                var entityDef = box2d.createBodyDef({
                    type: b2.BodyType.Static
                });
                var body = box2d.createBody(entity,entityDef,entityFixDef);
            };
        };
    }
}

// function createBox(){
//     var entity = new g.FilledRect({scene: scene, cssColor: "red", width: g.game.width, height: 50, x: 0, y: 0});
//     scene.append(entity);
//     entity.modified();
//     var entityFixDef = box2d.createFixtureDef({
//         density: 1.0, // 密度
//         friction: 0.5, // 摩擦係数
//         restitution: 0.3, // 反発係数
//         shape: box2d.createRectShape(entity.width, entity.height) // 形状
//       });
//       var entityDef = box2d.createBodyDef({
//         type: b2.BodyType.Dynamic
//       });
//       var body = box2d.createBody(entity, entityDef, entityFixDef);
// }

function createSuzuki(){
    var suzuki = new g.Sprite({
        scene: scene,
        src: scene.asset.getImageById("yuusya"), 
        x: 200, 
        y: 600,
        touchable: true
      });
      suzuki.modified();
      var entityFixDef = box2d.createFixtureDef({
        density: 1.0, // 密度
        friction: 0.5, // 摩擦係数
        restitution: 0.3, // 反発係数
        shape: box2d.createRectShape(suzuki.width, suzuki.height) // 形状
      });
      var entityDef = box2d.createBodyDef({
        type: b2.BodyType.Dynamic
      });
      var body = box2d.createBody(suzuki, entityDef, entityFixDef);
      scene.append(suzuki);
      suzuki.onPointDown.add(()=>{
        var pos = getEntityPosition(suzuki);
        body.b2Body.ApplyImpulse(box2d.vec2(1000,-1000),box2d.vec2(pos.x,pos.y));
      })
}
function getEntityPosition(entity) {
  return {
      x: entity.x + entity.width / 2,
      y: entity.y + entity.height / 2
  };
}

module.exports = createGameScene;