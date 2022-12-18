/*
    タイトルページのUIを生成する
*/

const createGameScene = require("./gameScene");

function createTitleScene(){
    // ゲームの情報を参照する定数
    const scene = new g.Scene({
        game: g.game,
        assetIds: ["background","op","title","start","author"]
    });
    // 初期表示処理
    scene.onLoad.add(()=>{
        scene.append(new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("background")
        }));
        scene.append(new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("title"),
            x: 300, y: 112
        }));
        var startButton = new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("start"),
            x: 550, y: 420,
            touchable: true
        });
        scene.append(startButton);
        scene.append(new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("author"),
            x: 1020, y: 650
        }));
        startButton.pointDown.add(()=>{
            g.game.replaceScene(createGameScene());
        });
        // scene.asset.getAudioById("op").play();
    });
    return scene;
}

module.exports = createTitleScene;