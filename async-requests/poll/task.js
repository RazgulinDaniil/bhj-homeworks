const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');
let idAnswer = 0;

const url = 'https://netology-slow-rest.herokuapp.com/poll.php';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);

xhr.addEventListener('readystatechange', ()=> {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        let value = JSON.parse(xhr.response).data;
        idAnswer = JSON.parse(xhr.response).id;
        pollTitle.innerText = value.title; 
        let buttons = value.answers.map(item => {
            return `<button class="poll__answer">${item}</button>`});
        pollAnswers.innerHTML = buttons.join('');
    }
});
xhr.send();

xhr.addEventListener('loadend', () => {
    const buttonList = document.querySelectorAll('.poll__answer');
    buttonList.forEach((btn,idx) => {
        btn.addEventListener('click', () => {
            alert('Спасибо ваш голос засчитан!');
            const xhr = new XMLHttpRequest();
                xhr.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
                xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhr.addEventListener('readystatechange', ()=> {
                    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
                        let value = JSON.parse(xhr.response).stat;
                        let int = value.reduce((mass,item) => {return mass + item.votes}, 0);
                        value = value.map(item => {
                           return `<div>${item.answer}:<span class="bold_procent"> ${findProcent(item.votes, int)}%</span></div>`;
                        });
                        pollAnswers.innerHTML = value.join('');

                    }
                });
                xhr.send( `vote=${idAnswer}&answer=${idx}` );
                
        });
    });
    });


function findProcent(num, sum) {
    return ((num/sum)*100).toFixed(2);
}