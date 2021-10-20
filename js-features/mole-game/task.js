const winCounter = document.querySelector("#dead");
const lostCounter = document.querySelector("#lost");
const holes = document.querySelectorAll(".hole");
let counterWin = 0;
let counterLost = 0;

function reset() {
    counterLost = 0;
    counterWin = 0;
}

holes.forEach(item => {
    item.addEventListener("click", () => {
        if(item.classList.contains("hole_has-mole") === true) {
            counterWin++;
            if(counterWin > 9) {
                reset();
                alert("Вы выйграли!");
            }
            winCounter.textContent = counterWin;
        } else {
            counterLost++;
            if(counterLost > 4) {
                reset();
                alert("Вы проиграли!");
            }
            lostCounter.textContent = counterLost;
        }
    });
});

