const btnNext = document.querySelector(".slider__arrow_next");
const btnPrev = document.querySelector(".slider__arrow_prev");
const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));

let count = 0;
const amountЕlements = sliderItems.length;

function render() {
    sliderItems.forEach((element) => element.classList.remove("slider__item_active"));
    sliderDots.forEach((element) => element.classList.remove("slider__dot_active"));
    sliderItems[count].classList.add("slider__item_active");
    sliderDots[count].classList.add("slider__dot_active");
}

btnNext.addEventListener("click", () => {
    if (count < amountЕlements - 1) {
        count++;
        render();
    } else {
        count = 0;
        render();
        
    }
});

btnPrev.addEventListener("click", () => {
    if (count > 0) {
        count--;
        render();        
    }
    else {
        count = amountЕlements - 1;
        render();        
    }
});

sliderDots.forEach((element) => {
    element.addEventListener("click", (event) => {
        count = sliderDots.indexOf(event.target);
        render();
    })
})