class Game {
    constructor() {

    }
    getState() {
        var gsRef = database.ref("gameState")
        gsRef.on("value", function (data) {
            gs = data.val()
        })
    }
    start() {
        if (gs === 0) {
            player = new Player()
            player.getCount()
            form = new Form()
            form.display();
            background(formPageBg)
            // image(logoImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5)
            image(logoImg, displayWidth / 2 - 300, 0)
        }

        car1 = createSprite(100, 200)
        car1.addImage(car1Img)
        car2 = createSprite(300, 200)
        car2.addImage(car2Img)
        car3 = createSprite(500, 200)
        car3.addImage(car3Img)
        car4 = createSprite(700, 200)
        car4.addImage(car4Img)
        cars = [
            car1,
            car2,
            car3,
            car4
        ]
        passedFinish = false
    }
    update(state) {
        database.ref("/").update({
            gameState: state
        })
    }
    play() {
        form.hide()
        player.getFinishedPlayers()
        Player.getPlayerInfo()
        // console.log(allPlayers)
        if (allPlayers !== undefined) {
            background(ground)
            image(TrackImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5)
            // image(logoImg, displayWidth / 2 - 300, 0)
            var x = 200;
            var y
            var index = 0

            for (var i in allPlayers) {
                x = x + 180
                cars[index].x = x
                cars[index].y = displayHeight - allPlayers[i].distance

                // console.log(index)
                // console.log(player.index)
                if (index + 1 === player.index) {
                    stroke(10)
                    fill("red")
                    ellipse(cars[index].x, cars[index].y, 60, 60)
                    camera.position.x = displayWidth / 2
                    camera.position.y = cars[index].y

                }
                index = index + 1

            }

        }
        drawSprites();
        if (keyIsDown(UP_ARROW) && player.index !== null && passedFinish === false) {
            player.distance = player.distance + 10
            player.update()
        }
        if (player.distance > 3530 && passedFinish === false) {
            Player.updateFinishedPlayers()
            player.rank = finishedPlayers
            player.update()
            passedFinish = true
        }
    }
    displayRank() {
        camera.position.x = 0
        camera.position.y = 0
        Player.getPlayerInfo()
        textSize(50)
        image(rank1, -100, -250, 250,300)
         image(rank2, 300 , displayHeight/4-200,  225,270)
          image(rank3, -500, displayHeight/4-200,  225,270)
        for (var i in allPlayers) {
            if (allPlayers[i].rank === 1) {
                text("1st : " + allPlayers[i].name, -100, 85)
            }
            else
            if (allPlayers[i].rank === 2) {
                text("2nd : " + allPlayers[i].name,  280 , displayHeight/4+120)
            }
            else  if (allPlayers[i].rank === 3) {
                text("3rd : " + allPlayers[i].name, -520, displayHeight/4+120)
            }



        }
    }

}