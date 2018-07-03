//IIFE - Immediate;y invoked function expression
(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    function Init() {
        console.log("Intialization Started");
        var myVariable = "foo";
        Start();
    }
    function Start() {
        console.log("Starting pllication");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        helloLabel.rotation += 5;
        stage.update();
    }
    function Main() {
        console.log("Game Started");
        helloLabel = new createjs.Text("Hello World", "40px Elephant", "red");
        console.log(helloLabel);
        helloLabel.x = 100;
        helloLabel.y = 200;
        stage.addChild(helloLabel);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map