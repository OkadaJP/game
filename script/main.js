const startPage = require("./firstPage");

module.exports = function(){ 
    // スタートページの表示
    g.game.pushScene(startPage());
}