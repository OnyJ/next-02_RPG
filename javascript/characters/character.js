class Character {
  constructor(name, healthPoints = 100, mana = 70, strength = 8, defence = 0, isAlive = true) {
    this.healthPoints = healthPoints;
    this.mana = mana;
    this.strength = strength;
    this.defence = defence;
    this.name = name;
    this.isAlive = isAlive;
  }

  show() {
    console.log(`>> ${this.name}`);
    if (this.healthPoints <= 0)
      console.log(" Is huh dead...");
    else
      console.log(`HP: ${this.healthPoints}`);
    console.log(`Mana : ${this.mana}`);
    console.log(`Strength : ${this.strength}`);
    console.log(`Defence : ${this.defence}`);
  }

  fury() {
    this.strength += 30;
    console.log(`${this.name} is in fury !`);
  }
}
