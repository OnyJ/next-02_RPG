class Character {
  constructor(name, healthPoints = 100, mana = 70, strength = 8, defence = 0, isAlive = true) {
    this.healthPoints = healthPoints;
    this.mana = mana;
    this.strength = strength;
    this.defence = defence;
    this.name = name;
    this.isAlive = isAlive;;
  }

  show() {
    console.log(`>> ${this.name}`);
    console.log(`HP: ${this.healthPoints}`);
    console.log(`Mana : ${this.mana}`);
    console.log(`Defence : ${this.defence}`);
  }

  takeDamage = (damages) => {
    this.healthPoints -= damages;
    if (this.healthPoints <= 0) {
      this.isAlive = false;
      console.log("I just died");
    }
    console.log(`Ouch -> ${this.healthPoints}`);
  }

  fury() {
    this.strength += 30;
  }
}


let jack = new Character("Jack");
jack.show();
jack.takeDamage(5);
jack.show();
jack.fury();
jack.show();