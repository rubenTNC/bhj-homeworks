const popupMain = document.querySelector("#modal_main");
const popupSucces = document.querySelector("#modal_main");
const closePopup = document.querySelector(".modal__close");



popup.classList.add("modal_active");



closePopup.addEventListener("click", ()=> {
    popup.classList.remove("modal_active");
});