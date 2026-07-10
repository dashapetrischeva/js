if (confirm('Start testing?')) {
	document.write(`<h2 class="title-solution">Solution:</h2>`)

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

		exampleGeneration() {
			this.setRandomSecondNumber()
			return `${this.testedNumber} * ${this.secondNumber} =`
		}

		askUserAnswer(example: string) {
			this.userAnswer = Number(prompt(example))
		}


		checkAnswer(): boolean {
			return this.userAnswer === (this.testedNumber * this.secondNumber)
		}


		saveResult(example: string, isCorrect: boolean) {
			if (isCorrect) this.correctAnswersNumber++
			else this.incorrectAnswersNumber++

			this.results.push({
				question: example,
				userAnswer: this.userAnswer,
				isCorrect: isCorrect
			})
		}


		showResults() {
			this.results.forEach((res, index) => {
				document.write(`<div><strong>Example ${index + 1}:</strong></div>`)
				document.write(`<div><strong>${res.question}</strong></div>`)
				document.write(`<div>Your answer: <strong>${res.userAnswer}</strong></div>`)
				if (res.isCorrect) {
					document.write(`<div>Your answer is correct!</div><br>`)
				} else {
					const correctAnswer = this.testedNumber * Number(res.question.split("*")[1])
					document.write(`<div>Your answer is incorrect! Correct: ${correctAnswer}</div><br>`)
				}
			})

			document.write(`<hr><div>Correct: <strong>${this.correctAnswersNumber}</strong></div>`)
			document.write(`<div>Incorrect: <strong>${this.incorrectAnswersNumber}</strong></div>`)
		}


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

	const checkNumber = Number(prompt(`Enter the number we will test (for example, testing a portion of the multiplication table for 7)`, '5'))
	const multiChecker = new MultiChecker(checkNumber)
	const examplesNumber = Number(prompt(`Enter the number of examples`, '10'))
	multiChecker.render(examplesNumber)
}