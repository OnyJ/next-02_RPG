// require('character.js');

class Barbarian extends Character {
  constructor(name, healthPoints, mana, strength, defence, isAlive) {
    super(name, healthPoints, mana, strength, defence, isAlive)
  }
  
  specialities() {
  }

  dealDamage = (victim) => {
    if (this.isAlive === true) {
      victim.hp -= (strength + this.axe)
    }
  }
}
