const tabs = Array.from(document.querySelectorAll(".tab"));
const contentTabs = Array.from(document.querySelectorAll(".tab__content"))
tabs.forEach(tab => {
    tab.addEventListener("click", (event) => {
        tabs.forEach(tab => tab.classList.remove("tab_active"))
        tab.classList.toggle("tab_active");
        contentTabs.forEach(contentTab => contentTab.classList.remove("tab__content_active"))
        contentTabs[tabs.indexOf(event.target)].classList.toggle("tab__content_active")
    })
});