import Swordsman from '../swordsman'

test('Создание Swordsman', () => {
	const swordsman = new Swordsman('Егор', 'Swordsman');

	const obj = {
		name: 'Егор',
		type: 'Swordsman',
		health: 100,
		level: 1,
		attack: 40,
		defence: 10,
	};

	expect(swordsman).toEqual(obj);
})