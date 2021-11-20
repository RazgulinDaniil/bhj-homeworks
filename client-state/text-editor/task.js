const editor = document.querySelector('#editor');
const cleaner = document.querySelector('#cleaner');

editor.addEventListener('input', ()=> {
    localStorage.setItem('textarea',editor.value);
});
cleaner.addEventListener('click', ()=> {
    editor.textContent = "";
    localStorage.clear();
});

if(localStorage.getItem('textarea')) {
    editor.textContent = localStorage.getItem('textarea');
}
