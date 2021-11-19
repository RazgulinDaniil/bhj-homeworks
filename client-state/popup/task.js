const modalSubcribe = document.querySelector('#subscribe-modal');
const closeModal = document.querySelector('.modal__close');
if(getCookie('subscribe') === null) {
    modalSubcribe.classList.add('modal_active');
    closeModal.addEventListener('click', ()=> {
        setCookie('subscribe', 'on');
        modalSubcribe.classList.remove('modal_active');
    });
}
function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
    console.log(document.cookie);
}
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    const cook = cookies.find((c)=> c.startsWith(name + '='));
    return cook ? decodeURIComponent(cook.substr(name.length + 1)) : null;
}