import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";

export class playersController {
  constructor() {
    console.log('Players Controller is loaded')
    this.drawPlayers()
  }

  scorePoint(playerName) {
    playersService.scorePoint(playerName)
    this.drawPlayers()
  }

  losePoint(playerName) {
    playersService.losePoint(playerName)
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

