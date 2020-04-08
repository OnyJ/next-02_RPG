class Character {
  constructor(hp, mana, defence, name) {
    this.hp = hp;
    this.mana = mana;
    this.defence = defence;
    this.name = name;
  }

  show() {
    console.log(`>> ${this.name}`)
    console.log(`HP: ${this.hp}`)
    console.log(`Mana : ${this.mana}`)
    console.log(`Defence : ${this.defence}`)
  }

  hurt(damages) {
    this.hp -= damages
    console.log(`Ouch -> ${this.hp}`)
  }
}

let guy = new Character(100, 60, 50, "Jack");
guy.show();
guy.hurt(12);
guy.hurt(8);
