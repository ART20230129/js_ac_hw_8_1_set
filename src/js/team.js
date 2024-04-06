export default class Team {
  constructor() {
    this.members = new Set();
  }

  // добавляeт выбранного персонажа в команду (объект класса Character)
  add(unit) {
    if (this.members.has(unit)) {
      throw new Error(`Character ${unit.name} is already present in the team`);
    } else {
      this.members.add(unit);
    }
  }

  // добавляет произвольное количество персонажей в команду
  addAll(...unites) {
    unites.forEach((item) => this.members.add(item));
  }

  // производить конвертацию Set в массив
  toArray() {
    /*             let res = Array.from(this.members);
            console.log(res);
            return res */
    return Array.from(this.members);
  }
}
