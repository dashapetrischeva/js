if (confirm('Почати тестування?')) {
	class Star {
		constructor(image, step, interval, minSize, maxSize, cssObj) {
			this.image = image
			this.step = step
			this.interval = interval
			this.minSize = minSize
			this.maxSize = maxSize
			this.cssObj = cssObj
			this.width = this.minSize
		}
		getRandomValue(minValue, maxValue) {
			return (
				minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
			)
		}

		setRandomPosition() {
			this.left = this.getRandomValue(0, 100)
			this.top = this.getRandomValue(0, 100)
			this.star.style.top = this.top + '%'
			this.star.style.left = this.left + '%'
		}

		changeWidth() {
			this.width += this.step
			if (this.width <= this.maxSize) {
				this.star.style.width = this.width + 'px'
			} else {
				this.width = this.minSize
				this.star.style.width = this.width + 'px'
				this.setRandomPosition()
			}
		}

		render(containerSelector) {
			const img = document.createElement('img')
			img.src = this.image
			img.className = this.cssObj.containerClass
			this.star = img
			this.star.style.width = this.width + 'px'
			this.setRandomPosition()
			setInterval(() => this.changeWidth(), this.interval)
			if (containerSelector) {
				document.querySelector(containerSelector).append(img)
			}
		}
	}

	//---------------

	for (let i = 0; i < 50; i++) {
		const s1 = new Star(
			'../../img/star.png',
			1,
			1000,
			10,
			20,
			{
				containerClass: 'star',
			}
		)
		s1.render('body')
	}

}