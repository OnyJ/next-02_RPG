class Fighter extends Character {
  constructor(name = "Grace", hp = 12, mana = 40, dmg = 4, defence, isAlive, darkProtected = false, sword = 2, shield = 2, shieldIsUsed = false) {
    super(name, hp, mana, dmg, defence, isAlive)
    this.darkProtected = darkProtected;
    this.sword         = sword;
    this.shield        = shield;
    this.shieldIsUsed  = shieldIsUsed;
  }
  
  specialities() {
    console.log(`Dark vision : 5dmg +2protect -20mana`)
    console.log(`Sword : +${this.sword} damages`);
    console.log(`Shield : +${this.shield} defence`);
  }

  dealDamages = (victim) => {
    if (this.isAlive === true)
      victim.takeDamages(this.dmg, this.name);
  }

  darkVision = (victim) => {
    if ((this.isAlive === true) && (this.mana >= 20)) {
      this.mana -= 20;
      this.darkProtected = true;
      return victim.takeDamages(5, this.name);
    }
    console.log("Not enough mana for dark vision");
  }

  dealDamagesWithSword = (victim) => {
    if ((this.isAlive === true) && (this.mana >= this.sword)) {
      this.mana -= this.sword;
      return victim.takeDamages(this.dmg + this.sword, this.name);
    }
    console.log("Not enough mana to sword attack");
  }

  useShield = () => {
    if (this.isAlive === true && this.shieldIsUsed === false)
      this.defence += this.shield;
      console.log("use shield")
    if (this.shieldIsUsed === true)
      console.log("You already used your shield");
    this.shieldIsUsed = true;
  }

  takeDamages = (damages, ennemy) => {
    if (this.darkProtected === true)
      damages -= 2;
    // In Game, darkProtected should be disabled at the end of a round.
    this.defence -= damages;
    if (this.defence < 0) {
      damages = this.defence;
      this.hp += damages;
      this.defence = 0;
    }
    if (this.hp <= 0) {
      this.isAlive = false;
      console.log(`${this.name} has been killed by ${ennemy}.`);
      return
    }
    console.log(`${this.name} attacked by ${ennemy} is now ${this.hp}HP`);
  }
}
