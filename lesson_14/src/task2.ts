
if (confirm('Start testing?')) {

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

	function getYearInNMonths({ month, year }: { month: number; year: number }, N: number): number {
		return Math.floor((month - 1 + N) / 12) + year
	}
	const monthNumber: number = 27
	document.write(`<div>It is currently month ${userDate1.month} of the year ${userDate1.year}.</div>`)
	document.write(`<hr><h2 class="title-solution">Solution:</h2>`)
	document.write(`<div>After ${monthNumber} months, the year will be ${getYearInNMonths(userDate1, monthNumber)}.</div>`)
}




