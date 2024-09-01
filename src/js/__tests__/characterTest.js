import Character from '../character'

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