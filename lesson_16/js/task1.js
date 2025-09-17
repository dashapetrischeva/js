"use strict";
if (confirm('Почати тестування?')) {
    document.write(`<h2 class="title-solution">Рішення:</h2>`);
    class TDate {
        constructor(dateStr) {
            this._day = 0;
            this._month = 0;
            this._year = 0;
            const [day, month, year] = dateStr.split('.').map(Number);
            this.Day = day;
            this.Month = month;
            this.Year = year;
        }
        // days
        get Day() {
            return this._day;
        }
        set Day(d) {
            if (d < 1 || d > 30)
                throw new Error('Day is incorrect');
            this._day = d;
        }
        checkDay(n) {
            let d;
            // я веду всі розрахунки з розрахунком на те, що в місяці 30 днів
            if (n > 30) {
                d = n % 30 === 0 ? 30 : n % 30;
                this.addMonths(Math.floor((n - 1) / 30));
            }
            else if (n < 1) {
                const abs = Math.abs(n);
                d = 30 - (abs % 30);
                this.subtractMonths(Math.floor((abs + this.Day) / 30));
            }
            else {
                d = n;
            }
            return d;
        }
        addDays(n) {
            this.Day = this.checkDay(this.Day + n);
        }
        subtractDays(n) {
            this.Day = this.checkDay(this.Day - n);
        }
        // months
        get Month() {
            return this._month;
        }
        set Month(m) {
            if (m < 1 || m > 12)
                throw new Error('Month is incorrect');
            this._month = m;
        }
        checkMonth(n) {
            let m;
            if (n < 1) {
                const abs = Math.abs(n);
                m = 12 - (abs % 12);
                this.subtractYears(Math.floor((abs + this.Month) / 12));
            }
            else if (n > 12) {
                m = n % 12 === 0 ? 12 : n % 12;
                this.addYears(Math.floor((n - 1) / 12));
            }
            else {
                m = n;
            }
            return m;
        }
        addMonths(n) {
            this.Month = this.checkMonth(this.Month + n);
        }
        subtractMonths(n) {
            this.Month = this.checkMonth(this.Month - n);
        }
        // years
        get Year() {
            return this._year;
        }
        set Year(y) {
            if (y < 0)
                throw new Error('Year is incorrect');
            this._year = y;
        }
        addYears(n) {
            this.Year = this.Year + n;
        }
        subtractYears(n) {
            this.Year = this.Year - n;
        }
        toString() {
            //день.місяць.рік
            return `${this.Day}.${this.Month}.${this.Year}`;
        }
    }
    try {
        const date1 = new TDate('12.05.2025');
        document.write(`${date1}<br>`);
        date1.subtractDays(91);
        document.write(`${date1}<br>`);
    }
    catch (error) {
        console.log(error.message);
    }
}
