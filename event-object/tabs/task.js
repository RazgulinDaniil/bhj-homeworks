const navTabs = document.querySelectorAll('.tab');
const contentTabs = document.querySelectorAll('.tab__content');

navTabs.forEach((tab,idx) => tab.addEventListener("click", () => {
    navTabs.forEach(item => item.classList.remove('tab_active'));
    contentTabs.forEach(item => item.classList.remove('tab__content_active'));

    tab.classList.add('tab_active');
    contentTabs[idx].classList.add('tab__content_active');
}));