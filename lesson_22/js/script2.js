window.onload = function () {
	const wrapper = document.querySelector('.wrapper')
	const color = localStorage.getItem('color')
	if (color) {
		wrapper.style.backgroundColor = color
		const inputColor = this.document.querySelector('input')
		if (inputColor) {
			inputColor.value = color
		}
	}
	const span = document.querySelector('.changeColorCount')
	let changeColorCount = parseInt(sessionStorage.getItem('changeColorCount') ?? 0)
	span.innerText = changeColorCount
	const form = this.document.querySelector('.form')
	if (form) {
		form.addEventListener('input', changeColor)
	}
}
function changeColor(e) {
	const color = e.target.value
	const wrapper = document.querySelector('.wrapper')
	wrapper.style.backgroundColor = color
	setLocalStorage(color)
	setSessionStorage()
	changeSpanText()
}
function setLocalStorage(color) {
	localStorage.setItem('color', color)
}
function setSessionStorage() {
	let changeColorCount = parseInt(sessionStorage.getItem('changeColorCount') ?? 0)
	changeColorCount++
	sessionStorage.setItem('changeColorCount', changeColorCount)
}
function changeSpanText() {
	const span = document.querySelector('.changeColorCount')
	let changeColorCount = parseInt(sessionStorage.getItem('changeColorCount'))
	span.innerText = changeColorCount
}