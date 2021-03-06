class Character {
  constructor(name, hp, mana, dmg, defence = 0, status = "playing", isAlive = true) {
    this.hp      = hp;
    this.mana    = mana;
    this.dmg     = dmg;
    this.defence = defence;
    this.status  = status;
    this.name    = name;
    this.isAlive = isAlive;
  }

  show() {
    console.log(`>> ${this.name}`);
    if (this.hp <= 0)
      console.log(" Is huh dead...");
    else
      console.log(`HP: ${this.hp}`);
    console.log(`Mana : ${this.mana}`);
    console.log(`dmg : ${this.dmg}`);
    console.log(`Defence : ${this.defence}`);
  }

  fury() {
    this.dmg += 3;
    console.log(`${this.name} is in fury !`);
  }
}
