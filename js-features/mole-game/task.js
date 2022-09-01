let hits = + (document.querySelector("#dead").textContent);
let misses = +(document.querySelector("#lost").textContent);

function render () {
    misses = 0;
    hits = 0;
    document.querySelector("#dead").textContent = hits;
    document.querySelector("#lost").textContent = misses;

}

document.addEventListener("click", (event) => {
    if (event.target.className === "hole hole_has-mole") {
        hits++;
        document.querySelector("#dead").textContent = hits;
    }
    if (event.target.className === "hole") {
        misses++;
        document.querySelector("#lost").textContent = misses;
    }
    if(misses === 5) {
        alert("Вы проиграли");
        render();
    }
    if (hits === 10) {
        alert("Вы победили");
        render();
    }
});