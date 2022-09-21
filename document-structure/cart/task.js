const products = Array.from(document.querySelectorAll(".product"));
const basket = document.querySelector(".cart__products");
let basketElems = Array.from(basket.querySelectorAll(".cart__product"));


products.forEach(product => {
    const productCountPlus = product.querySelector(".product__quantity-control_inc");
    const productCountMinus = product.querySelector(".product__quantity-control_dec");
    const productAdd = product.querySelector(".product__add");
    let count = +(product.querySelector(".product__quantity-value").textContent);
    productCountPlus.addEventListener("click", (event) => {
        count++;
        product.querySelector(".product__quantity-value").textContent = count;
    });
    productCountMinus.addEventListener("click", (event) => {
        if (count > 1) {
            count--;
            product.querySelector(".product__quantity-value").textContent = count
        }
    });
    productAdd.addEventListener("click", (event) => {
        basketElems = Array.from(basket.querySelectorAll(".cart__product"));
        let isBasketElem = basketElems.findIndex(basketElem => basketElem.dataset.id === product.dataset.id);
        if(isBasketElem === -1) {
            basket.insertAdjacentHTML("afterbegin", `
            <div class="cart__product" data-id=${product.dataset.id}>
                <img class="cart__product-image" src=${product.querySelector("img").getAttribute("src")}>
                <div class="cart__product-count">${count}</div>
            </div>
            `);
        } else {
            let basketElemCount = +(basketElems[isBasketElem].querySelector(".cart__product-count").textContent);
            basketElemCount += count;
            basketElems[isBasketElem].querySelector(".cart__product-count").textContent = basketElemCount;
        }
    });
});

