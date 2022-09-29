const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
modalClose.addEventListener("click", () => {
    modal.classList.remove("modal-active");
});

class Poll {
    constructor(selector) {
        this.pollTitle = selector.querySelector("#poll__title");
        this.poolAnswers = selector.querySelector("#poll__answers");
    };
    render(res, selector) {
        this.pollTitle.textContent = res.data.title;
        res.data["answers"].forEach(answer => {
            this.poolAnswers.insertAdjacentHTML("afterbegin",
            `
            <button class="poll__answer">
              ${answer}
            </button>
            ` 
            );
        });
        this.btnPoolAnswers = Array.from(selector.querySelectorAll(".poll__answer"));
        this.btnPoolAnswers.forEach(btnPoolAnswer => {
            btnPoolAnswer.addEventListener("click", () => {
                modal.classList.add("modal-active");
            });
        });
    };
};

const xml = new XMLHttpRequest();
xml.open("GET", " https://netology-slow-rest.herokuapp.com/poll.php");
xml.send();
xml.addEventListener("readystatechange", () => {
    if ((xml.status === 200 && xml.readyState === xml.DONE)) {
        const data = JSON.parse(xml.response);
        const poll = new Poll(document.querySelector(".card"));
        poll.render(data, document.querySelector(".card"));
    };
});