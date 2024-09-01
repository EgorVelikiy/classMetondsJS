import Magician from '../magician'

test('Создание Magician', () => {
	const magician = new Magician('Егор', 'Magician');

	const obj = {
		name: 'Егор',
		type: 'Magician',
		health: 100,
		level: 1,
		attack: 10,
		defence: 40,
	};

	expect(magician).toEqual(obj);
})