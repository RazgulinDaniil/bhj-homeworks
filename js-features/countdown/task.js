const timerElement = document.querySelector('#timer');
function setTimer (hours, minutes , seconds) {
    let date  = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    return date;
}
let reverseTimer = setTimer(0, 0, 59);
let hours = reverseTimer.getHours();
let minutes = reverseTimer.getMinutes();
let seconds = reverseTimer.getSeconds();
let idhours = 0;
let idmin = 0;
let idsec = 0;


function timerfun () {
    if(hours != "00" && minutes === "00" && seconds ==="00") {
        hours--;
        minutes = 59;
        seconds = 59;
        idhours = 0;
    }
    if(minutes != "00" && seconds === "00") {
        minutes--;
        seconds = 59;
        idmin = 0;
    }
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
    if(hours === "00" && minutes === "00" && seconds === "00") {
        clearInterval(timerFunc);
        alert("Вы победили в конкурсе!");
        // location = 'https://google.com';
    }
}
timerfun();
let timerFunc = setInterval(timerfun, 100);


