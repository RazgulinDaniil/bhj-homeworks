const sliderArrowNext = document.querySelector('.slider__arrow_next'),
     sliderArrowPrev = document.querySelector('.slider__arrow_prev'),
     slides = document.querySelectorAll('.slider__item'),
     dots = document.querySelectorAll('.slider__dot');

let index = 0;

const activeSlider = n => {
    for(let slide of slides) {
        slide.classList.remove("slider__item_active");
    }
    slides[n].classList.add('slider__item_active');
};

const activeDots = n => {
    for(let dot of dots) {
        dot.classList.remove('slider__dot_active');
    }
    dots[n].classList.add('slider__dot_active');
};

const active = ind => {
    activeSlider(ind);
    activeDots(ind);
};

const next = () => {
    if(index == slides.length -1) {
        index = 0;
        active(index);
    } else {
        index++;
        active(index);
    }
};

const prev = () => {
    if(index == 0) {
        index = slides.length - 1;
        active(index);
    } else {
        index--;
        active(index);
    }
};

dots.forEach((item, idx) => {
    item.addEventListener('click', () => {
        index = idx;
        active(index);
    });
});

sliderArrowNext.addEventListener('click', next);
sliderArrowPrev.addEventListener('click', prev);



