const listToolTips = document.querySelectorAll('.has-tooltip');
const tip = document.createElement('div');
tip.setAttribute('class', 'tooltip');
tip.setAttribute('style', 'top: 0; left: 0');
let prevElement = null;

listToolTips.forEach(item => { 
    item.addEventListener('click', (e)=> {
        e.preventDefault();  
        if(prevElement === item) {
            tip.classList.remove('tooltip_active');
            return;
        }
        let pos = item.getBoundingClientRect();
        item.appendChild(tip);
        tip.innerText = item.getAttribute('title');
        tip.style.left = `${pos.left}px`;
        tip.style.top = (pos.top + 20) + 'px';
        tip.classList.add('tooltip_active');
        prevElement = e.target;
    });
});