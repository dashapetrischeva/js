if (confirm('Почати тестування?')) {
	document.write(`<h2 class="title-solution">Рішення:</h2>`)

	class MultiChecker {
		testedNumber: number
		correctAnswersNumber: number
		incorrectAnswersNumber: number
		secondNumber: number
		userAnswer: number
		constructor(initTestedNumber: number) {
			this.testedNumber = initTestedNumber
			this.correctAnswersNumber = 0
			this.incorrectAnswersNumber = 0
			this.secondNumber = 0
			this.userAnswer = 0
		}
		// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
		exampleGeneration() {
			const min = 1
			const max = 10
			this.secondNumber = Math.floor(Math.random() * (max - min + 1)) + min
			return `${this.testedNumber} * ${this.secondNumber} =`
		}
		//Перевірка правильності вказаної відповіді
		checkAnswer() {

			this.userAnswer = Number(prompt(this.exampleGeneration()))
			if (this.userAnswer === (this.testedNumber * this.secondNumber)) {
				this.correctAnswersNumber++
				return true
			}
			else {
				this.incorrectAnswersNumber++
				return false
			}
		}
		//render - виведення інформації про тестування на екран
		render(num: number) {
			for (let i = 0; i < num; i++) {
				const isCorrect = this.checkAnswer()
				document.write(`<div><strong>Приклад ${i + 1}: ${this.testedNumber} * ${this.secondNumber} </strong></div>`)
				document.write(`<div>Ваша відповідь: ${this.userAnswer}</div>`)
				if (isCorrect) {
					document.write(`<div>Ваша відповідь вірна!</div><br>`)
				}
				else {
					document.write(`<div>Ваша відповідь не вірна! Правильна: ${this.testedNumber * this.secondNumber}</div><br>`)
				}
			}
			document.write(`<hr><div>Правильних: <strong>${this.correctAnswersNumber}</strong></div>`)
			document.write(`<div>Неправильних: <strong>${this.incorrectAnswersNumber}</strong></div>`)
		}
	}
	const checkNumber = Number(prompt(`Введіть число, яке будемо перевіряти (наприклад, перевірка частини таблиці множення на 7)`, '5'))
	const multiChecker = new MultiChecker(checkNumber)
	const examplesNumber = Number(prompt(`Введіть кількість прикладів`, '10'))
	multiChecker.render(examplesNumber)
}