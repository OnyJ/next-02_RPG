class Character {
  constructor(hp, mana, defence, name) {
    this.hp = hp;
    this.mana = mana;
    this.defence = defence;
    this.name = name;
  }

  show() {
    console.log(`
      >> ${this.name}
      HP: ${this.hp}
      Mana : ${this.mana}
      Defence : ${this.defence}
    `);
  }
}

let guy = new Character(100, 60, 50, "Jack");
guy.show();
