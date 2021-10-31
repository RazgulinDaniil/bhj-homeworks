class chatWidget {
    constructor(container) {
        this.container = container;
        this.chatBox = document.getElementById('chat-widget__messages');
        this.sideButtom = document.querySelector('.chat-widget__side');
        this.chatInput = document.getElementById('chat-widget__input');

        this.sentMes();
        this.getTime();
        this.activateChat();
        this.userMessages = [];
    }

    getTime() {
        const date = new Date();
        let min = date.getMinutes();
        let hours = date.getHours();
        min < 10? min = '0'+ min: min;
        hours < 10? hours =  '0' + hours: hours;
        return hours + ':' + min;
    }

    activateChat() {
        this.sideButtom.addEventListener('click', () => {
            this.container.classList.add('chat-widget_active');
        });
        setTimeout(()=>{
            if(this.chatInput.value === '' && this.userMessages.length === 0) {
                this.postBot();
            }
        }, 30000);
    }

    sentMessage() {
        this.chatInput.addEventListener('keydown',(e)=> {
            if(e.keyCode === 13 && this.chatInput.value !== '') {
                this.userMessages.push(this.chatInput.value);
                this.postUser();
                this.postBot();
                this.chatInput.value = '';
            }
        });
    }

    autoscroll() {
        this.chatBox.scrollIntoView(false);
    }

    postUser() {
        const time = this.getTime();
        this.chatBox.innerHTML += `<div class="message message_client">
        <div class="message__time">${time}</div>
        <div class="message__text">
        ${this.userMessages[this.userMessages.length -1 ]}
        </div>
        </div>`;
        this.autoscroll();
    }

    postBot() {
        const time = this.getTime();
        const botmessage = this.getBotMessage();
        this.chatBox.innerHTML += `<div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">
        ${botmessage}
        </div>
        </div>`;
        this.autoscroll();
    }

    getBotMessage() {
        const messages = [
            'Привет!',
            'Пока!',
            'Не пишите мне больше!',
            'Что еще?',
            'Вы тут?',
            'Вопросы?'
        ],
        index = Math.floor(Math.random() * messages.length);
        return messages[index];
    }
}
new chatWidget(document.querySelector('.chat-widget'));

