const revalBlocks = document.querySelectorAll(".reveal");

document.addEventListener('scroll', ()=> {
    const windowHeight = window.innerHeight;
    revalBlocks.forEach(item => {
        item.getBoundingClientRect().top > 0 && 
        item.getBoundingClientRect().top < windowHeight? 
        item.classList.add('reveal_active')
        :item.classList.remove('reveal_active')
    });
});