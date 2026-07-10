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
	// Task 5. Given a list of students' ages. Count how many times each age appears in the list and determine the maximum age.
	let studentsAges = [7, 7, 13, 10, 12, 12, 13, 16]

	print(
		task,
		`Task 5. Given a list of students' ages: ${studentsAges.join(', ')}. Count how many times each age appears in the list and determine the maximum age.`,
		'div'
	)

	let map = new Map()

	for (const age of studentsAges) {
		let count = map.get(age) ?? 0
		map.set(age, count + 1)
	}

	map.forEach((count, age) => {
		print(task, `${age} - ${count}`, 'pre')
	})

	let max = Math.max(...map.keys())
	print(task, `Maximum age: ${max}`, 'pre')

	// Task 6. Given an array of books (title, publication year, author). Count the number of books for each author.
	const books = [
		{ id: 1, title: 'Shadows of Forgotten Ancestors', year: 1911, author: 'Mykhailo Kotsiubynsky' },
		{ id: 2, title: "Kaidash's Family", year: 1879, author: 'Ivan Nechui-Levytskyi' },
		{ id: 3, title: 'Marusia Churai', year: 1979, author: 'Lina Kostenko' },
		{ id: 4, title: 'The Hunters and the Hunted', year: 1944, author: 'Ivan Bahrianyi' },
		{ id: 5, title: 'The Forest Song', year: 1911, author: 'Lesya Ukrainka' },
		{ id: 6, title: 'The City', year: 1928, author: 'Valerian Pidmohylnyi' },
		{ id: 7, title: 'The Enchanted Desna', year: 1957, author: 'Oleksandr Dovzhenko' },
		{ id: 8, title: 'Stolen Happiness', year: 1893, author: 'Ivan Franko' },
		{ id: 9, title: 'Cross-Paths', year: 1900, author: 'Ivan Franko' },
		{ id: 10, title: 'The Dream', year: 1844, author: 'Taras Shevchenko' }
	]

	print(
		task,
		'Task 6. Given an array of books (title, publication year, author). Count the number of books for each author.',
		'div'
	)

	map = new Map()

	for (const book of books) {
		let bookCount = map.get(book.author) ?? 0
		map.set(book.author, bookCount + 1)
	}

	map.forEach((count, author) => {
		print(task, `${author} - ${count}`, 'pre')
	})

	// Task 7. Given information about visitors to a website (each visitor has a login). Count the number of visits for each visitor.
	const visitors = [
		"anna23",
		"maxim07",
		"olena_k",
		"anna23",
		"taras",
		"olena_k",
		"anna23",
		"iryna",
		"taras",
		"maxim07",
		"olena_k",
		"dmytro88",
		"iryna",
		"taras",
		"maxim07"
	]

	print(
		task,
		'Task 7. Given information about website visitors (each visitor has a login). Count the number of visits for each visitor.',
		'div'
	)

	print(task, 'Visitors:', 'pre')
	print(task, visitors.join(', '), 'p')

	map = new Map()

	for (const visitor of visitors) {
		let visitorCount = map.get(visitor) ?? 0
		map.set(visitor, visitorCount + 1)
	}

	map.forEach((count, visitor) => {
		print(task, `${visitor} - ${count}`, 'pre')
	})

	// Task 8. Given an array of students (full name, course, faculty). Count the number of different faculties and the number of students in each course.
	print(
		task,
		'Task 8. Given an array of students (full name, course, faculty). Count the number of different faculties and the number of students in each course.',
		'div'
	)

	const students = [
		{ name: "Anna Kovalenko", course: 1, faculty: "Computer Science" },
		{ name: "Maksym Petrenko", course: 2, faculty: "Economics" },
		{ name: "Olena Ivanova", course: 1, faculty: "Philology" },
		{ name: "Taras Shevchenko", course: 3, faculty: "Computer Science" },
		{ name: "Iryna Kucher", course: 2, faculty: "Mathematics" },
		{ name: "Dmytro Hryn", course: 4, faculty: "Economics" },
		{ name: "Oksana Melnyk", course: 1, faculty: "Psychology" },
		{ name: "Petro Dudnyk", course: 3, faculty: "Mathematics" },
		{ name: "Kateryna Savchuk", course: 2, faculty: "Computer Science" },
		{ name: "Yuliia Moroz", course: 4, faculty: "Philology" }
	]

	let facultySet = new Set(students.map(student => student.faculty))

	print(task, `Number of different faculties: ${facultySet.size}`, 'p')
	print(task, 'Number of students in each course:', 'p')

	map = new Map()

	for (const student of students) {
		let courseCount = map.get(student.course) ?? 0
		map.set(student.course, courseCount + 1)
	}

	map.forEach((count, course) => {
		print(task, `${course} - ${count}`, 'pre')
	})

	// Task 9. Given an array of temperature readings. Count the occurrences of each reading. Round each value up and count the occurrences of the rounded values.
	let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

	print(
		task,
		'Task 9. Given an array of temperature readings. Count the occurrences of each reading. Round each value up and count the occurrences of the rounded values.',
		'div'
	)

	const roundedTemperatures = temperatures.map(el => Math.ceil(el))

	map = new Map()

	for (const temperature of roundedTemperatures) {
		let temperatureCount = map.get(temperature) ?? 0
		map.set(temperature, temperatureCount + 1)
	}

	map.forEach((count, temperature) => {
		print(task, `${temperature} - ${count}`, 'pre')
	})

	// Task 10. Given two lists of students' last names attending the Mathematics and History clubs. Count how many History club students also attend the Mathematics club. Also determine how many students attend at least one club.
	print(
		task,
		'Task 10. Given two lists of students attending the Mathematics and History clubs. Count how many History club students also attend the Mathematics club. Also determine how many students attend at least one club.',
		'div'
	)

	const mathClub = new Set([
		"Kovalenko",
		"Petrenko",
		"Shevchenko",
		"Melnyk",
		"Savchuk",
		"Bondar"
	])

	const historyClub = new Set([
		"Shevchenko",
		"Ivanova",
		"Kovalenko",
		"Tkachenko",
		"Bondar",
		"Moroz"
	])

	print(
		task,
		`Number of History club students who also attend the Mathematics club: ${historyClub.intersection(mathClub).size}`,
		'p'
	)

	print(
		task,
		`Number of students attending at least one club: ${historyClub.union(mathClub).size}`,
		'p'
	)
}