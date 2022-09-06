const btnNext = document.querySelector(".slider__arrow_next");
const btnPrev = document.querySelector(".slider__arrow_prev");
const sliderItems = Array.from(document.querySelectorAll(".slider__item"));

let count = 0;
const amountЕlements = sliderItems.length;

btnNext.addEventListener("click", () => {
    if (count < amountЕlements - 1) {
        count++;
        sliderItems[count - 1].classList.remove("slider__item_active");
        sliderItems[count].classList.add("slider__item_active");
    } else {
        sliderItems[count].classList.remove("slider__item_active");
        count = 0;
        sliderItems[count].classList.add("slider__item_active");
    }
});

btnPrev.addEventListener("click", () => {
    if (count > 0) {
        count--;
        sliderItems[count + 1].classList.remove("slider__item_active");
        sliderItems[count].classList.add("slider__item_active");
    }
    else {
        sliderItems[count].classList.remove("slider__item_active");
        count = amountЕlements - 1;
        sliderItems[count].classList.add("slider__item_active");
    }
});