class Form {
    constructor() {
        this.input = createInput("Name")
        this.button = createButton("Play")
        this.greeting = createElement("h3")
        this.resetButton = createImg("images/resetButton.png")
    }
    hide() {
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display() {
        // var title = createElement("h2")
        // title.position(displayWidth / 2 - 50, 0)
         // title.html("Car Racing Game!!")
       
          
        
        this.resetButton.position(displayWidth - 200, -40)
        this.resetButton.size(200,150)
       this.resetButton.mousePressed(() => {
           player.updateCount(0)
           game.update(0)
           database.ref("players").remove()
           database.ref("/").update({
               finishedPlayers:0
           })


        })
        this.input.position(displayWidth / 2 - 80, displayHeight / 2 - 80)
        this.input.addClass("inputStyle")

        this.button.position(displayWidth / 2-80, displayHeight / 2)
       this.button.addClass("customButton")
        this.button.mousePressed(() => {
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()

            this.greeting.position(displayWidth / 2 - 70, displayHeight / 4)
            this.greeting.html("Hello There " + player.name)
            pc = pc + 1
            player.index = pc
            player.updateCount(pc)
            player.update()
        })
    }
}