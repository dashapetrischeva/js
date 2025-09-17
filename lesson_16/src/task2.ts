
if (confirm('Почати тестування?')) {
	document.write(`<h2 class="title-solution">Рішення:</h2>`)
	class TMoney {
		private _dollarExchangeRate: number = 0
		private _amountDollars: number = 0

		constructor(initAmountUAH: number, initDollarExchangeRate: number) {
			if (initAmountUAH < 0) throw new Error('Amount in hryvnias is incorrect!')
			this.DollarExchangeRate = initDollarExchangeRate
			this.AmountDollars = this.exchange(initAmountUAH)
		}
		public get AmountDollars(): number {
			return this._amountDollars
		}
		public set AmountDollars(v: number) {
			if (v < 0) throw new Error('Money amount is incorrect!')
			this._amountDollars = v
		}
		public get DollarExchangeRate(): number {
			return this._dollarExchangeRate
		}
		public set DollarExchangeRate(v: number) {
			if (v < 0) throw new Error('Dollar exchange rate is incorrect!')
			this._dollarExchangeRate = v
		}
		exchange(val: number): number {
			let valDollars = val / this.DollarExchangeRate
			return valDollars
		}
		addMoney(val: number) {
			this.AmountDollars += this.exchange(val)
		}
		withdrawMoney(val: number) {
			this.AmountDollars -= this.exchange(val)
		}
		//визначення курсу долара, при якому сума у гривнях збільшиться на 100
		sumUAHIncrease100(valUAH: number): number {
			const newRate = (valUAH + 100) / this.AmountDollars
			return newRate
		}
		toString() {
			//день.місяць.рік
			return `На рахунку: ${this.AmountDollars * this.DollarExchangeRate} грн`
		}
	}

	try {
		const myMoney = new TMoney(2000, 40)
		document.write(`${myMoney.toString()}<br>`)
		myMoney.addMoney(5000)
		document.write(`${myMoney.toString()}<br>`)
		myMoney.withdrawMoney(1000)
		document.write(`${myMoney.toString()}<br>`)
		const sumUAH = myMoney.AmountDollars * myMoney.DollarExchangeRate
		document.write(`Курс долара, при якому ${sumUAH} збільшиться на 100: ${myMoney.sumUAHIncrease100(sumUAH).toFixed(2)}<br>`)
	} catch (error: any) {
		console.log(error.message)
	}

}




