const startDate = new Date()
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
	print(task, `Задача 1. Виводити на екран скільки хвилин користувач вже на сайті`, 'div')
	const endDate = new Date()
	const minutesCount = ((endDate - startDate) / 1000 / 60).toFixed(2)
	print(task, `Ви вже на сайті ${minutesCount} хвилин`, 'pre')
	// Задача 2. Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває. 
	print(task, `Задача 2. Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває. `, 'div')
	const procedureStart = prompt('Введіть час початку процедури (гг:хх)')
	const procedureDuration = 30
	function isProcedureOngoing(startTime, durationMinutes) {
		const [hours, minutes] = startTime.split(':').map(Number)
		const start = new Date()
		start.setHours(hours, minutes)
		const end = new Date(start.getTime() + durationMinutes * 60 * 1000)
		const now = new Date()
		return end > now
	}
	let msg = isProcedureOngoing(procedureStart, procedureDuration) ? `Процедура ще триває.` : `Процедура закінчилась.`
	print(task, msg, 'pre')
	//Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00)
	print(task, `Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00) `, 'div')
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
		msg = `До кінця робочого дня залишилось ${hours} годин ${minutes} хвилин`
	} else {
		msg = 'Робочий день вже закінчився.'
	}
	print(task, msg, 'pre')
	//Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
	print(task, `Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв) `, 'div')
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
	const userDate = prompt('Введіть дату і час (рррр-мм-дд гг:хх)')
	const isInWeek = isDateInCurrentWeek(new Date(userDate))
	msg = isInWeek ? 'Так, дата у межах поточного тижня' : 'Ні, дата поза межами цього тижня'
	print(task, msg, 'pre')
	//Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00)
	print(task, `Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00) `, 'div')

	function checkTime(workingDayStart = '8:00') {
		let msg
		const [startHours, startMinutes] = workingDayStart.split(':').map(Number)
		const now = new Date()
		const start = new Date(now)
		start.setHours(startHours, startMinutes, 0, 0)
		if (now > start) msg = 'Привіт'
		else {
			const minutesLeft = Math.ceil((start - now) / 1000 / 60)
			msg = `До початку робочого дня залишилось ${minutesLeft} хвилин`
		}
		return msg
	}
	print(task, checkTime(), 'pre')

	//Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
	print(task, `Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї. `, 'div')
	function getTimeInCity(cityName, timeZone) {
		const options = {
			timeZone,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		}
		return `У ${cityName} зараз: ${new Date().toLocaleTimeString('uk-UA', options)}`
	}

	const cities = [
		{ name: 'Лондоні', zone: 'Europe/London' },
		{ name: 'Парижі', zone: 'Europe/Paris' },
		{ name: 'Сіднеї', zone: 'Australia/Sydney' },
	]

	for (const city of cities) {
		print(task, getTimeInCity(city.name, city.zone), 'pre')
	}

	//Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента
	print(task, `Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента `, 'div')
	const students = [
		{ name: 'Анна Коваленко', birthDate: '12.03.2002' },
		{ name: 'Іван Петренко', birthDate: '25.07.2001' },
		{ name: 'Марія Шевченко', birthDate: '08.11.2003' },
		{ name: 'Олег Іванов', birthDate: '30.01.2000' },
		{ name: 'Катерина Лисенко', birthDate: '19.05.2002' },
		{ name: 'Дмитро Сидоренко', birthDate: '04.09.2001' },
		{ name: 'Наталія Гончар', birthDate: '16.02.2003' },
		{ name: 'Сергій Поліщук', birthDate: '21.06.2000' },
		{ name: 'Оксана Кравець', birthDate: '03.12.2002' },
		{ name: 'Юрій Бондар', birthDate: '27.10.2001' },
	]
	function parseDate(dateString) {
		const [day, month, year] = dateString.split('.').map(Number)
		return new Date(year, month - 1, day);
	}
	function oldestStudent(students) {

		return students.reduce((oldest, current) =>
			parseDate(current.birthDate) < parseDate(oldest.birthDate) ? current : oldest)
	}
	print(task, `Найстарший студент - ${oldestStudent(students).name}`, 'pre')
	//Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.
	function mouseMoveHandler() {
		const moveDate = new Date()
		const secondsPassed = (moveDate - startDate) / 1000
		document.removeEventListener('mousemove', mouseMoveHandler)
		alert(`Ви зробили рух мишкою через ${secondsPassed.toFixed(2)} секунд`)

	}
	document.addEventListener('mousemove', mouseMoveHandler)
	//Задача  9. Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.
	print(task, `Задача  9. Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась. `, 'div')
	const vacationStartDate = prompt('Введіть дату початку відпустки (дд.мм.рррр)')
	function vacationCheck(vacationStart) {
		const [day, month, year] = vacationStart.split('.').map(Number)
		const startDate = new Date(year, month - 1, day)
		const endDate = new Date(startDate)
		endDate.setDate(endDate.getDate() + 200)
		const currentDate = new Date()
		if (startDate <= currentDate && currentDate <= endDate)
			print(task, 'Відпустка вже триває і не закінчилась', 'pre')
		else if (currentDate > endDate)
			print(task, 'Відпустка вже закінчилась', 'pre')
		else
			print(task, 'Відпустка ще не почалась', 'pre')
	}
	vacationCheck(vacationStartDate)
	//Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.
	print(task, `Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент. `, 'div')
	const yogurtProductionDate = prompt('Введіть дату виробництва йогурта (рррр-мм-дд)')
	const daysOfValidityCount = parseInt(prompt('Введіть кількість днів придатності', '30'))
	function isValid(dateString, count) {
		let msg
		const [year, month, day] = dateString.split('-').map(Number)
		const productionDate = new Date(year, month - 1, day)
		const expirationDate = new Date(productionDate)
		expirationDate.setDate(expirationDate.getDate() + count)
		const currentDate = new Date()
		if (currentDate <= expirationDate)
			msg = `Йогурт придатний до споживання. (До ${expirationDate.toLocaleDateString('uk-UA')})`
		else
			msg = `Йогурт не придатний до споживання.Термін дії закінчився ${expirationDate.toLocaleDateString('uk-UA')}`
		return msg
	}
	print(task, isValid(yogurtProductionDate, daysOfValidityCount), 'pre')


	//Задача 12. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.
	print(task, `Задача 12. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою. `, 'div')
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
	print(task, `Час сортування бульбашкою: ${durationBubble.toFixed(2)} мс`, 'pre')
	print(task, `Час сортування включенням: ${durationInclusion.toFixed(2)} мс`, 'pre')
}
