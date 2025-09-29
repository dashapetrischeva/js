"use strict"

window.onload = function () {
	const container = document.querySelector('.task__solution')
	if (container) {
		container.addEventListener('click', clickHello)
	}
}
function clickHello(e) {
	let next = e.target.nextElementSibling

	while (next) {
		next.style.color = 'red'
		next = next.nextElementSibling
	}
}

