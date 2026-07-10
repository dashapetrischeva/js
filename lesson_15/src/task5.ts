if (confirm('Start testing?')) {

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

		showCoupleForDancing() {
			const randomBoy = this.getRandomBoysName()
			const randomGirl = this.getRandomGirlsName()
			alert(`Couple for dancing: ${randomBoy} and ${randomGirl}`)
		}

		run() {
			setInterval(() => this.showCoupleForDancing(), 5000)
		}
	}
	const boys = ['Ivan', 'Petro', 'Oleksandr']
	const girls = ['Olga', 'Irina', 'Katarina', 'Natalia']
	const Ivan = new DanceManager(boys, girls)
	Ivan.run()

}