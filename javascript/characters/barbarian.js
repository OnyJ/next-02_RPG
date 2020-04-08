class Barbarian extends Character {
  constructor(name, healthPoints, mana, strength, defence, isAlive, axe = 6, sword = 12, shield = 15, shieldIsUsed = false) {
    super(name, healthPoints, mana, strength, defence, isAlive)
    this.axe    = axe;
    this.sword  = sword;
    this.shield = shield;
    this.shieldIsUsed = shieldIsUsed;
  }
  
  specialities() {
    console.log(`Axe : +${this.axe} damages`);
    console.log(`Sword : +${this.sword} damages`);
    console.log(`Shield : +${this.shield} defence`);
  }

  dealDamages = (victim) => {
    if (this.isAlive === true)
      victim.takeDamages(this.strength, this.name);
  }

  dealDamagesWithAxe = (victim) => {
    if ((this.isAlive === true) && (this.mana >= this.strength)) {
      this.mana -= this.strength;
      return victim.takeDamages(this.strength + this.axe, this.name);
    }
    console.log("Not enough mana to axe attack");
  }

  dealDamagesWithSword = (victim) => {
    let damages = this.strength + this.sword;

    if ((this.isAlive === true) && (this.mana >= damages)) {
      this.mana -= damages;
      return victim.takeDamages(damages, this.name);
    }
    console.log("Not enough mana to sword attack");
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

let jack = new Barbarian("Jack");
let bob  = new Barbarian("bob");
jack.show();
jack.specialities();
console.log();

bob.show();
bob.specialities();
console.log();

jack.dealDamagesWithAxe(bob);
jack.dealDamagesWithSword(bob);
jack.dealDamagesWithSword(bob);
jack.dealDamagesWithSword(bob);
jack.dealDamagesWithSword(bob);
jack.dealDamagesWithSword(bob);
jack.dealDamagesWithSword(bob);
jack.show();
bob.dealDamages(jack);
console.log();

