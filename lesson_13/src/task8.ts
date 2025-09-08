
if (confirm(`Чи бажаєте ви читати новини?`)) {
	window.location.href = 'https://www.ukr.net/'
}
else {
	setTimeout(() => {
		window.location.href = 'https://www.ukr.net/'
	}, 20000)
}




