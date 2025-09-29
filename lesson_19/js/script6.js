"use strict"

window.onload = function () {
	const athletesList = document.querySelector('.athletes-lists')
	if (athletesList) {
		athletesList.addEventListener('click', moveItem)
	}

}


function moveItem(e) {
	const currentList = e.target.closest('div')
	let destinationList
	if (currentList.classList.contains('athletes-lists__general')) {
		destinationList = document.querySelector('.athletes-lists__selected ul.athletes-lists__list')
		destinationList.append(e.target)
	} else {
		destinationList = document.querySelector('.athletes-lists__general ul.athletes-lists__list')
		destinationList.append(e.target)
	}
}
