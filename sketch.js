var database;
var player, form, game;
var pc, gs = 0;
var allPlayers;
var car1, car2, car3, car4, cars;
var passedFinish;
var finishedPlayers = 0;

function preload() {
    car1Img = loadImage("images/car1.png")
    car2Img = loadImage("images/car2.png")
    car3Img = loadImage("images/car3.png")
    car4Img = loadImage("images/car4.png")
    TrackImg = loadImage("images/track.jpg")
    ground = loadImage("images/ground.png")
    formPageBg = loadImage("images/bg.png")
    logoImg = loadImage("images/logo.png")
    rank1 = loadImage("images/gold.png")
    rank2 = loadImage("images/silver.png")
    rank3 = loadImage("images/bronze.png")
}
function setup() {
    database = firebase.database()
    console.log(database);
    createCanvas(displayWidth, displayHeight);

    game = new Game()
    game.getState()
    game.start()

}

function draw() {
    //  background("white");
    if (pc === 4 && finishedPlayers === 0) {
        game.update(1)

    }
    if (gs === 1) {
        clear()
        game.play()
    }
    if (finishedPlayers === 4) {
        game.update(2)
    }
    if (gs === 2 && finishedPlayers === 4) {
        background(200,200,255)
    game.displayRank()
    }
    // game.displayRank()
}




