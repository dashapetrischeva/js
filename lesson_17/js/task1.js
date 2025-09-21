"use strict";
if (confirm('Почати тестування?')) {
    document.write(`<h2 class="title-solution">Рішення:</h2>`);
    // 1.	Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, 
    // кількості від’ємних, кількість входжень деякого числа (статичні методи)
    class ArrayOperations {
        static getPositiveNumber(arr) {
            return arr.reduce((prevCount, el) => (el > 0 ? prevCount + 1 : prevCount), 0);
        }
        static getNegativeNumber(arr) {
            return arr.reduce((prevCount, el) => (el < 0 ? prevCount + 1 : prevCount), 0);
        }
        static getNumCount(arr, num) {
            return arr.filter(el => el === num).length;
        }
    }
    const arr = [5, 1, -9, 23, -90, 5, 34, -91];
    const num = 5;
    document.write(`<div>Масив: [${arr.join(', ')}]</div>`);
    document.write(`<div>Кількості додатних:<strong> ${ArrayOperations.getPositiveNumber(arr)}</strong></div>`);
    document.write(`<div>Кількості від’ємних:<strong> ${ArrayOperations.getNegativeNumber(arr)}</strong></div>`);
    document.write(`<div>Кількість входжень числа 5:<strong> ${ArrayOperations.getNumCount(arr, num)}</strong></div>`);
}
