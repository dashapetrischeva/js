"use strict"

window.onload = function () {
	const form = document.querySelector('.form-check')
	if (form) {
		form.onsubmit = check
	}
}
class IsMonthNotNumberError extends Error {
	constructor() {
		super()
		this.message = 'Місяць має бути числом'
		this.name = 'IsMonthNotNumberError'
	}
}
class IsMonthLess1Error extends Error {
	constructor() {
		super()
		this.message = "Місяць не може бути < 1"
		this.name = 'IsMonthLess1Error'
	}
}
class IsMonthMore12Error extends Error {
	constructor() {
		super()
		this.message = "Місяць не може бути > 12"
		this.name = 'IsMonthMore12Error'
	}
}
class IsVacationMonthError extends Error {
	constructor() {
		super("Цей місяць — канікули")
		this.name = "IsVacationMonthError"
	}
}


class IsMarkNotNumberError extends Error {
	constructor() {
		super()
		this.message = 'Оцінка має бути числом'
		this.name = 'IsMarkNotNumberError'
	}
}
class IsMarkLess1Error extends Error {
	constructor() {
		super()
		this.message = "Оцінка не може бути < 1"
		this.name = 'IsMarkLess1Error'
	}
}
class IsMarkMore100Error extends Error {
	constructor() {
		super()
		this.message = "Оцінка не може бути > 100"
		this.name = 'IsMarkMore100Error'
	}
}
function check(event) {
	event.preventDefault()
	try {
		const form = document.querySelector('.form-check')
		const month = Number(form.elements.monthOfStudy.value)
		const mark = Number(form.elements.mark.value)

		if (isNaN(month)) throw new IsMonthNotNumberError()
		if (month < 1) throw new IsMonthLess1Error()
		if (month > 12) throw new IsMonthMore12Error()
		if (month >= 6 && month <= 8) throw new IsVacationMonthError()

		if (isNaN(mark)) throw new IsMarkNotNumberError()
		if (mark < 1) throw new IsMarkLess1Error()
		if (mark > 100) throw new IsMarkMore100Error()

		let lastMonth
		if (month >= 1 && month <= 5) lastMonth = 5
		if (month >= 9 && month <= 12) lastMonth = 12
		if (mark < 60) {
			if (month == lastMonth) {
				alert('Оцінку вже виправити не можна!')
			} else {
				alert('Ти ще встигнеш виправити оцінку!')
			}
		} else {
			alert('Оцінка добра, виправляти не потрібно!')
		}
	} catch (err) {
		console.error(err.name + ': ' + err.message)
		alert(err.message)
	}
}
