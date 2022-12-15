const createTitleScene = require("./titleScene");

const scene = new g.Scene({
    game: g.game,
    assetIds: ["startLogo","se1"]
});

function startPage(){
    scene.onLoad.add(()=>{
        scene.append(new g.FilledRect({
            scene: scene,
            cssColor: "white",
            width: g.game.width,
            height: g.game.height,
          }));
        scene.append(new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("startLogo"),
            x: 535, y: 300,
            touchable: true
        })); 
    });
    scene.onPointDownCapture.add(()=>{
        scene.asset.getAudioById("se1").play();
        g.game.replaceScene(createTitleScene());
      });
    return scene;
}

module.exports = startPage;