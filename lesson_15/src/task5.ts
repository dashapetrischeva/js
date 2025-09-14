if (confirm('Почати тестування?')) {

	class DanceManager {
		boysNames: string[]
		girlsNames: string[]
		constructor(initBoysNames: string[], initGirlsNames: string[]) {
			this.boysNames = initBoysNames
			this.girlsNames = initGirlsNames
		}
		getRandomBoysName() {
			const randomIndex = Math.floor(Math.random() * this.boysNames.length)
			return this.boysNames[randomIndex]
		}
		getRandomGirlsName() {
			const randomIndex = Math.floor(Math.random() * this.girlsNames.length)
			return this.girlsNames[randomIndex]
		}
		//Метод виведення пари для танців
		showCoupleForDancing() {
			const randomBoy = this.getRandomBoysName()
			const randomGirl = this.getRandomGirlsName()
			alert(`Пара для танців: ${randomBoy} та ${randomGirl}`)
		}
		// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців
		run() {
			setInterval(() => this.showCoupleForDancing(), 5000)
		}
	}
	const boys = ['Іван', 'Петро', 'Олександр']
	const girls = ['Ольга', 'Ірина', 'Катерина', 'Наталья']
	const Ivan = new DanceManager(boys, girls)
	Ivan.run()

}