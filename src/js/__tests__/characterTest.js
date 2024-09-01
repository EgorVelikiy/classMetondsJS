import Character from '../character'
import Bowman from '../bowman'
test('Создание Character', () => {
	const char = new Character('Егор', 'Undead');

	const obj = {
		name: 'Егор',
		type: 'Undead',
		health: 100,
		level: 1,
		attack: undefined,
		defence: undefined,
	};

	expect(char).toEqual(obj);
});


test('Проверка имени', () => {
	expect(() => {new Character('Егорегорегорегорегоергфцвафвфц', 'Undead')}).toThrow();
});

test('Проверка типа', () => {
	expect(() => {new Character('Егор', 'Student')}).toThrow();
});

test('Получение нового уровня персонажа hp > 0', () => {
	const char = new Bowman('Егор');
	char.levelUp();

	const obj = {
		name: 'Егор',
		type: 'Bowman',
		health: 100,
		level: 2,
		attack: 30,
		defence: 30,
	}

	expect(char).toEqual(obj);
});

test('Получение нового уровня персонажа hp < 0', () => {
	const char = new Bowman('Егор');
	char.health = 0;

	expect(() => char.levelUp()).toThrow();
});


test('Получение урона персонажем hp > 0', () => {
	const char = new Bowman('Егор');
	char.damage(40)


	expect(char.health).toBe(70);
});

test('Получение урона персонажем hp < 0', () => {
	const char = new Bowman('Егор');
	char.health = 0

	expect(() => char.damage(40)).toThrow();
});
