
if (confirm('Почати тестування?')) {
	document.write(`<h2 class="title-solution">Рішення:</h2>`)
	class CompanyCar {
		driver: string = ''
		brand: string = ''
		number: string = ''
		static objCompanyCar: CompanyCar

		constructor(initDriver: string, initBrand: string, initNumber: string) {
			if (CompanyCar.objCompanyCar) return CompanyCar.objCompanyCar
			this.driver = initDriver
			this.brand = initBrand
			this.number = initNumber
			CompanyCar.objCompanyCar = this
		}
		toString() {
			return `<div>Водій: ${this.driver}, марка:${this.brand}, номер:${this.number}</div>`
		}
	}
	const companyCar1 = new CompanyCar('Олексій Петров', 'Toyota Corolla', 'AB1234CD')
	document.write(companyCar1.toString())
	const companyCar2 = new CompanyCar('Іван Коваленко', 'Ford Transit', 'CD9012GH')
	document.write(companyCar2.toString())
}




