
if (confirm('Start testing?')) {
	function print(container, content, tag) {
		let myTag = document.createElement(tag)
		myTag.innerText = content
		container.append(myTag)
	}
	const task = document.querySelector('.task')
	const titleSolution = document.createElement('h2')
	titleSolution.className = 'title-solution'
	titleSolution.innerText = 'Solution:'
	task.append(titleSolution)
	//Create a generator that randomly generates a specified number of even numbers.
	function* rndEven(count) {
		for (let i = 0; i < count; i++) {
			const min = 2
			const max = 100
			const rand = Math.floor(Math.random() * ((max / 2) - (min / 2) + 1) + (min / 2))
			yield rand * 2
		}
	}
	for (const el of rndEven(10)) {
		print(task, el, 'pre')
	}
}