const menuSub = document.querySelectorAll(".menu_sub");


for(let sub of menuSub) {
    let arrNav = [];
    arrNav.push(sub.closest(".menu__item"));
    for(let key of arrNav) { 
        let Links = [];
        Links.push(key.firstElementChild);
        Links.forEach(element => {
            element.onclick = function () {
                if(sub.classList.contains("menu_active")) {
                    sub.classList.remove("menu_active");
                    return false;
                }
                for(let sub of menuSub) {
                    sub.classList.remove("menu_active");
                }
                sub.classList.add("menu_active");
                return false;
            };

            // element.addEventListener("click", () => {
            //     event.preventDefault();
            //     sub.classList.toggle("menu_active");
                
            // });
        });
    }
}

