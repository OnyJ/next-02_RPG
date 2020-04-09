class Paladin extends Character {
  constructor(name = "Ulder", hp = 16, mana = 160, dmg = 3, defence, isAlive, shieldAttack = 2, shieldProtection = 2, shieldIsUsed = false) {
    super(name, hp, mana, dmg, defence, isAlive)
    this.shieldAttack     = shieldAttack;
    this.shieldProtection = shieldProtection;
    this.shieldIsUsed     = shieldIsUsed;
  }


  specialities() {
    console.log(`Lighting : 4dmg +5HP -40mana`);
    console.log(`Shield attack : +${this.shieldAttack}dmg -2mana`);
    console.log(`Shield : +${this.shieldProtection} defence`);
  }


  dealDamages = (victim) => {
    if (this.isAlive === true)
      victim.takeDamages(this.dmg, this.name);
  }


  lighting = (victim) => {
    if ((this.isAlive === true) && (this.mana >= 40)) {
      this.mana -= 40;
      this.hp += 5;
      return victim.takeDamages(4, this.name);
    }
    console.log("Not enough mana for lighting attack");
  }


  dealDamagesWithShieldAttack = (victim) => {
    if ((this.isAlive === true) && (this.mana >= this.shieldAttack)) {
      this.mana -= this.shieldAttack;
      return victim.takeDamages(this.dmg + this.shieldAttack, this.name);
    }
    console.log("Not enough mana to attack with your shield");
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
