"use strict"

window.onload = function () {
	const form = this.document.querySelector('.form')
	if (form) {
		form.addEventListener('input', fillInputs)
	}
}


function fillInputs(e) {
	const inputValue = parseInt(e.target.value)

	let step = 1
	let previous = e.target.closest('.field').previousElementSibling
	while (previous) {
		let previousInput = previous.querySelector('input')
		previousInput.value = inputValue - step
		previous = previous.previousElementSibling
		step++
	}

	let next = e.target.closest('.field').nextElementSibling
	step = 1
	while (next) {
		let nextInput = next.querySelector('input')
		nextInput.value = inputValue + step
		next = next.nextElementSibling
		step++
	}

}
