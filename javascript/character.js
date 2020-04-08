class Character {
  constructor(hp, mana, damages, defence, name) {
    this.hp = hp;
    this.mana = mana;
    this.damages = damages;
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
    
  }
}

let guy = new Character(100, 60, 50, "Jack");
guy.show();
guy.hurt(12);
guy.hurt(8);
