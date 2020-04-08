class Dwarf extends Character {
  constructor(name, healthPoints, mana, strength, defence, isAlive, hammer = 7, groupAttack = 20, shield = 20, shieldIsUsed = false) {
    super(name, healthPoints, mana, strength, defence, isAlive)
    this.hammer       = hammer;
    this.groupAttack  = groupAttack;
    this.shield       = shield;
    this.shieldIsUsed = shieldIsUsed;
  }


  specialities() {
    console.log(`Group attack : +${this.groupAttack} damages`);
    console.log(`hammer : +${this.hammer} damages`);
    console.log(`Shield : +${this.shield} defence`);
  }


  dealDamages = (victim) => {
    if (this.isAlive === true)
      victim.takeDamages(this.strength, this.name);
  }


  dealDamagesWithHammer = (victim) => {
    if ((this.isAlive === true) && (this.mana >= this.strength)) {
      this.mana -= this.strength;
      return victim.takeDamages(this.strength + this.hammer, this.name);
    }
    console.log("Not enough mana to hammer attack");
  }


  dealDamagesWithGroupAttack = (victim) => {
    let damages = this.strength + this.groupAttack;

    if ((this.isAlive === true) && (this.mana >= damages)) {
      this.mana -= damages;
      return victim.takeDamages(damages, this.name);
    }
    console.log("Not enough mana to call dwarf allies");
  }


  useShield = () => {
    if (this.isAlive === true && this.shieldIsUsed === false)
      this.defence += this.shield;
    this.shieldIsUsed = true;
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
