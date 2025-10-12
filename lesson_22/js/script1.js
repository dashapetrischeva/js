if (confirm('Почати тестування?')) {
	function print(container, content, tag) {
		let myTag = document.createElement(tag)
		myTag.innerText = content
		container.append(myTag)
	}
	function printTask(task, title, arr) {
		print(task, title, 'div');
		print(task, arr.length > 0 ? arr.join('\n') : 'Таких рядків немає', 'pre');
	}

	//Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази). 
	const arrStrings = [
		"I have 2 cats",
		"Hello world",
		"My phone number is 12345",
		"No numbers here",
		"2025 will be amazing",
		"Just text",
		"Room 404 not found",
		"Seven",
		"Pi is 3.14",
		"End of list"
	];

	let exp = /\d/
	const task = document.querySelector('.task')
	print(task, 'Дано масив рядків:', 'div')
	print(task, arrStrings.join('\n'), 'pre')
	const titleSolution = document.createElement('h2')
	titleSolution.className = 'title-solution'
	titleSolution.innerText = 'Рішення:'
	task.append(titleSolution)
	const arrStringsHaveNumber = arrStrings.filter((s) => exp.test(s))
	printTask(task, 'Задача 1. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).', arrStringsHaveNumber)
	// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
	const arrStringsHaveNoNumber = arrStrings.filter((s) => s.match(exp) === null)
	printTask(task, 'Задача 2. Вивести ті, у яких немає цифр.', arrStringsHaveNoNumber)
	// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
	exp = /[aeiou]/i;
	const arrStringsHaveVowels = arrStrings.filter((s) => exp.test(s))
	printTask(task, 'Задача 3. Вивести ті, у яких є голосні літери.', arrStringsHaveVowels)
	// Задача 4. Дано масив рядків. Вивести ті, у яких немає  голосних літер.
	const arrStringsHaveNoVowels = arrStrings.filter(s => s.match(exp) === null)
	printTask(task, 'Задача 4. Вивести ті, у яких немає  голосних літер.', arrStringsHaveNoVowels)
	// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
	exp = /1|3/
	const arrStringsHave1Or3 = arrStrings.filter(s => exp.test(s))
	printTask(task, 'Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.', arrStringsHave1Or3)
	//Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
	let str = "I have 2 cats, 3 dogs, and 1 parrot. My house number is 45, and I bought 12 apples yesterday."
	print(task, 'Дано рядок тексту:', 'div')
	print(task, str, 'pre')
	exp = /\d+/g
	const numbers = str.match(exp)
	printTask(task, 'Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.', numbers)
	// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано
	exp = /[,.!?:;]/g
	const punctuationMarks = str.match(exp)
	printTask(task, 'Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.', punctuationMarks)
	// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
	const components = str.split(/[,.!?:;]/);
	printTask(task, 'Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.', components)
	// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm-місяць, yyyy- рік).
	str = "The event is scheduled for 15.10.2025, and everyone should be prepared."
	print(task, `Задача 9. Дано рядок тексту: ${str} Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm-місяць, yyyy- рік).`, 'div')
	exp = /(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.\d{4}/
	if (exp.test(str)) print(task, 'Так', 'pre')
	else print(task, 'Ні', 'pre')
	// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
	str = 'У 2024 році я прочитала 15 книжок і подивилась 9 фільмів за 32 дні.'
	exp = /\b\d{2}\b/g;
	const count = str.match(exp).length
	print(task, `Задача 10. Дано рядок тексту: ${str} Підрахувати кількість двоцифрових чисел у рядку.`, 'div')
	print(task, count, 'pre')
	// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434» ). 
	// Знайти усі такі номери (при цьому символи “-” можуть бути, а можуть і не бути, тобто так «4142343323233434».
	str = "Контакти: Олена, тел. +47 912-34-567. Замовлення: 4142-3433-2323-3434; резерв: 4012888888881881; старий номер: 5105-1051-0510-5100. Код підтвердження 123456. Помилка: 1234-5678-9012-345. Ще один запис без дефісів 5500000000000004."
	print(task, `Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434» ). Рядок: ${str}`, 'div')
	exp = /\d{4}-?\d{4}-?\d{4}-?\d{4}/
	if (exp.test(str)) print(task, 'Так', 'pre')
	else print(task, 'Ні', 'pre')
	exp = /\b\d{4}-?\d{4}-?\d{4}-?\d{4}\b/g
	const bankCardNumbers = str.match(exp)
	printTask(task, 'Знайти усі такі номери (при цьому символи “-” можуть бути, а можуть і не бути, тобто так «4142343323233434».', bankCardNumbers)
	// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”, але не обов”язково у кінці). Наприклад: “https://company.gov.ua”
	str = "https://company.gov.ua"
	print(task, `Задача 12. Дано адресу сайту: ${str} Визначити, чи є він урядовим (містить домен “gov”, але не обов”язково у кінці).`, 'div')
	exp = /\.gov(\.|$)/i
	if (exp.test(str)) {
		print(task, 'Так', 'pre')
	} else print(task, 'Ні', 'pre')
	//Задача 13. Вибрати усі роки між 2020 та 2049 з отриманого повідомлення
	str = "Події: у 2018 році відбулася конференція, у 2021 році стартував новий проект, 2025 — рік змін, 2030 планується запуск, а 2050 буде відзначено ювілей. Також згадується 2020 та 2049 роки.";
	exp = /\b20[2-4]\d\b/g
	const years = str.match(exp)
	printTask(task, `Задача 13. Вибрати усі роки між 2020 та 2049 з отриманого повідомлення: ${str}`, years)
	//Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном оператора Киїівстар (+38067, +38093)
	str = "+38(067)123-45-67"
	print(task, `Задача 14. Дано номер телефону: ${str} Перевірити, чи є цей телефон телефоном оператора Киїівстар`, 'div')
	exp = /^\+?3?8?\(?0?(67|93)\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/
	if (exp.test(str)) {
		print(task, 'Так', 'pre')
	} else print(task, 'Ні', 'pre')
	// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл. Замінити пробіл на дефіс.
	const userName = prompt('Введіть ваше прізвище та ім’я')
	print(task, `Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл. Замінити пробіл на дефіс.`, 'div')
	print(task, userName.trim().replace(/\s+/, '-'), 'pre')
	//Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «місяць/рік»
	const userDate = prompt('Введіть дату у форматі «день.місяць.рік»').trim()
	const arrDate = userDate.split('.')
	print(task, `Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «місяць/рік»`, 'div')
	print(task, `${arrDate[1]}/${arrDate[2]}`, 'pre')
}