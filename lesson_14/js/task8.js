"use strict";
if (confirm(`Do you want to read news?`)) {
    window.location.href = 'https://www.ukr.net/';
}
else {
    setTimeout(() => {
        window.location.href = 'https://www.ukr.net/';
    }, 20000);
}
