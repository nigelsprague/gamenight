import { AppState } from "../AppState.js";

class PlayersService {
  scorePoint(playerName) {
    const playerToScore = AppState.players.find(player => player.name == playerName)
    playerToScore.score++
  }

  losePoint(playerName) {
    const playerToScore = AppState.players.find(player => player.name == playerName)
    playerToScore.score--
  }
}

export const playersService = new PlayersService()