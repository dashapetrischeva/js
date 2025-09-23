"use strict"

window.onload = function () {
	document.querySelector('#birthYear').onchange = getAge
}


function getAge() {
	const currentYear = 2025
	const birthYear = parseInt(document.getElementById('birthYear').value)
	const userAge = currentYear - birthYear
	document.getElementById('userAge').value = userAge
}
