export default class Character {
	constructor (name, type) {
		if (name.length < 2 || name.length > 10) {
			throw new Error('Некорректное имя')
		}

		const classes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

		if (!classes.includes(type)) {
			throw new Error('Некорректный тип')
		}

		this.name = name;
		this.type = type;
		this.health = 100;
		this.level = 1;
		this.attack = undefined;
		this.defence = undefined;
	}
}
