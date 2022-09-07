const menuLinks = Array.from(document.querySelectorAll(".menu__link"));
const menus = Array.from(document.querySelectorAll(".menu"));

menuLinks.forEach((element) => {
    element.addEventListener("click", (event) => {
        if (element.parentElement.querySelector(".menu")) {
            event.preventDefault();
            if (element.parentElement.querySelector(".menu").className.includes("menu_active")) {
                element.parentElement.querySelector(".menu").classList.remove("menu_active");
            } else {
                menus.forEach((menu) => menu.classList.remove("menu_active"));
                element.parentElement.querySelector(".menu").classList.add("menu_active");
            }
        }
    });
});

