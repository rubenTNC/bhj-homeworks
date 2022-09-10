const dropdownElements = Array.from(document.querySelectorAll(".dropdown"));

dropdownElements.forEach(dropdownItem => {
    const dropdownValue = dropdownItem.querySelector(".dropdown__value");
    const dropdownList = dropdownItem.querySelector(".dropdown__list");
    const dropdownItems = Array.from(dropdownItem.querySelectorAll(".dropdown__item"));
    dropdownValue.addEventListener("click", () => {
        dropdownList.classList.toggle("dropdown__list_active");
    });
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener("click", (event) => {
            event.preventDefault();
            dropdownValue.textContent = dropdownItem.textContent;
            dropdownList.classList.remove("dropdown__list_active");
        });
    });
});




