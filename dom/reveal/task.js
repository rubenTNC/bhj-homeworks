const reveals = Array.from(document.querySelectorAll(".reveal"));

function visible (el) {
    const {top, bottom} = el.getBoundingClientRect(el);
    if (top > window.innerHeight) {
        return false;
    }
    if (bottom < 0) {
        return false
    }
    return true
}

window.addEventListener("scroll", () => {
    reveals.forEach(reveal => {
        reveal.classList.remove("reveal_active")
        const isVisible = visible(reveal);
        if (isVisible) {
            reveal.classList.add("reveal_active")
        } else {
            reveal.classList.remove("reveal_active")
        }
    })
});