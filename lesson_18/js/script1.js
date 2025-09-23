"use strict"

window.onload = function () {
	document.querySelector('#add').onclick = getSum
	document.querySelector('#subtract').onclick = getSubtraction
	document.querySelector('#multiply').onclick = getProduct
	document.querySelector('#divide').onclick = getDivision
}


function getSum() {
	const num1 = parseFloat(document.getElementById('first-number').value)
	const num2 = parseFloat(document.getElementById('second-number').value)
	const sum = num1 + num2
	document.getElementById('result').value = sum
}
function getSubtraction() {
	const num1 = parseFloat(document.getElementById('first-number').value)
	const num2 = parseFloat(document.getElementById('second-number').value)
	const subtraction = num1 - num2
	document.getElementById('result').value = subtraction
}
function getProduct() {
	const num1 = parseFloat(document.getElementById('first-number').value)
	const num2 = parseFloat(document.getElementById('second-number').value)
	const product = num1 * num2
	document.getElementById('result').value = product
}
function getDivision() {
	const num1 = parseFloat(document.getElementById('first-number').value)
	const num2 = parseFloat(document.getElementById('second-number').value)
	const division = num1 / num2
	document.getElementById('result').value = division.toFixed(2)
}