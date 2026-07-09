"use strict"

window.onload = function () {
	document.querySelector('#birthYear').onchange = getAge
}


function getAge() {
	const currentYear = 2025
	const birthYear = parseInt(document.getElementById('birthYear').value)
	if (isNaN(birthYear) || birthYear < 0 || birthYear > currentYear) {
		document.getElementById('birthYearError').innerText = 'Incorrect year'
		document.getElementById('userAge').value = ''
	} else {
		const userAge = currentYear - birthYear
		document.getElementById('userAge').value = userAge
		document.getElementById('birthYearError').innerText = ''
	}
}
