

class StorageDB {
	constructor(storageKey) {
		this.storageKey = storageKey
	}
	loadData() {
		if (localStorage.getItem(this.storageKey))
			return JSON.parse(localStorage.getItem(this.storageKey))
		else return []
	}
	saveData(list) {
		localStorage.setItem(this.storageKey, JSON.stringify(list))
	}
	addItem(item) {
		const list = this.loadData()
		list.push(item)
		this.saveData(list)
	}
	deleteItem(id) {
		let list = this.loadData()
		list = list.filter((el) => el.id != id)
		this.saveData(list)

	}
}

class Task {
	constructor(storageKey, targetContainerSelector) {
		this.targetContainer = document.querySelector(targetContainerSelector)
		this.db = new StorageDB(storageKey)
	}
	addTask() {
		const title = document.querySelector('#title').value.trim()
		const priority = document.querySelector('#priority').value.trim()
		if (!title || !priority) {
			alert('Будь ласка, заповніть усі поля!')
			return
		}
		this.db.addItem({
			id: Date.now(),
			title,
			priority
		})
		this.printTasks()
		document.querySelector('#title').value = ''
		document.querySelector('#priority').value = ''
	}
	createTaskEl(taskObj) {
		const container = document.createElement('li')
		container.innerText = `${taskObj.title} (пріоритет: ${taskObj.priority})`
		return container
	}
	printTasks() {
		const list = this.db.loadData()
		this.targetContainer.innerHTML = ''
		for (const task of list) {
			this.targetContainer.append(this.createTaskEl(task))
		}

	}
	showRandomTask() {
		const list = this.db.loadData()
		if (list.length === 0) return

		const randomIndex = Math.floor(Math.random() * list.length)
		const task = list[randomIndex]

		const confirmed = confirm(`Виконати задачу: "${task.title}"?`)
		if (confirmed) {
			this.db.deleteItem(task.id)
			this.printTasks()
		}
	}
}

window.onload = function () {
	const taskManager = new Task('tasks', '.todo-list')
	taskManager.printTasks()
	if (document.querySelector('.addTask'))
		document.querySelector('.addTask').onclick = () => taskManager.addTask()
	setInterval(() => taskManager.showRandomTask(), 10000)
}

