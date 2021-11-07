'use strict';
const toolTipsList = document.querySelectorAll('.has-tooltip');
toolTipsList.forEach(element => {  
    // const pos = element.dataset.position;
    element.insertAdjacentHTML('beforeend',`<div class="tooltip" style="">${element.getAttribute('title')}</div>`);
    element.setAttribute('style','position: relative; display: inline-block');
    element.addEventListener('click', (event)=> {
        event.preventDefault();
        const tips = findtips();   
        if(tips.some(element => element.classList.contains('tooltip_active'))) {
            tips.forEach(element => element.classList.remove('tooltip_active'));
            return;
        }
        const tip = element.querySelector('.tooltip');
        tip.classList.add('tooltip_active');
    });
});
function findtips () {
    return Array.from(document.querySelectorAll('.tooltip'));
}
