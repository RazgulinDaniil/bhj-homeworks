const timerElement = document.querySelector('#timer');
let reverseTimer = new Date();
function setTimer (date, hours, minutes , seconds) {
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    return date;
}
reverseTimer = setTimer(reverseTimer, 0, 0, 59);
let hours = reverseTimer.getHours();
let minutes = reverseTimer.getMinutes();
let seconds = reverseTimer.getSeconds();
let idhours = 0;
let idmin = 0;
let idsec = 0;


function timerfun () { 
    seconds--;
    if(hours < 10 && idhours < 1) {
        hours = "0" + hours;
        idhours = 1;
    }
    if(minutes < 10 && idmin < 1) {
        minutes = "0" + minutes;
        idmin = 1;
    }
    if(seconds < 10) {
        seconds = "0"+ seconds;
    }
    timerElement.textContent = hours +":"+ minutes +":"+ seconds;
    if(seconds === "00") {
        clearInterval(timerFunc);
        alert("Вы победили в конкурсе!");
        // location = 'https://google.com';
    }
}
timerfun();
let timerFunc = setInterval(timerfun, 1000);


