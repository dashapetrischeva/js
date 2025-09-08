"use strict";
if (confirm('Почати тестування?')) {
    document.write(`<h2 class="title-solution">Рішення:</h2>`);
    function createIterator(min, max) {
        let current = min - 1;
        return function () {
            if (current < max) {
                current++;
            }
            else {
                current = min;
            }
            return current;
        };
    }
    const monthIterator = createIterator(1, 12);
    for (let i = 0; i < 20; i++) {
        document.write(`${monthIterator()} `);
    }
}
