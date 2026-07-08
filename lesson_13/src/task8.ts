
if (confirm(`Would you like to read the news?`)) {
	window.location.href = 'https://www.ukr.net/';
}
else {
	setTimeout(() => {
		window.location.href = 'https://www.ukr.net/';
	}, 20000);
}




