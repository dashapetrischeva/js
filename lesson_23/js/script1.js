if (confirm('Почати тестування?')) {
	function print(container, content, tag) {
		let myTag = document.createElement(tag)
		myTag.innerText = content
		container.append(myTag)
	}
	const task = document.querySelector('.task')
	const titleSolution = document.createElement('h2')
	titleSolution.className = 'title-solution'
	titleSolution.innerText = 'Рішення:'
	task.append(titleSolution)
	//Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор(050…. 🡪 MTC, 096… 🡪 Kyivstar, ….)
	class PhoneNumber {
		constructor(number) {
			this.number = number.trim()
		}
		[Symbol.toPrimitive] = function () {

			const code = this.number.slice(0, 3)
			let result
			switch (code) {
				case '050':
				case '066':
				case '095':
				case '099':
					result = 'MTC'
					break
				case '067':
				case '068':
				case '096':
				case '097':
				case '098':
					result = 'Kyivstar'
					break
				case '063':
				case '073':
				case '093':
					result = 'Lifecell'
					break
				default:
					result = 'Невідомий оператор'
			}
			return `${this.number} — ${result}`
		}

	}
	const number1 = new PhoneNumber('0502345678')
	const number2 = new PhoneNumber('0962345678')
	print(task, number1, 'pre')
	print(task, number2, 'pre')
}