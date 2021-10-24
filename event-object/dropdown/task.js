const valueElem = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const links = document.querySelectorAll('.dropdown__link');

valueElem.addEventListener('click', () => {
    list.classList.add('dropdown__list_active');
});

links.forEach(item => item.addEventListener('click', (event) => {
    event.preventDefault();
    valueElem.textContent = item.textContent;
    list.classList.remove('dropdown__list_active');
}));