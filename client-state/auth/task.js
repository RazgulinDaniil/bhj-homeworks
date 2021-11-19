const formAuth = document.querySelector('#signin__form');
const signIn = document.querySelector('#signin');
const welcomeElement = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
const buttonExit = document.querySelector('#signout_btn');

if(localStorage.id) {
    welcomeElement.classList.add('welcome_active');
    userId.textContent = localStorage.id;
} else {
    signIn.classList.add('signin_active');
}

formAuth.addEventListener('submit',(e)=> {
    e.preventDefault();
    let formData = new FormData(formAuth);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.responseType = 'json';
    xhr.onload = () => {
        if(xhr.response.success === true) {
            localStorage.id = xhr.response.user_id;
            signIn.classList.remove('signin_active');
            welcomeElement.classList.add('welcome_active');
            userId.textContent = localStorage.id;
        } else {
            formAuth.reset();
            alert("Неверный логин или пароль");
        }
    };
    xhr.send(formData);
});

buttonExit.addEventListener('click', () => {
    localStorage.removeItem('id');
    signIn.classList.add('signin_active');
    welcomeElement.classList.remove('welcome_active');
});