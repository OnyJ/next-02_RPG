class Game {
  constructor(players = [], playersPlayed = 0, turnsRemaining = 10) {
    this.players        = players;
    this.playersPlayed  = playersPlayed;
    this.turnsRemaining = turnsRemaining;
  }


  // MAIN
  newGame = () => {
    this.choseCharacters();
    this.startTurn();
  }

  startTurn = () => {
    console.log(`It's turn ${this.turnsRemaining}`);
    while (playersPlayed < players.length - 1){
      this.someonePlays(this.didNotPlayYet);
      this.renderChanges();
    }
    this.skipTurn();
    if // endgame
      // endgame
  }


  // TURN
  skipTurn = () => {
    this.turnsRemaining -= 1;
    this.playersPlayed   = 0;
  }

  someonePlays = () => {
    if isHuman
    if pasHuman
  }

  didNotPlayYet = () => {
  }


  // CHARACTERS
  choseCharacters = () => {
    // Start form :
    // character cards ; change stats + name ; number ennemies ; validate.
  }


  // DISPLAY

}