const cookieElement = document.querySelector("#cookie");
const clickerCounter = document.querySelector("#clicker__counter");
let counter = 0;
const timerClicker = document.createElement("div");
let clickPerSec = 0;
timerClicker.textContent = "Скорость клика:" + clickPerSec;
clickerCounter.after(timerClicker);
let start = 0;
let last = 0;

cookieElement.addEventListener("click", () => { 
    counter++;
    if(counter === 1) {
        start = Date.now();
    }
    clickerCounter.textContent = counter;
    cookieElement.setAttribute('width', "220");
    if(counter % 2 == 0) {
        cookieElement.setAttribute('width', "200");
    }
    if(counter > 1) {
        last = Date.now();
        clickPerSec = 1000/(last - start);
        timerClicker.textContent = "Скорость клика:" + clickPerSec.toFixed(2) + "кликов/за 1 сек";
        start = last;
    }
});