
if (confirm('Почати тестування?')) {
	class Client {
		constructor(id, fullName, moneyAmount) {
			this.id = id
			this.fullName = fullName
			this.moneyAmount = moneyAmount

		}
		addMoney(money) {
			this.moneyAmount += money
		}
		withdrawMoney(money) {
			if (this.moneyAmount >= money)
				this.moneyAmount -= money
			else
				throw new Error('Не вистачає коштів на рахунку!')
		}
		toString() {
			return `ID: ${this.id}, ПІБ: ${this.fullName}, Баланс: ${this.moneyAmount} грн.`
		}
	}
	class GoldenClient extends Client {
		constructor(id, fullName, moneyAmount, creditLimit, creditRate) {
			super(id, fullName, moneyAmount)
			this.creditLimit = creditLimit
			this.creditRate = creditRate
		}
		withdrawMoney(money) {
			if ((this.moneyAmount + this.creditLimit) >= money) {
				this.moneyAmount -= money
			} else {
				throw new Error('Перевищено кредитний ліміт!')
			}
		}
		getPenalties() {
			if (this.moneyAmount < 0) {
				return (this.creditRate * Math.abs(this.moneyAmount)) / 100
			}
			else return 0
		}
		toString() {
			return `ID: ${this.id}, ПІБ: ${this.fullName}, Баланс: ${this.moneyAmount} грн., Кредитний ліміт: ${this.creditLimit} грн., Процентна ставка: ${this.creditRate}%`
		}
	}
	function print(container, content) {
		let div = document.createElement('div')
		div.innerText = content
		container.append(div)
	}
	try {
		const client1 = new GoldenClient(123, 'Петренко Іван Васильович', 10000, 50000, 20)
		const task = document.querySelector('.task')
		const titleSolution = document.createElement('h2')
		titleSolution.className = 'title-solution'
		titleSolution.innerText = 'Рішення:'
		task.append(titleSolution)
		print(task, 'Початкова інформація:')
		print(task, client1.toString())
		client1.withdrawMoney(20000)
		print(task, 'Знімаємо 20000 грн.:')
		print(task, client1.toString())
		print(task, 'Пеня за використання кредитних коштів:')
		print(task, `${client1.getPenalties()} грн.`)
	}
	catch (error) {
		console.log(error.message)
	}

}