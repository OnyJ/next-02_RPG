class Lizard extends Character {
  constructor(name, healthPoints = 85, mana, strength, defence = 30, isAlive, tailBash = 7, spear = 15, umbrella = 5, umbrellaIsUsed = false) {
    super(name, healthPoints, mana, strength, defence, isAlive)
    this.tailBash = tailBash;
    this.spear    = spear;
    this.umbrella = umbrella;
    this.umbrellaIsUsed = umbrellaIsUsed;
  }


  specialities() {
    console.log(`Tail Bash : +${this.tailBash} damages`);
    console.log(`Spear : +${this.spear} damages`);
    console.log(`Umbrella : +${this.umbrella} defence`);
  }


  dealDamages = (victim) => {
    if (this.isAlive === true)
      victim.takeDamages(this.strength, this.name);
  }


  dealDamagesWithtailBash = (victim) => {
    if ((this.isAlive === true) && (this.mana >= this.strength)) {
      this.mana -= this.strength;
      return victim.takeDamages(this.strength + this.tailBash, this.name);
    }
    console.log("Not enough mana to burn with a torch");
  }


  dealDamagesWithRifle = (victim) => {
    let damages = this.strength + this.spear;

    if ((this.isAlive === true) && (this.mana >= damages)) {
      this.mana -= damages;
      return victim.takeDamages(damages, this.name);
    }
    console.log("Not enough mana to shoot with a spear");
  }


  useUmbrella = () => {
    if (this.isAlive === true && this.umbrellaIsUsed === false)
      this.defence += this.umbrella;
    this.umbrellaIsUsed = true;
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
