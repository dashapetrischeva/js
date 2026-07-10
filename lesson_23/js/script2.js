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
	//Given a Shop class that contains a list of products (an array of Product objects with name, price, and quantity). Add the ability to iterate over the Shop class so that for each element, a string "product-total cost" is displayed.
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
				return { done: false, value: `${product.name} - ${product.total} UAH` }
			}
			else return { done: true }
		}

	}
	const products = [
		new Product("Bread", 25, 40),
		new Product("Milk", 38, 25),
		new Product("Apples", 55, 60),
		new Product("Coffee", 210, 15),
		new Product("Sugar", 48, 30),
		new Product("Butter", 95, 20),
		new Product("Cheese", 120, 10),
		new Product("Potatoes", 22, 100),
		new Product("Sausage", 160, 12),
		new Product("Cookies", 75, 18)
	]
	const myShop = new Shop(products)


	for (const item of myShop) {
		print(task, item, 'p')
	}
}