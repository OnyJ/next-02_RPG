class Berzerker extends Character {
  constructor(name = "Draven", hp = 8, mana = 0, dmg = 4, defence = 30, isAlive, dualAct = 1, bigSword = 2, umbrella = 5, umbrellaIsUsed = false) {
    super(name, hp, mana, dmg, defence, isAlive)
    this.dualAct     = dualAct;
    this.bigSword    = bigSword;
    this.umbrella    = umbrella;
    this.umbrellaIsUsed = umbrellaIsUsed;
  }


  specialities() {
    console.log(`Dual Act : +${this.dualAct}dmg -1HP (full round)`);
    console.log(`Spear : +${this.bigSword} damages`);
    console.log(`Umbrella : +${this.umbrella} defence`);
  }


  dealDamages = (victim) => {
    if (this.isAlive === true)
      victim.takeDamages(this.dmg, this.name);
  }


  doDualAct = (victim) => {
    if ((this.isAlive === true) && (this.hp >= this.dualAct + 1)) {
      this.hp   -= this.dualAct
      this.dmg  += this.dualAct;
      return victim.takeDamages(this.dmg, this.name);
    }
    console.log("Not enough mana to dual act");
  }


  dealDamagesWithRifle = (victim) => {
    let damages = this.dmg + this.bigSword;

    if ((this.isAlive === true) && (this.mana >= damages)) {
      this.mana -= damages;
      return victim.takeDamages(damages, this.name);
    }
    console.log("Not enough mana to use your bigSword");
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
