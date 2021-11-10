'use strict';
class ToDo {
    constructor(container) {
        this.container = container;
        this.input = document.querySelector('.tasks__input');
        this.list = document.querySelector('.tasks__list');
        this.addButton = document.querySelector('.tasks__add');
        this.form = document.querySelector('.tasks__control');

        this.tasklist = [];
        this.formPreventDef();
        this.showList();
        this.eventAddtask();
    }
    formPreventDef() {
        this.form.addEventListener('submit', (e)=> {
            e.preventDefault();
        });
    }
    convertToHtml(element) {
        return `<div class="task"><div class="task__title">${element.value}</div>
        <a href="#" class="task__remove">&times;</a></div>`;
    }
    showList() {
        if(this.getLocalStorage('tasks') != null) {
            let arr = this.getLocalStorage('tasks');
            this.tasklist = this.getLocalStorage('tasks');
            this.list.innerHTML = arr.map(e => this.convertToHtml(e)).join('');
            this.eventRemove();
        }

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
                if(this.input.value.trim() !== '') {
                    this.tasklist.push({value:this.input.value});
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
}

new ToDo(document.querySelector('.card'));
