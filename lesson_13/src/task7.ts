
if (confirm('Почати тестування?')) {
	function additionSimulator() {
		const min: number = 0
		const max: number = 9
		const firstNum = Math.floor(Math.random() * (max - min + 1)) + min
		const secondNum = Math.floor(Math.random() * (max - min + 1)) + min
		if (Number(prompt(`${firstNum} + ${secondNum} = ?`)) === firstNum + secondNum)
			alert('Вірно')
		else
			alert('Невірно')
	}
	setInterval(additionSimulator, 10000)
}




