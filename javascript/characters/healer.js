class Healer extends Character {
  constructor(name = "Moana", hp = 8, mana = 200, dmg = 2, defence, isAlive, thinSword = 2, magicArrow = 1, healthSpell = 8, healthSpellIsUsed = false) {
    super(name, hp, mana, dmg, defence, isAlive)
    this.thinSword         = thinSword;
    this.magicArrow        = magicArrow;
    this.healthSpell       = healthSpell;
    this.healthSpellIsUsed = healthSpellIsUsed;
  }


  specialities() {
    console.log(`Thin Sword : +${this.thinSword} damages`);
    console.log(`Magic Arrow : +${this.magicArrow} damages`);
    console.log(`Health spell : +${this.healthSpell} HP`);
  }


  dealDamages = (victim) => {
    if (this.isAlive === true)
      victim.takeDamages(this.dmg, this.name);
  }


  dealDamagesWithThinSword = (victim) => {
    if ((this.isAlive === true) && (this.mana >= this.dmg)) {
      this.mana -= this.thinSword;
      return victim.takeDamages(this.dmg + this.thinSword, this.name);
    }
    console.log("Not enough mana to thin sword attack");
  }


  dealDamagesWithMagicArrow = (victim) => {
    if ((this.isAlive === true) && (this.mana >= this.magicArrow)) {
      this.mana -= this.magicArrow;
      return victim.takeDamages(this.dmg + this.magicArrow, this.name);
    }
    console.log("Not enough mana to shoot with a magicArrow");
  }


  useHealthSpell = () => {
    if (this.isAlive === true && this.healthSpellIsUsed === false)
      this.hp += this.healthSpell;
    this.healthSpellIsUsed = true;
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
