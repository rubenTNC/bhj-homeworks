const hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));

hasTooltips.forEach(hasTooltip => {
    hasTooltip.addEventListener("click", (event) => {
        event.preventDefault();
        const tooltipsAactive = Array.from(document.querySelectorAll(".tooltip_active"));
        tooltipsAactive.forEach(tooltipAactive => tooltipAactive.remove())
        const height = event.target.offsetHeight
        const {left, top} = event.target.getBoundingClientRect (event.target);
        event.target.insertAdjacentHTML("afterEnd", `<div class="tooltip" style="left:${left}px; top:${top + height}px">${event.target.getAttribute("title")}</div>`);
        let tooltips = Array.from(document.querySelectorAll(".tooltip"));
        event.target.nextElementSibling.classList.toggle("tooltip_active")
    });
})