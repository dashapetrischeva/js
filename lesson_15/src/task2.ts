
if (confirm('Почати тестування?')) {
	document.write(`<h2 class="title-solution">Рішення:</h2>`)
	class Auto {
		brand: string
		tankSize: number
		numberOfAvailableLiters: number
		numberOfSeats: number
		numberOfPassengers: number
		constructor(initBrand: string, initTankSize: number, initNumberOfAvailableLiters: number, initNumberOfSeats: number, initNumberOfPassengers: number
		) {
			this.brand = initBrand
			this.tankSize = initTankSize
			this.numberOfAvailableLiters = initNumberOfAvailableLiters
			this.numberOfSeats = initNumberOfSeats
			this.numberOfPassengers = initNumberOfPassengers
		}
		// методи
		// Заправка на вказану кількість літрів
		refueling(numLiter: number) {
			if ((this.numberOfAvailableLiters + numLiter) <= this.tankSize)
				this.numberOfAvailableLiters += numLiter
			else
				this.numberOfAvailableLiters = this.tankSize
		}
		// Виведення кількості пасажирів
		getNumberPassengers() {
			return this.numberOfPassengers
		}
		// Додавання пасажирів
		addingPassengers(numPassengers: number) {
			if ((this.numberOfPassengers + numPassengers) <= this.numberOfSeats)
				this.numberOfPassengers += numPassengers
			else
				this.numberOfPassengers = this.numberOfSeats
		}
		// Висадка пасажирів
		disembarkingPassengers(numPassengers: number) {
			if ((this.numberOfPassengers - numPassengers) >= 0)
				this.numberOfPassengers -= numPassengers
			else
				this.numberOfPassengers = 0
		}
	}
	const myAuto = new Auto("Mercedes", 70, 20, 5, 1)
	myAuto.refueling(100)
	console.log(myAuto.numberOfAvailableLiters)
	myAuto.addingPassengers(5)
	console.log(myAuto.numberOfPassengers)
	myAuto.disembarkingPassengers(2)
	console.log(myAuto.numberOfPassengers)
	document.write(`<div>4) Відповідь у консолі</div>`)
}




