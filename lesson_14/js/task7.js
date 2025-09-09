"use strict";
if (confirm('Почати тестування?')) {
    function additionSimulator() {
        const min = 0;
        const max = 9;
        const firstNum = Math.floor(Math.random() * (max - min + 1)) + min;
        const secondNum = Math.floor(Math.random() * (max - min + 1)) + min;
        if (Number(prompt(`${firstNum} + ${secondNum} = ?`)) === firstNum + secondNum)
            alert('Вірно');
        else
            alert('Невірно');
    }
    setInterval(additionSimulator, 10000);
}
