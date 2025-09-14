if (confirm('Почати тестування?')) {
	document.write(`<h2 class="title-solution">Рішення:</h2>`)

	class MultiChecker {
		testedNumber: number
		correctAnswersNumber: number
		incorrectAnswersNumber: number
		secondNumber: number
		userAnswer: number
		results: { question: string, userAnswer: number, isCorrect: boolean }[]
		constructor(initTestedNumber: number) {
			this.testedNumber = initTestedNumber
			this.correctAnswersNumber = 0
			this.incorrectAnswersNumber = 0
			this.secondNumber = 0
			this.userAnswer = 0
			this.results = []
		}

		setRandomSecondNumber() {
			const min = 1
			const max = 10
			this.secondNumber = Math.floor(Math.random() * (max - min + 1)) + min
		}
		// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
		exampleGeneration() {
			this.setRandomSecondNumber()
			return `${this.testedNumber} * ${this.secondNumber} =`
		}
		// Отримання відповіді від користувача
		askUserAnswer(example: string) {
			this.userAnswer = Number(prompt(example))
		}

		// Перевірка правильності відповіді
		checkAnswer(): boolean {
			return this.userAnswer === (this.testedNumber * this.secondNumber)
		}

		// Збереження результату у масив
		saveResult(example: string, isCorrect: boolean) {
			if (isCorrect) this.correctAnswersNumber++
			else this.incorrectAnswersNumber++

			this.results.push({
				question: example,
				userAnswer: this.userAnswer,
				isCorrect: isCorrect
			})
		}

		// Виведення результатів на екран
		showResults() {
			this.results.forEach((res, index) => {
				document.write(`<div><strong>Приклад ${index + 1}:</strong></div>`)
				document.write(`<div><strong>${res.question}</strong></div>`)
				document.write(`<div>Ваша відповідь: <strong>${res.userAnswer}</strong></div>`)
				if (res.isCorrect) {
					document.write(`<div>Ваша відповідь вірна!</div><br>`)
				} else {
					const correctAnswer = this.testedNumber * Number(res.question.split("*")[1])
					document.write(`<div>Ваша відповідь не вірна! Правильна: ${correctAnswer}</div><br>`)
				}
			})

			document.write(`<hr><div>Правильних: <strong>${this.correctAnswersNumber}</strong></div>`)
			document.write(`<div>Неправильних: <strong>${this.incorrectAnswersNumber}</strong></div>`)
		}

		// Запуск тестування
		render(num: number) {
			for (let i = 0; i < num; i++) {
				const example = this.exampleGeneration()
				this.askUserAnswer(example)
				const isCorrect = this.checkAnswer()
				this.saveResult(example, isCorrect)
			}
			this.showResults()
		}
	}

	const checkNumber = Number(prompt(`Введіть число, яке будемо перевіряти (наприклад, перевірка частини таблиці множення на 7)`, '5'))
	const multiChecker = new MultiChecker(checkNumber)
	const examplesNumber = Number(prompt(`Введіть кількість прикладів`, '10'))
	multiChecker.render(examplesNumber)
}