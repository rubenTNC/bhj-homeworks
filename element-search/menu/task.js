const menuLinks = Array.from(document.querySelectorAll(".menu__link"));
const menus = Array.from(document.querySelectorAll(".menu"));

menuLinks.forEach((element) => {
    element.addEventListener("click", (event) => {
        if (element.parentElement.querySelector(".menu")) {
            event.preventDefault();
            menus.forEach((menu) => menu.classList.remove("menu_active"));
            element.parentElement.querySelector(".menu").classList.toggle("menu_active");
            return false;
        }        
    });
});

