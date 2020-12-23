class Player {
  constructor() {
    this.index = null
    this.name = null
    this.distance = 0
    this.rank = 0
  }
  getCount() {
    var pcRef = database.ref("playerCount")
    pcRef.on("value", (data) => {
      pc = data.val()
    })
  }
  updateCount(counter) {
    database.ref("/").update({
      playerCount: counter
    })
  }
  update() {
    var index = "players/player" + this.index
    database.ref(index).set({
      name: this.name,
      distance: this.distance,
      rank:this.rank
    })
  }
  static getPlayerInfo() {
    var infoRef = database.ref("players")
    infoRef.on("value", (data) => {
      allPlayers = data.val()
    })

  }
  getFinishedPlayers() {
    var ref = database.ref("finishedPlayers")
    ref.on("value", (data) => {
      finishedPlayers = data.val()
    })
  }
  static updateFinishedPlayers() {
    database.ref("/").update({
      finishedPlayers: finishedPlayers + 1

    })
    this.rank = this.rank + 1
  }
}