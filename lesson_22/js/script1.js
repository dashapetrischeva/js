if (confirm('Start testing?')) {
	function print(container, content, tag) {
		let myTag = document.createElement(tag)
		myTag.innerText = content
		container.append(myTag)
	}

	function printTask(task, title, arr) {
		print(task, title, 'div')
		print(task, arr.length > 0 ? arr.join('\n') : 'No such strings found', 'pre')
	}

	// Task 1. Given an array of strings. Display those that contain digits (use the test method and regular expressions).
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
	]

	let exp = /\d/
	const task = document.querySelector('.task')

	print(task, 'Given an array of strings:', 'div')
	print(task, arrStrings.join('\n'), 'pre')

	const titleSolution = document.createElement('h2')
	titleSolution.className = 'title-solution'
	titleSolution.innerText = 'Solution:'
	task.append(titleSolution)

	const arrStringsHaveNumber = arrStrings.filter((s) => exp.test(s))
	printTask(task, 'Task 1. Display the strings that contain digits.', arrStringsHaveNumber)

	// Task 2. Given an array of strings. Display those that do not contain digits.
	const arrStringsHaveNoNumber = arrStrings.filter((s) => s.match(exp) === null)
	printTask(task, 'Task 2. Display the strings that do not contain digits.', arrStringsHaveNoNumber)

	// Task 3. Given an array of strings. Display those that contain vowels.
	exp = /[aeiou]/i
	const arrStringsHaveVowels = arrStrings.filter((s) => exp.test(s))
	printTask(task, 'Task 3. Display the strings that contain vowels.', arrStringsHaveVowels)

	// Task 4. Given an array of strings. Display those that do not contain vowels.
	const arrStringsHaveNoVowels = arrStrings.filter((s) => s.match(exp) === null)
	printTask(task, 'Task 4. Display the strings that do not contain vowels.', arrStringsHaveNoVowels)

	// Task 5. Given an array of strings. Display those that contain either the digit 1 or the digit 3.
	exp = /1|3/
	const arrStringsHave1Or3 = arrStrings.filter((s) => exp.test(s))
	printTask(task, 'Task 5. Display the strings that contain either the digit 1 or the digit 3.', arrStringsHave1Or3)

	// Task 6. Given a text string, display all numbers contained in it.
	let str = "I have 2 cats, 3 dogs, and 1 parrot. My house number is 45, and I bought 12 apples yesterday."

	print(task, 'Given text:', 'div')
	print(task, str, 'pre')

	exp = /\d+/g
	const numbers = str.match(exp)
	printTask(task, 'Task 6. Display all numbers contained in the text.', numbers)

	// Task 7. Given a text string. Find all punctuation marks used.
	exp = /[,.!?:;]/g
	const punctuationMarks = str.match(exp)
	printTask(task, 'Task 7. Find all punctuation marks used.', punctuationMarks)

	// Task 8. Given a text string. Display all parts separated by punctuation marks.
	const components = str.split(/[,.!?:;]/)
	printTask(task, 'Task 8. Display all parts separated by punctuation marks.', components)

	// Task 9. Given a text string. Check whether it contains a date in the format dd.mm.yyyy.
	str = "The event is scheduled for 15.10.2025, and everyone should be prepared."

	print(task, `Task 9. Given the text: ${str}. Check whether it contains a date in the format dd.mm.yyyy.`, 'div')

	exp = /(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.\d{4}/

	if (exp.test(str))
		print(task, 'Yes', 'pre')
	else
		print(task, 'No', 'pre')

	// Task 10. Given a text string. Count the number of two-digit numbers.
	str = 'In 2024 I read 15 books and watched 9 movies in 32 days.'

	exp = /\b\d{2}\b/g
	const count = str.match(exp).length

	print(task, `Task 10. Given the text: ${str}. Count the number of two-digit numbers.`, 'div')
	print(task, count, 'pre')

	// Task 11. Determine whether the text may contain bank card numbers.
	str = "Contacts: Olena, phone +47 912-34-567. Order: 4142-3433-2323-3434; backup: 4012888888881881; old number: 5105-1051-0510-5100. Confirmation code 123456. Invalid: 1234-5678-9012-345. Another entry without hyphens: 5500000000000004."

	print(task, `Task 11. Determine whether the text may contain a bank card number. Text: ${str}`, 'div')

	exp = /\d{4}-?\d{4}-?\d{4}-?\d{4}/

	if (exp.test(str))
		print(task, 'Yes', 'pre')
	else
		print(task, 'No', 'pre')

	exp = /\b\d{4}-?\d{4}-?\d{4}-?\d{4}\b/g
	const bankCardNumbers = str.match(exp)

	printTask(task, 'Find all such bank card numbers.', bankCardNumbers)

	// Task 12. Given a website address. Determine whether it is a government website.
	str = "https://company.gov.ua"

	print(task, `Task 12. Given the website address: ${str}. Determine whether it is a government website (contains the "gov" domain).`, 'div')

	exp = /\.gov(\.|$)/i

	if (exp.test(str))
		print(task, 'Yes', 'pre')
	else
		print(task, 'No', 'pre')

	// Task 13. Select all years between 2020 and 2049 from the message.
	str = "Events: in 2018 a conference was held, in 2021 a new project started, 2025 is the year of change, 2030 is planned for launch, and 2050 will mark an anniversary. The years 2020 and 2049 are also mentioned."

	exp = /\b20[2-4]\d\b/g
	const years = str.match(exp)

	printTask(task, `Task 13. Select all years between 2020 and 2049 from the following message: ${str}`, years)

	// Task 14. Given a phone number. Check whether it belongs to the Kyivstar mobile operator (+38067, +38093).
	str = "+38(067)123-45-67"

	print(task, `Task 14. Given the phone number: ${str}. Check whether it belongs to the Kyivstar mobile operator.`, 'div')

	exp = /^\+?3?8?\(?0?(67|93)\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/

	if (exp.test(str))
		print(task, 'Yes', 'pre')
	else
		print(task, 'No', 'pre')

	// Task 15. The user enters their last name and first name separated by a space. Replace the space with a hyphen.
	const userName = prompt('Enter your last name and first name')

	print(task, 'Task 15. Replace the space between the last name and first name with a hyphen.', 'div')
	print(task, userName.trim().replace(/\s+/, '-'), 'pre')

	// Task 16. The user enters a date in the format "day.month.year". Convert it to the format "month/year".
	const userDate = prompt('Enter a date in the format "day.month.year"').trim()
	const arrDate = userDate.split('.')

	print(task, 'Task 16. Convert the entered date to the format "month/year".', 'div')
	print(task, `${arrDate[1]}/${arrDate[2]}`, 'pre')
}