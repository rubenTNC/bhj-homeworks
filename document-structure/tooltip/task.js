const hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));


hasTooltips.forEach(hasTooltip => {
    hasTooltip.addEventListener("click", (event) => {
        event.preventDefault();
        const height = event.target.offsetHeight;
        const { left, top } = event.target.getBoundingClientRect(event.target);
        event.target.insertAdjacentHTML("afterEnd", `<div class="tooltip" style="left:${left}px; top:${top + height}px">${event.target.getAttribute("title")}</div>`);
        event.target.nextElementSibling.classList.toggle("tooltip_active");
        const tooltipsActive = Array.from(document.querySelectorAll(".tooltip_active"));
        tooltipsActive.forEach(tooltipActive => {
            if (event.target.nextElementSibling !== tooltipActive) {
                tooltipActive.remove();
            };
        });
    });
})