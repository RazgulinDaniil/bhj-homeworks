const rotatorList = document.querySelectorAll('.rotator__case');
let idx = 0;
const timerFunc = () => {
    if(idx === 0) {
        rotatorList[rotatorList.length - 1].classList.remove('rotator__case_active');
    }
    rotatorList[idx].classList.remove('rotator__case_active');
    idx++;
    rotatorList[idx].classList.add('rotator__case_active');
    let timer = rotatorList[idx].dataset.speed;
    rotatorList[idx].style.color = rotatorList[idx].dataset.color;
    if(idx === rotatorList.length - 1) {
        idx = 0;
    }
    setTimeout(timerFunc, timer);
};
timerFunc();


