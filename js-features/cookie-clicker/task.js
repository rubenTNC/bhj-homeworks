let clickerCounter = +(document.getElementById("clicker__counter").textContent);
const clickerCookie = document.querySelector(".clicker__cookie");
let clickerSpeed = +(document.querySelector("#clicker__speed").textContent);
let firstClick;
let lastClick;


clickerCookie.addEventListener("click", () => {
    clickerCounter++;
    if(clickerCounter % 2 === 1) {
        clickerCookie.style.width = "300px";
        firstClick = Date.now();
    } else {
        clickerCookie.style.width = "200px";
        lastClick = Date.now();
        clickerSpeed = (lastClick - firstClick) / 2;
        document.querySelector("#clicker__speed").textContent = clickerSpeed;
    }
    document.getElementById("clicker__counter").textContent = clickerCounter;
});
