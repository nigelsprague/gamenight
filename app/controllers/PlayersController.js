import { AppState } from "../AppState.js";

export class playersController {
  constructor() {
    console.log('Players Controller is loaded')
    this.drawPlayers()
  }

  drawPlayers() {
    const players = AppState.players
    let playerContent = ''
    players.forEach(player => playerContent += player.PlayerTemplateCard)
    const playerCardElem = document.getElementById('player-cards')
    playerCardElem.innerHTML = playerContent
  }
}

