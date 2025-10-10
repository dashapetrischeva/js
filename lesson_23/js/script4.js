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
	// Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
	let studentsAges = [7, 7, 13, 10, 12, 12, 13, 16]
	print(task, `Задача 5. Дано список з віком учнів: ${studentsAges.join(', ')}. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.`, 'div')


	let map = new Map()
	for (const age of studentsAges) {
		let count = map.get(age) ?? 0
		map.set(age, count + 1)
	}

	map.forEach((count, age, mapRef) => {
		print(task, `${age} - ${count}`, 'pre')
	})

	let max = Math.max(...map.keys())
	print(task, `Максимальний вік: ${max}`, 'pre')
	// Задача 6. Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
	const books = [
		{ id: 1, title: 'Тіні забутих предків', year: 1911, author: 'Михайло Коцюбинський' },
		{ id: 2, title: 'Кайдашева сім’я', year: 1879, author: 'Іван Нечуй-Левицький' },
		{ id: 3, title: 'Маруся Чурай', year: 1979, author: 'Ліна Костенко' },
		{ id: 4, title: 'Тигролови', year: 1944, author: 'Іван Багряний' },
		{ id: 5, title: 'Лісова пісня', year: 1911, author: 'Леся Українка' },
		{ id: 6, title: 'Місто', year: 1928, author: 'Валер’ян Підмогильний' },
		{ id: 7, title: 'Зачарована Десна', year: 1957, author: 'Олександр Довженко' },
		{ id: 8, title: 'Украдене щастя', year: 1893, author: 'Іван Франко' },
		{ id: 9, title: 'Перехресні стежки', year: 1900, author: 'Іван Франко' },
		{ id: 10, title: 'Сон', year: 1844, author: 'Тарас Шевченко' }
	]
	print(task, `Задача 6. Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.`, 'div')

	map = new Map()
	for (const book of books) {
		let BookCount = map.get(book.author) ?? 0
		map.set(book.author, BookCount + 1)
	}
	map.forEach((count, book, mapRef) => {
		print(task, `${book} - ${count}`, 'pre')
	})
	//Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.
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
	];
	print(task, `Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.`, 'div')
	print(task, `Масив відвідувачів:`, 'pre')
	print(task, visitors.join(', '), 'p')
	map = new Map()
	for (const visitor of visitors) {
		let visitorCount = map.get(visitor) ?? 0
		map.set(visitor, visitorCount + 1)
	}
	map.forEach((count, visitor, mapRef) => {
		print(task, `${visitor} - ${count}`, 'pre')
	})
	// Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів. 
	print(task, `Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.`, 'div')

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

	let facultySet = new Set(students.map((student) => student.faculty))
	print(task, `Кількість різних факультетів: ${facultySet.size}`, 'p')
	print(task, 'Кількість студентів кожного з курсів', 'p')
	map = new Map()
	for (const student of students) {
		let courseCount = map.get(student.course) ?? 0
		map.set(student.course, courseCount + 1)
	}
	map.forEach((count, course, mapRef) => {
		print(task, `${course} - ${count}`, 'pre')
	})
	// Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9] Заокруглити вверх значення та підрахувати кількість різних показів.
	let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
	print(task, `Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9] Заокруглити вверх значення та підрахувати кількість різних показів.`, 'div')

	const roundedTemperatures = temperatures.map(el => Math.ceil(el))
	map = new Map()
	for (const temperature of roundedTemperatures) {
		let temperatureCount = map.get(temperature) ?? 0
		map.set(temperature, temperatureCount + 1)
	}
	map.forEach((count, temperature, mapRef) => {
		print(task, `${temperature} - ${count}`, 'pre')
	})

	// Задача 10 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток. 
	print(task, `Задача 10 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток. `, 'div')

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

	print(task, `Кількість студентів з гуртка з історії також відвідують гурток з математики: ${historyClub.intersection(mathClub).size}`, 'p')
	print(task, `Кількість студентів які відвідують хоча б один гурток: ${historyClub.union(mathClub).size}`, 'p')
}