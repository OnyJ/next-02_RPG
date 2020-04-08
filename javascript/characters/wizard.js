class Wizard extends Character {
  constructor(name, healthPoints, mana = 90, strength, defence, isAlive, magicWand = 8, gandalfTrick = 22, healSpell = 15, healSpellIsUsed = false) {
    super(name, healthPoints, mana, strength, defence, isAlive)
    this.magicWand       = magicWand;
    this.gandalfTrick    = gandalfTrick;
    this.healSpell       = healSpell;
    this.healSpellIsUsed = healSpellIsUsed;
  }


  specialities() {
    console.log(`Magic Wand : +${this.magicWand} damages`);
    console.log(`Gandalf Trick : +${this.gandalfTrick} damages`);
    console.log(`Heal Spell : +${this.healSpell} HP`);
  }


  dealDamages = (victim) => {
    if (this.isAlive === true)
      victim.takeDamages(this.strength, this.name);
  }


  dealDamagesWithMagicWand = (victim) => {
    if ((this.isAlive === true) && (this.mana >= this.strength)) {
      this.mana -= this.strength + 6;
      return victim.takeDamages(this.strength + this.magicWand, this.name);
    }
    console.log("Not enough mana to do a magic wand attack");
  }


  dealDamagesWithGandalfTrick = (victim) => {
    let damages = this.strength + this.gandalfTrick;

    if ((this.isAlive === true) && (this.mana >= damages)) {
      this.mana -= damages + 6;
      return victim.takeDamages(damages, this.name);
    }
    console.log("Not enough mana to shoot with a Gandalf Trick");
  }


  useHealSpell = () => {
    if (this.isAlive === true && this.healSpellIsUsed === false)
      this.healthPoints += this.healSpell;
    this.healSpellIsUsed = true;
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
