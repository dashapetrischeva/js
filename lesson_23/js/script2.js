if (confirm('Почати тестування?')) {
	function print(container, content, tag) {
		let myTag = document.createElement(tag)
		myTag.innerText = content
		container.append(myTag)
	}
	const task = document.querySelector('.task')
	const titleSolution = document.createElement('h2')
	titleSolution.className = 'title-solution'
	titleSolution.innerText = 'Рішення:'
	task.append(titleSolution)
	//Дано Shop -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»r, ….)
	class Product {
		constructor(name, price, quantity) {
			this.name = name
			this.price = price
			this.quantity = quantity
		}
		get total() {
			return this.price * this.quantity
		}
	}
	class Shop {
		constructor(products) {
			this.products = products
		}

		[Symbol.iterator]() {
			this.currentIndex = 0
			return this
		}
		next() {
			if (this.currentIndex < this.products.length) {
				const product = this.products[this.currentIndex++]
				return { done: false, value: `${product.name} - ${product.total} грн` }
			}
			else return { done: true }
		}

	}
	const products = [
		new Product("Хліб", 25, 40),
		new Product("Молоко", 38, 25),
		new Product("Яблука", 55, 60),
		new Product("Кава", 210, 15),
		new Product("Цукор", 48, 30),
		new Product("Масло", 95, 20),
		new Product("Сир", 120, 10),
		new Product("Картопля", 22, 100),
		new Product("Ковбаса", 160, 12),
		new Product("Печиво", 75, 18)
	]
	const myShop = new Shop(products)


	for (const item of myShop) {
		print(task, item, 'p')
	}
}