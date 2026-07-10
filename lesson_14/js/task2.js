"use strict";
if (confirm('Start testing?')) {
    let userDate1 = {
        day: 23,
        month: 5,
        year: 2023,
    };
    function getYearInNMonths({ month, year }, N) {
        return Math.floor((month - 1 + N) / 12) + year;
    }
    const monthNumber = 27;
    document.write(`<div>It is currently month ${userDate1.month} of the year ${userDate1.year}.</div>`);
    document.write(`<hr><h2 class="title-solution">Solution:</h2>`);
    document.write(`<div>After ${monthNumber} months, the year will be ${getYearInNMonths(userDate1, monthNumber)}.</div>`);
}
