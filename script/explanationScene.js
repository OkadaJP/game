function createExplain(){
    // ゲームの情報を参照する定数
    const scene = new g.Scene({
        game: g.game,
        assetIds: ["background","op","title","start","author","explanation1"]
    });
}

module.exports = createExplain;