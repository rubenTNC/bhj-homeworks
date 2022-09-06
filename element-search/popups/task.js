const popupMain = document.querySelector("#modal_main");
const popupSucces = document.querySelector("#modal_success");
let closePopups = document.querySelectorAll(".modal__close");
const showSuccess = document.querySelector(".show-success");

popupMain.classList.add("modal_active");

closePopups = Array.from(closePopups);
closePopups.forEach((element) => element.addEventListener("click", () => element.parentElement.parentElement.classList.toggle("modal_active")));
showSuccess.addEventListener("click", () => {
    popupMain.classList.remove("modal_active");
    popupSucces.classList.add("modal_active");
});






