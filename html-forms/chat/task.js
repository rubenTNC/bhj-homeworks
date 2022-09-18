const chatWidget = document.querySelector(".chat-widget");

const chatWidgetSide = document.querySelector(".chat-widget__side")

const chatWidgetMessages = document.querySelector(".chat-widget__messages");

const chatWidgetInput = document.querySelector("#chat-widget__input");

chatWidgetSide.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active");
});

let messagesBot = ["Мы нечего не будем вам продавать",
    "Кто тут?",
    "Добрый день! До свидания!",
    "Где ваша совесть?",
    "К сожелению все операторы сейчас заняты. Не пишите нам больше",]


chatWidgetInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (chatWidgetInput.value) {
            let time = new Date().toLocaleTimeString().slice(0, -3);            
            chatWidgetMessages.innerHTML +=
                `<div class="message message_client">
                <div class="message__time">${time}</div>
                <div class="message__text">${chatWidgetInput.value}</div>
           </div>`;
           chatWidgetInput.value = "";
           let randomMessage = Math.floor(Math.random() * messagesBot.length);
           chatWidgetMessages.innerHTML += 
           `<div class="message">
                <div class="message__time">${time}</div>
                <div class="message__text">${messagesBot[randomMessage]}</div>
            </div>`
        }
    }
});





