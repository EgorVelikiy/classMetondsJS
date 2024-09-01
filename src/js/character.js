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

	levelUp() {
		if (this.health > 0) {
			this.level += 1;
			this.attack *= 1.2;
			this.defence *= 1.2;
			this.health = 100
		} else {
			throw new Error('нельзя повысить левел умершего')
		}
	}

	damage(points) {
		if (this.health !== 0) {
			this.health -= points * (1 - (this.defence / 100))
		} else {
			throw new Error('Персонаж уже мертв')
		}
	}
}
