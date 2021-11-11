const url = 'https://netology-slow-rest.herokuapp.com/';
const loader = document.querySelector('#loader');
const listItems = document.querySelector('#items');
checkLocalStorage();

const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        loader.classList.remove('loader_active');
        let value = JSON.parse(xhr.response).response;
        addToLocalStorage('currency', value);
        let arrElements = [];
        value = getFromLocalStorage('currency');
        for(let item in value) {
            arrElements.push(value[item]);
        }
        listItems.innerHTML = arrElements.map(item => addToHtml(item)).join('');
    }
});
xhr.send();

function addToLocalStorage(key , obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}
function getFromLocalStorage(key) {
    let ans = JSON.parse(localStorage.getItem(key));
    if(ans === null) {
        return ans;
    }
    return ans.Valute;
}
function addToHtml(item) {
    return `<div class="item"><div class="item__code">${item.CharCode}</div><div class="item__value">${item.Value}</div><div class="item__currency">руб.</div></div>`;
}

function checkLocalStorage() {
    if(getFromLocalStorage('currency') !== null) {
        loader.classList.remove('loader_active');
        let arrElements = [];
        let value = getFromLocalStorage('currency');
        for(let item in value) {
            arrElements.push(value[item]);
        }
        listItems.innerHTML = arrElements.map(item => addToHtml(item)).join('');
    }
}