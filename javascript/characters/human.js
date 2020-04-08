class Human extends Character {
  constructor(name, healthPoints, mana, strength, defence, isAlive, fireTorch = 7, rifle = 15, healthKit = 15, healthKitIsUsed = false) {
    super(name, healthPoints, mana, strength, defence, isAlive)
    this.fireTorch = fireTorch;
    this.rifle     = rifle;
    this.healthKit = healthKit;
    this.healthKitIsUsed = healthKitIsUsed;
  }


  specialities() {
    console.log(`Fire torch : +${this.fireTorch} damages`);
    console.log(`Rifle : +${this.rifle} damages`);
    console.log(`healthKit : +${this.healthKit} HP`);
  }


  dealDamages = (victim) => {
    if (this.isAlive === true)
      victim.takeDamages(this.strength, this.name);
  }


  dealDamagesWithFireTorch = (victim) => {
    if ((this.isAlive === true) && (this.mana >= this.strength)) {
      this.mana -= this.strength;
      return victim.takeDamages(this.strength + this.fireTorch, this.name);
    }
    console.log("Not enough mana to burn with a torch");
  }


  dealDamagesWithRifle = (victim) => {
    let damages = this.strength + this.rifle;

    if ((this.isAlive === true) && (this.mana >= damages)) {
      this.mana -= damages;
      return victim.takeDamages(damages, this.name);
    }
    console.log("Not enough mana to shoot with a rifle");
  }


  useHealthKit = () => {
    if (this.isAlive === true && this.healthKitIsUsed === false)
      this.healthPoints += this.healthKit;
    this.healthKitIsUsed = true;
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
