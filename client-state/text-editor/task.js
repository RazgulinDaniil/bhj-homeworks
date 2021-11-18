const editor = document.querySelector('#editor');
const cleaner = document.querySelector('#cleaner');

editor.addEventListener('change', ()=> {
    toLocalStorage('textarea',editor.value);
});
cleaner.addEventListener('click', ()=> {
    editor.textContent = "";
    localStorage.clear();
});

if(getLocalStorage('textarea') != null) {
    editor.textContent = getLocalStorage('textarea');
}
function toLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}