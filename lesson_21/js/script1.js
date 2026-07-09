const startDate = new Date()
if (confirm('Start testing?')) {
	function print(container, content, tag) {
		let myTag = document.createElement(tag)
		myTag.innerText = content
		container.append(myTag)
	}
	const task = document.querySelector('.task')
	const titleSolution = document.createElement('h2')
	titleSolution.className = 'title-solution'
	titleSolution.innerText = 'Solution:'
	task.append(titleSolution)
	print(task, `Task 1. Display the number of minutes the user has been on the site`, 'div')
	const endDate = new Date()
	const minutesCount = ((endDate - startDate) / 1000 / 60).toFixed(2)
	print(task, `You have been on the site for ${minutesCount} minutes`, 'pre')
	// Task 2. Enter the start time of the procedure (the procedure lasts 30 minutes). Determine if the procedure is still ongoing.
	print(task, `Task 2. Enter the start time of the procedure (the procedure lasts 30 minutes). Determine if the procedure is still ongoing.`, 'div')
	const procedureStart = prompt('Enter the start time of the procedure (HH:MM)')
	const procedureDuration = 30
	function isProcedureOngoing(startTime, durationMinutes) {
		const [hours, minutes] = startTime.split(':').map(Number)
		const start = new Date()
		start.setHours(hours, minutes)
		const end = new Date(start.getTime() + durationMinutes * 60 * 1000)
		const now = new Date()
		return end > now
	}
	let msg = isProcedureOngoing(procedureStart, procedureDuration) ? `The procedure is still ongoing.` : `The procedure has finished.`
	print(task, msg, 'pre')
	//Task 3. Determine how much time is left until the end of the workday (until 17:00)
	print(task, `Task 3. Determine how much time is left until the end of the workday (until 17:00) `, 'div')
	function timeLeftToEndOfWorkday() {
		const endOfWorkday = new Date()
		endOfWorkday.setHours(17, 0, 0, 0)
		const now = new Date()
		return endOfWorkday - now
	}
	const timeLeftToEndOfWorkdayMS = timeLeftToEndOfWorkday()
	if (timeLeftToEndOfWorkdayMS > 0) {
		const hours = Math.floor(timeLeftToEndOfWorkdayMS / 1000 / 60 / 60)
		const minutes = Math.floor((timeLeftToEndOfWorkdayMS / 1000 / 60) % 60)
		msg = `Time left until the end of the workday: ${hours} hours ${minutes} minutes`
	} else {
		msg = 'The workday has already ended.'
	}
	print(task, msg, 'pre')
	//Task 4. Create a function that allows you to determine if the specified date and time are within the bounds of the current week (from Monday 0 hours, 0 minutes, to Sunday 23 hours, 59 minutes)
	print(task, `Task 4. Create a function that allows you to determine if the specified date and time are within the bounds of the current week (from Monday 0 hours, 0 minutes, to Sunday 23 hours, 59 minutes) `, 'div')
	function isDateInCurrentWeek(date) {
		const now = new Date()

		const day = now.getDay() === 0 ? 7 : now.getDay()

		const monday = new Date(now)
		monday.setHours(0, 0, 0, 0)
		monday.setDate(now.getDate() - (day - 1))

		const sunday = new Date(monday)
		sunday.setDate(monday.getDate() + 6)
		sunday.setHours(23, 59, 59, 999)

		return date >= monday && date <= sunday
	}
	const userDate = prompt('Enter the date and time (YYYY-MM-DD HH:MM)')
	const isInWeek = isDateInCurrentWeek(new Date(userDate))
	msg = isInWeek ? 'Yes, the date is within the bounds of the current week' : 'No, the date is outside the bounds of the current week'
	print(task, msg, 'pre')
	//Task 5. When entering the site, greet the user or display a message about how many minutes are left until the start of the workday (start at 8:00)
	print(task, `Task 5. When entering the site, greet the user or display a message about how many minutes are left until the start of the workday (start at 8:00) `, 'div')

	function checkTime(workingDayStart = '8:00') {
		let msg
		const [startHours, startMinutes] = workingDayStart.split(':').map(Number)
		const now = new Date()
		const start = new Date(now)
		start.setHours(startHours, startMinutes, 0, 0)
		if (now > start) msg = 'Hello'
		else {
			const minutesLeft = Math.ceil((start - now) / 1000 / 60)
			msg = `Time left until the start of the workday: ${minutesLeft} minutes`
		}
		return msg
	}
	print(task, checkTime(), 'pre')

	//Task 6. Display the current time in London, Paris, and Sydney.
	print(task, `Task 6. Display the current time in London, Paris, and Sydney. `, 'div')
	function getTimeInCity(cityName, timeZone) {
		const options = {
			timeZone,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		}
		return `In ${cityName} it is currently: ${new Date().toLocaleTimeString('uk-UA', options)}`
	}

	const cities = [
		{ name: 'London', zone: 'Europe/London' },
		{ name: 'Paris', zone: 'Europe/Paris' },
		{ name: 'Sydney', zone: 'Australia/Sydney' },
	]

	for (const city of cities) {
		print(task, getTimeInCity(city.name, city.zone), 'pre')
	}

	//Task 7. Given a list of students (name and birth date: in the form of text (day.month.year)), find the oldest student
	print(task, `Task 7. Given a list of students (name and birth date: in the form of text (day.month.year)), find the oldest student `, 'div')
	const students = [
		{ name: 'Anna Kovalenko', birthDate: '12.03.2002' },
		{ name: 'Ivan Petrenko', birthDate: '25.07.2001' },
		{ name: 'Maria Shevchenko', birthDate: '08.11.2003' },
		{ name: 'Oleg Ivanov', birthDate: '30.01.2000' },
		{ name: 'Kateryna Lysenko', birthDate: '19.05.2002' },
		{ name: 'Dmytro Sidorenko', birthDate: '04.09.2001' },
		{ name: 'Natalia Hontar', birthDate: '16.02.2003' },
		{ name: 'Sergiy Polishchuk', birthDate: '21.06.2000' },
		{ name: 'Oksana Kravets', birthDate: '03.12.2002' },
		{ name: 'Yuriy Bondar', birthDate: '27.10.2001' },
	]
	function parseDate(dateString) {
		const [day, month, year] = dateString.split('.').map(Number)
		return new Date(year, month - 1, day);
	}
	function oldestStudent(students) {

		return students.reduce((oldest, current) =>
			parseDate(current.birthDate) < parseDate(oldest.birthDate) ? current : oldest)
	}
	print(task, `The oldest student is ${oldestStudent(students).name}`, 'pre')
	//Task 8. Determine how many seconds have passed since the user visited the site until they moved the mouse.
	function mouseMoveHandler() {
		const moveDate = new Date()
		const secondsPassed = (moveDate - startDate) / 1000
		document.removeEventListener('mousemove', mouseMoveHandler)
		alert(`You moved the mouse after ${secondsPassed.toFixed(2)} seconds`)

	}
	document.addEventListener('mousemove', mouseMoveHandler)
	//Task 9. A user planned to take a 200-day maternity leave (the start date is entered). Determine if the leave is already in progress and if it has not ended.
	print(task, `Task 9. A user planned to take a 200-day maternity leave (the start date is entered). Determine if the leave is already in progress and if it has not ended. `, 'div')
	const vacationStartDate = prompt('Enter the start date of the vacation (dd.mm.yyyy)')
	function vacationCheck(vacationStart) {
		const [day, month, year] = vacationStart.split('.').map(Number)
		const startDate = new Date(year, month - 1, day)
		const endDate = new Date(startDate)
		endDate.setDate(endDate.getDate() + 200)
		const currentDate = new Date()
		if (startDate <= currentDate && currentDate <= endDate)
			print(task, 'The vacation is already in progress and has not ended.', 'pre')
		else if (currentDate > endDate)
			print(task, 'The vacation has already ended.', 'pre')
		else
			print(task, 'The vacation has not started yet.', 'pre')
	}
	vacationCheck(vacationStartDate)
	//Task 10. Given the production date of a yogurt (input year, month, day) and the number of days of validity, determine if it is still valid.
	print(task, `Task 10. Given the production date of a yogurt (input year, month, day) and the number of days of validity, determine if it is still valid. `, 'div')
	const yogurtProductionDate = prompt('Enter the production date of the yogurt (yyyy-mm-dd)')
	const daysOfValidityCount = parseInt(prompt('Enter the number of days of validity', '30'))
	function isValid(dateString, count) {
		let msg
		const [year, month, day] = dateString.split('-').map(Number)
		const productionDate = new Date(year, month - 1, day)
		const expirationDate = new Date(productionDate)
		expirationDate.setDate(expirationDate.getDate() + count)
		const currentDate = new Date()
		if (currentDate <= expirationDate)
			msg = `The yogurt is still valid. (Valid until ${expirationDate.toLocaleDateString('uk-UA')})`
		else
			msg = `The yogurt is not valid for consumption. The validity period ended on ${expirationDate.toLocaleDateString('uk-UA')}`
		return msg
	}
	print(task, isValid(yogurtProductionDate, daysOfValidityCount), 'pre')


	//Task 12. Form an array with 1000 elements from 1 to 800. Compare the sorting time of bubble sort and insertion sort.
	print(task, `Task 12. Form an array with 1000 elements from 1 to 800. Compare the sorting time of bubble sort and insertion sort. `, 'div')
	function createArray() {
		let arr = []
		const min = 1
		const max = 800
		for (let i = 0; i < 1000; i++) {
			arr[i] = Math.floor(Math.random() * (max - min + 1)) + min
		}
		return arr
	}
	const array = createArray()
	function sortBubble(arr) {
		let changed
		do {
			changed = false;
			for (let i = 1; i < arr.length; i++) {
				if (arr[i - 1] > arr[i]) {
					let tmp = arr[i - 1]
					arr[i - 1] = arr[i]
					arr[i] = tmp
					changed = true
				}
			}
		} while (changed)
		return arr
	}
	const startBubble = new Date()
	sortBubble([...array])
	const endBubble = new Date()
	const durationBubble = endBubble - startBubble
	function sortInsertion(arr) {
		for (let k = 1; k < arr.length; k++) {
			const currentElement = arr[k]
			let i = k - 1
			while (i >= 0 && arr[i] > currentElement) {
				arr[i + 1] = arr[i]
				i--
			}
			arr[i + 1] = currentElement
		}
		return arr
	}
	const startInclusion = new Date()
	sortInsertion([...array])
	const endInclusion = new Date()
	const durationInclusion = endInclusion - startInclusion
	print(task, `Time for bubble sort: ${durationBubble.toFixed(2)} ms`, 'pre')
	print(task, `Time for insertion sort: ${durationInclusion.toFixed(2)} ms`, 'pre')
}
