
if (confirm('Почати тестування?')) {

	//Розробити функцію, у яку передають об’єкт(день, місяць, рік).Визначити, який буде рік через N місяців.
	type UserDate = {
		day: number,
		month: number,
		year: number,
	}
	let userDate1 = {
		day: 23,
		month: 5,
		year: 2023,
	}
	/**
	 * Функція визначає який буде рік через N місяців
	 * @param{ month: number; year: number } param0 деструктурізація - беремо з об'єкту тільки month та year
	 * @param{number} N кількість місяців
	 * @returns{number} який буде рік
	 */
	function getYearInNMonths({ month, year }: { month: number; year: number }, N: number): number {
		return Math.floor((month - 1 + N) / 12) + year
	}
	const monthNumber: number = 27
	document.write(`<div>Зараз ${userDate1.month} місяць та ${userDate1.year} рік.</div>`)
	document.write(`<hr><h2 class="title-solution">Рішення:</h2>`)
	document.write(`<div>Через ${monthNumber} місяців буде ${getYearInNMonths(userDate1, monthNumber)} рік.</div>`)
}




