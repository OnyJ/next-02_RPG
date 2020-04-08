class Troll extends Character {
  constructor(name, healthPoints = 85, mana, strength, defence = 30, isAlive, trollSong = 4, trollBat = 8, coudTete = 17) {
    super(name, healthPoints, mana, strength, defence, isAlive)
    this.trollSong = trollSong;
    this.trollBat  = trollBat;
    this.coudTete  = coudTete;
  }


  specialities() {
    console.log(`Troll Song : +${this.trollSong} damages`);
    console.log(`Coud'tete : +${this.coudTete} damages`);
    console.log(`Troll bat : +${this.trollBat} damages`);
  }


  dealDamages = (victim) => {
    if (this.isAlive === true)
      victim.takeDamages(this.strength, this.name);
  }


  dealDamagesWithTrollSong = (victim) => {
    if ((this.isAlive === true) && (this.mana >= this.strength)) {
      this.mana -= this.strength;
      return victim.takeDamages(this.strength + this.trollSong, this.name);
    }
    console.log("Not enough mana to burn with a torch");
  }


  dealDamagesWithTrollBat = (victim) => {
    let damages = this.strength + this.coudTete;

    if ((this.isAlive === true) && (this.mana >= damages)) {
      this.mana -= damages;
      return victim.takeDamages(damages, this.name);
    }
    console.log("Not enough mana to shoot with a coudTete");
  }


  dealDamagesWithCoudTete = (victim) => {
    let damages = this.strength + this.coudTete;

    if ((this.isAlive === true) && (this.mana >= damages)) {
      this.mana -= damages;
      return victim.takeDamages(damages, this.name);
    }
    console.log("Not enough mana to shoot with a coudTete");
  }

  takeDamages = (damages, ennemy) => {
    this.defence -= damages;
    if (this.defence < 0) {
      damages = this.defence;
      this.healthPoints += damages;
      this.defence = 0;
    }
    if (this.healthPoints <= 0) {
      this.isAlive = false;
      console.log(`${this.name} has been killed by ${ennemy}.`);
      return
    }
    console.log(`${this.name} attacked by ${ennemy} is now ${this.healthPoints}HP`);
  }
}
