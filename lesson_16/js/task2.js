"use strict";
if (confirm('Почати тестування?')) {
    document.write(`<h2 class="title-solution">Рішення:</h2>`);
    class TMoney {
        constructor(initAmountUAH, initDollarExchangeRate) {
            this._dollarExchangeRate = 0;
            this._amountDollars = 0;
            if (initAmountUAH < 0)
                throw new Error('Amount in hryvnias is incorrect!');
            this.DollarExchangeRate = initDollarExchangeRate;
            this.AmountDollars = this.exchange(initAmountUAH);
        }
        get AmountDollars() {
            return this._amountDollars;
        }
        set AmountDollars(v) {
            if (v < 0)
                throw new Error('Money amount is incorrect!');
            this._amountDollars = v;
        }
        get DollarExchangeRate() {
            return this._dollarExchangeRate;
        }
        set DollarExchangeRate(v) {
            if (v < 0)
                throw new Error('Dollar exchange rate is incorrect!');
            this._dollarExchangeRate = v;
        }
        exchange(val) {
            let valDollars = val / this.DollarExchangeRate;
            return valDollars;
        }
        addMoney(val) {
            this.AmountDollars += this.exchange(val);
        }
        withdrawMoney(val) {
            this.AmountDollars -= this.exchange(val);
        }
        //визначення курсу долара, при якому сума у гривнях збільшиться на 100
        sumUAHIncrease100(valUAH) {
            const newRate = (valUAH + 100) / this.AmountDollars;
            return newRate;
        }
        toString() {
            //день.місяць.рік
            return `На рахунку: ${this.AmountDollars * this.DollarExchangeRate} грн`;
        }
    }
    try {
        const myMoney = new TMoney(2000, 40);
        document.write(`${myMoney.toString()}<br>`);
        myMoney.addMoney(5000);
        document.write(`${myMoney.toString()}<br>`);
        myMoney.withdrawMoney(1000);
        document.write(`${myMoney.toString()}<br>`);
        const sumUAH = myMoney.AmountDollars * myMoney.DollarExchangeRate;
        document.write(`Курс долара, при якому ${sumUAH} збільшиться на 100: ${myMoney.sumUAHIncrease100(sumUAH).toFixed(2)}<br>`);
    }
    catch (error) {
        console.log(error.message);
    }
}
