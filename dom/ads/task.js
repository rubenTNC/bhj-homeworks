let rotatorCaseIndex = 0;

// setInterval(() => {
//     const rotators = Array.from(document.querySelectorAll(".rotator"));
//     rotators.forEach(rotator => {
//         const rotatorCases = rotator.querySelectorAll(".rotator__case");
//         const rotatorLength = rotatorCases.length;
//         rotatorCases.forEach(rotatorCase => rotatorCase.classList.remove("rotator__case_active"));
//         rotatorCaseIndex < rotatorLength - 1 ? rotatorCaseIndex++ : rotatorCaseIndex = 0;
//         rotatorCases[rotatorCaseIndex].classList.add("rotator__case_active");   


//     })
// }, 1000)

const rotators = Array.from(document.querySelectorAll(".rotator"));
rotators.forEach(rotator => {
    const rotatorCases = rotator.querySelectorAll(".rotator__case");
    const rotatorLength = rotatorCases.length;
    const rotators = Array.from(document.querySelectorAll(".rotator"));
    setInterval(() => {
            rotators.forEach(rotator => {
                rotatorCases.forEach(rotatorCase => rotatorCase.classList.remove("rotator__case_active"));
                rotatorCaseIndex < rotatorLength - 1 ? rotatorCaseIndex++ : rotatorCaseIndex = 0;
                rotatorCases.forEach(rotatorCase => rotatorCase.style.color = "");
                rotatorCases[rotatorCaseIndex].style.color = rotatorCases[rotatorCaseIndex].dataset.color;
                rotatorCases[rotatorCaseIndex].classList.add("rotator__case_active");       
            })
        }, rotatorCases[rotatorCaseIndex].dataset.speed)
});