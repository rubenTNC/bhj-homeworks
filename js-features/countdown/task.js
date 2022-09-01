let time = document.getElementById('timer').textContent;
const url = "https://dwweb.ru/__a-data/__all_for_scripts/__rar/pro_dw_koments_1_3.rar"

const timerId = setInterval(() => {
    time--;
    document.getElementById('timer').textContent = time;
    if (time === 0) {
        document.location.assign(url);
        clearInterval(timerId);
        alert("Вы победили в конкурсе");
    }
}, 1000);


let timeHours = +(document.getElementById('timer-hours').textContent);
let timeMinutes = +(document.getElementById('timer-minutes').textContent);
let timeSeconds = +(document.getElementById('timer-seconds').textContent);

const timerFull = setInterval(() => {
    if (+(timeSeconds) === -1) {
        timeSeconds = 59;
        --timeMinutes;
    }
    if (+(timeSeconds) === 59 && +(timeMinutes) === -1) {
        timeMinutes = 59;
        --timeHours;
    }
    if (String(timeSeconds).length === 1) {
        timeSeconds = `0${timeSeconds}`;
    }
    if (String(timeMinutes).length === 1) {
        timeMinutes = `0${timeMinutes}`;
    }
    if (String(timeHours).length === 1) {
        timeHours = `0${timeHours}`;
    }
    document.getElementById('timer-seconds').textContent = timeSeconds;
    document.getElementById('timer-minutes').textContent = timeMinutes;
    document.getElementById('timer-hours').textContent = timeHours;
    timeSeconds--;
    if(+(timeHours) === 0 && +(timeMinutes) === 0 && +(timeSeconds) === -1) {
        clearInterval(timerFull);
        alert("Концерт уехал");
    }
}, 1000);








