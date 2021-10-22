const modalElement = document.querySelector("#modal_main");
const closeElements = document.querySelectorAll(".modal__close_times");
const btnShowSuccess = document.querySelector(".show-success");
const modalSuccess = document.querySelector("#modal_success");

setTimeout(() => {
    modalElement.classList.add("modal_active");
        closeElements.forEach(item => item.onclick = function (){
            modalElement.classList.remove("modal_active");
            modalSuccess.classList.remove("modal_active");
        });

    btnShowSuccess.addEventListener("click", () => {
        modalSuccess.classList.add("modal_active");

    });
}, 2000);
