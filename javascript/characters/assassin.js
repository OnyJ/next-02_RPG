class Assassin extends Character {
  constructor(name = "Carl", hp = 6, mana = 20, dmg = 6, defence = 30, isAlive, ninjaDmg = 7, ninjaTrick = false, littleKnife = 1, coudTete = 1) {
    super(name, hp, mana, dmg, defence, isAlive)
    this.ninjaTrick  = ninjaTrick;
    this.littleKnife = littleKnife;
    this.coudTete    = coudTete;
    this.ninjaDmg    = ninjaDmg;
    this.ninjaTrick  = ninjaTrick;
  }


  specialities() {
    console.log(`Ninja trick : 7dmg -20mana protected 1 round`);
    console.log(`Coud'tete : +${this.coudTete}dmg -${this.coudTete}mana`);
    console.log(`Little knife : +${this.littleKnife}dmg -${this.littleKnife}mana`);
  }


  dealDamages = (victim) => {
    if (this.isAlive === true)
      victim.takeDamages(this.dmg, this.name);
  }


  doNinjaTrick = (victim) => {
    if ((this.isAlive === true) && (this.mana >= 20)) {
      this.mana -= 20;
      this.ninjaTrick = true;
      if (victim.hp <= this.ninjaDmg)
        return victim.takeDamages(this.ninjaDmg, this.name);
      victim.takeDamages(this.ninjaDmg, this.name);
      return this.hp -= this.ninjaDmg;
    }
    console.log("Not enough mana to do your ninja trick");
  }


  dealDamagesWithCoudTete = (victim) => {
    if ((this.isAlive === true) && (this.mana >= this.coudTete)) {
      this.mana -= this.coudTete;
      return victim.takeDamages(this.dmg + this.coudTete, this.name);
    }
    console.log("Not enough mana to shoot a coudTete");
  }


  dealDamagesWithLittleKnife = (victim) => {
    if ((this.isAlive === true) && (this.mana >= this.littleKnife)) {
      this.mana -= this.littleKnife;
      return victim.takeDamages(this.dmg + this.littleKnife, this.name);
    }
    console.log("Not enough mana to shoot a coudTete");
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
