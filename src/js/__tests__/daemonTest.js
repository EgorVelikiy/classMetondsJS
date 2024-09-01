import Daemon from '../daemon'

test('Создание Daemon', () => {
	const daemon = new Daemon('Егор', 'Daemon');

	const obj = {
		name: 'Егор',
		type: 'Daemon',
		health: 100,
		level: 1,
		attack: 10,
		defence: 40,
	};

	expect(daemon).toEqual(obj);
})