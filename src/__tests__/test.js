import Team from '../js/team';
import Character from '../js/character';

test('Method adds a single character', () => {
  const unit = new Character('Zed', 'master');
  const team = new Team();
  team.add(unit);
  expect(team.members).toContain(unit);
});

test('Method adds a existing character', () => {
  const unit = new Character('Zed', 'master');
  const team = new Team();
  team.add(unit);
  expect(() => team.add(unit)).toThrowError();
  // ФУНКЦИЯ выдает ошибку, поэтому после expect вызов функции
});

test('A method that adds an arbitrary number of characters', () => {
  const unit = new Character('Zed', 'master');
  const unit2 = new Character('Gor', 'cop');
  const unit3 = new Character('Red', 'robot');
  const team = new Team();
  team.addAll(unit, unit2, unit3, unit);
  expect(team.members).toContain(unit, unit2, unit3);
});

test('A method that adds an arbitrary number of characters', () => {
  const unit = new Character('Zed', 'master');
  const unit2 = new Character('Gor', 'cop');
  const unit3 = new Character('Red', 'robot');
  const team = new Team();
  team.addAll(unit, unit2, unit3, unit);
  expect(team.members.size).toBe(3);
});

test('A method that adds an arbitrary number of characters', () => {
  const unit = new Character('Zed', 'master');
  const unit2 = new Character('Gor', 'cop');
  const unit3 = new Character('Red', 'robot');
  const team = new Team();
  team.addAll(unit, unit2, unit3, unit);
  expect(team.members.size).toEqual(3);
});

test('The method converts a Set to an array', () => {
  const unit = new Character('Zed', 'master');
  const unit2 = new Character('Gor', 'cop');
  const unit3 = new Character('Red', 'robot');
  const team = new Team();
  team.addAll(unit, unit2, unit3, unit);
  const arrUnits = team.toArray();
  /*         const result = [unit, unit2, unit3]  // Вариант
        expect(arrUnits).toEqual(result2); */
  const result2 = [
    { name: 'Zed', status: 'master' },
    { name: 'Gor', status: 'cop' },
    { name: 'Red', status: 'robot' },
  ];
  expect(arrUnits).toEqual(result2);
});
