const loader = document.querySelector(".loader");
const items = document.querySelector("#items");


const requestExchangeRate = new XMLHttpRequest();
requestExchangeRate.open("GET", "https://netology-slow-rest.herokuapp.com");
requestExchangeRate.setRequestHeader("Content-type", "application/json; charset=utf-8")
requestExchangeRate.send();
requestExchangeRate.onreadystatechange = () => {
    if (requestExchangeRate.status  === 200 && requestExchangeRate.readyState === requestExchangeRate.DONE) {
        loader.classList.remove("loader_active")
        const data = JSON.parse(requestExchangeRate.response);
        const valute = data.response.Valute;
        for (key in valute) {
            items.innerHTML += 
            `
            <div class="item">
            <div class="item__code">
                    ${key}
                </div>
                <div class="item__value">
                    ${valute[key].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
          </div>
            `
        };
    };
};


     