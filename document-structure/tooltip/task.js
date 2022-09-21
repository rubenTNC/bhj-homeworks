const hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));

hasTooltips.forEach(hasTooltip => {
    hasTooltip.addEventListener("click", (event) => {
        event.preventDefault();
        const tooltipsAactive = Array.from(document.querySelectorAll(".tooltip_active"));
        tooltipsAactive.forEach(tooltipAactive => tooltipAactive.remove());
        event.target.insertAdjacentHTML("afterEnd", `<div class="tooltip">${event.target.getAttribute("title")}</div>` );
        let tooltips = Array.from(document.querySelectorAll(".tooltip"));
        tooltips.forEach(tooltip => tooltip.classList.toggle("tooltip_active"));
    });
})