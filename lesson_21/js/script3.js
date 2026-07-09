if (confirm('Start testing?')) {
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
				throw new Error('Insufficient funds in the account!')
		}

		toString() {
			return `ID: ${this.id}, Full Name: ${this.fullName}, Balance: ${this.moneyAmount} UAH.`
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
				throw new Error('Credit limit exceeded!')
			}
		}

		getPenalties() {
			if (this.moneyAmount < 0) {
				return (this.creditRate * Math.abs(this.moneyAmount)) / 100
			} else {
				return 0
			}
		}

		toString() {
			return `ID: ${this.id}, Full Name: ${this.fullName}, Balance: ${this.moneyAmount} UAH, Credit Limit: ${this.creditLimit} UAH, Interest Rate: ${this.creditRate}%`
		}
	}

	function print(container, content) {
		let div = document.createElement('div')
		div.innerText = content
		container.append(div)
	}

	try {
		const client1 = new GoldenClient(123, 'Ivan Vasylovych Petrenko', 10000, 50000, 20)

		const task = document.querySelector('.task')

		const titleSolution = document.createElement('h2')
		titleSolution.className = 'title-solution'
		titleSolution.innerText = 'Solution:'
		task.append(titleSolution)

		print(task, 'Initial information:')
		print(task, client1.toString())

		client1.withdrawMoney(20000)

		print(task, 'Withdraw 20,000 UAH:')
		print(task, client1.toString())

		print(task, 'Penalty for using credit funds:')
		print(task, `${client1.getPenalties()} UAH.`)
	}
	catch (error) {
		console.log(error.message)
	}
}