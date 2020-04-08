class Character {
  constructor(hp, mana, strength, defence, name) {
    this.hp = hp;
    this.mana = mana;
    this.strength = strength;
    this.defence = defence;
    this.name = name;
  }

  show() {
    console.log(`>> ${this.name}`);
    console.log(`HP: ${this.hp}`);
    console.log(`Mana : ${this.mana}`);
    console.log(`Defence : ${this.defence}`);
  }

  hurt(damages) {
    this.hp -= damages
    console.log(`Ouch -> ${this.hp}`);
  }

  fury() {
    this.strength += 30;
  }
}

let guy = new Character(100, 60, 50, "Jack");
guy.show();
guy.hurt(12);
guy.hurt(8);
