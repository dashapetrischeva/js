if (confirm('Почати тестування?')) {
	class API {
		async getRandomImage() {
			const response = await fetch('https://cataas.com/cat?json=true')
			if (!response.ok) throw new Error('Проблема із запитом')
			const data = await response.json()
			return data
		}
		async getCatsByTag(tag) {
			const response = await fetch(`https://cataas.com/api/cats?tags=${tag}`)
			return await response.json()
		}
	}
	class Markup {
		constructor(data) {
			this.data = data
		}
		showRandomImg() {
			const img = document.createElement("img")
			img.src = this.data.url
			return img
		}
		showContent() {
			const content = document.createElement("div")
			content.classList.add('item__content')
			content.append(this.showRandomImg())
			return content
		}
		showHeader(itemTitle, linkTitle = '') {
			const header = document.createElement("div")
			header.classList.add('item__header')
			const title = document.createElement("h3")
			title.classList.add('item__title')
			title.innerText = itemTitle
			header.append(title)
			if (linkTitle !== '') {
				const link = document.createElement("a")
				link.href = "#"
				link.classList.add('item__link')
				link.innerText = linkTitle
				header.append(link)
			}
			return header
		}
		showCats() {
			const container = document.createElement("div")
			container.classList.add('list-items__content')
			this.data.forEach((cat) => {
				const item = document.createElement('div')
				item.classList.add('list-items__item')
				const img = document.createElement('img')
				img.src = `https://cataas.com/cat/${cat.id}`
				item.append(img)
				container.append(item)
			})
			return container
		}
	}
	async function initRandom() {
		const item = document.querySelector('.random-item')
		try {
			item.innerText = ''
			const api = new API()
			const data = await api.getRandomImage()
			console.log(data)
			const markup = new Markup(data)
			item.append(markup.showHeader('Рандомний котик', 'Новий котик'))
			item.append(markup.showContent())
			document.querySelector('.item__link').onclick = () => initRandom()
		} catch {
			item.innerText = 'Не вдалося завантажити котика'
		}
	}
	async function showCuteCats() {
		const container = document.querySelector('.list-items')
		try {
			const api = new API()
			const data = await api.getCatsByTag('cute')
			const markup = new Markup(data)
			container.append(markup.showHeader('Милі котики'))
			container.append(markup.showCats())
		} catch {
			container.innerText = 'Не вдалося завантажити милих котиків'
		}
	}
	initRandom()
	showCuteCats()
}