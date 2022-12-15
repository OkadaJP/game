/*
    タイトルページのUIを生成する
*/

const createExplain = require("./explanationScene");

function createTitleScene(){
    // ゲームの情報を参照する定数
    const scene = new g.Scene({
        game: g.game,
        assetIds: ["background","op","title","start","author","explanation1"]
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
            x: 128, y: 112
        }));
        var startButton = new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("start"),
            x: 360, y: 420,
            touchable: true
        });
        scene.append(startButton);
        scene.append(new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("author"),
            x: 720, y: 650
        }));
        startButton.pointDown.add(()=>{
            g.game.replaceScene(createExplain());
        });
        scene.asset.getAudioById("op").play();
    });
    return scene;
}

module.exports = createTitleScene;