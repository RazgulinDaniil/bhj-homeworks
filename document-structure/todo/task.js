'use strict';
class toDo {
    constructor(container) {
        this.container = container;
        this.input = document.querySelector('.tasks__input');
        this.list = document.querySelector('.tasks__list');
        this.addButton = document.querySelector('.tasks__add');

        this.tasklist = [];
        this.start();
        this.showList();
        this.eventAddtask();
    }

    showList() {
        this.list.innerHTML = Array.from(this.getLocalStorage('tasks')).join('');
        this.eventRemove();

    }
    addToLocalStorage(obj) {
        localStorage.setItem('tasks', JSON.stringify(obj));
    }

    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    eventAddtask () {
        const addkey = (e) => {
            if(e.key === 'Enter' || e.type === 'click') {
                e.preventDefault();
                if(this.input.value !== '') {
                    this.tasklist.push(`<div class="task"><div class="task__title">${this.input.value}</div><a href="#" class="task__remove">&times;</a>`);
                    this.addToLocalStorage(this.tasklist);
                    this.showList();
                    this.input.value = '';
                }
            }
        };

        this.input.addEventListener('keydown', addkey);
        this.addButton.addEventListener('click', addkey);

    }

    eventRemove() {
        Array.from(this.list.querySelectorAll('.task__remove')).forEach((element,idx) => {
            element.addEventListener('click', ()=> {
                this.tasklist.splice(idx, 1);
                this.addToLocalStorage(this.tasklist);
                this.showList();
            });
        });
    }

    start () {
        if(this.getLocalStorage('tasks') != null) {
            this.tasklist = this.getLocalStorage('tasks');
        }
    }
}
new toDo(document.querySelector('.card'));
