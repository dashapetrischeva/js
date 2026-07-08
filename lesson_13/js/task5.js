"use strict";
if (confirm('Start testing?')) {
    document.write(`<h2 class="title-solution">Solution:</h2>`);
    /**
     * Closure
     * @param{number} min minimum value
     * @param{number} max maximum value
     * @returns{() => number} function that returns the next number
     */
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
