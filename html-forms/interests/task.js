const checkboxes = document.querySelectorAll('.interest__check');
checkboxes.forEach(item => item.addEventListener('click',check));

function findParent(item) {
    const arr = [];
    const parentGroup = item.closest('ul').previousElementSibling;
    const ulChildren = item.closest('ul').children;
    for(let i of ulChildren) {
        arr.push(i.querySelector('input'));
    }
    if (parentGroup === null) {
        return;
    }
    const parent = parentGroup.children[0];
    parent.checked = false;
    parent.indeterminate = false;
    if(arr.some(e => e.checked === true)) {
        parent.indeterminate = true;
    }
    if(arr.every(e => e.checked === true)) {
        parent.indeterminate = false;
        parent.checked = true;
    }
    findParent(parent);
}

function changeBranch(item) {
    let arr = item.closest('label').nextElementSibling;
    if(arr === null) {
        return;
    }
    arr = Array.from(arr.children);
    if(item.checked === true) {
        arr.forEach(e => {e = e.querySelector('input');
        e.checked = true;
        changeBranch(e);}
        );
    } else {  
        arr.forEach(e =>{e = e.querySelector('input');
        e.checked = false;
        changeBranch(e);}
        );
    } 
}

function check(event) {
    const target = event.target;
    changeBranch(target);
    findParent(target);
}






