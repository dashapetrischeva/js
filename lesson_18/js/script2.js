"use strict"

window.onload = function () {
	document.querySelector('#convert').onclick = getConvert
}


function getConvert() {
	const courseUSD = 41
	const courseEUR = 48
	const sumUAH = parseFloat(document.getElementById('sumUAH').value)
	const sumUSD = sumUAH / courseUSD
	const sumEUR = sumUAH / courseEUR
	document.getElementById('sumUSD').value = sumUSD.toFixed(2)
	document.getElementById('sumEUR').value = sumEUR.toFixed(2)
}
