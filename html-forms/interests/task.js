const interestChecks = Array.from(document.querySelectorAll(".interest__check"));

interestChecks.forEach(interestCheck => {
    interestCheck.addEventListener("change", (event) => {
        if(!interestCheck.closest(".interests_active")) {
            const parent = interestCheck.closest(".interest");
            const elements = Array.from(parent.querySelectorAll(".interest__check"));
            if(interestCheck.checked === true) {
                elements.forEach(element => element.checked = true);
            } else {
                elements.forEach(element => element.checked = false);
            }            
        }
    })    
});
