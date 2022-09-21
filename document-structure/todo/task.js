const tasksAdd = document.querySelector(".tasks__add");
const tasksList = document.querySelector(".tasks__list");
const tasksInput = document.querySelector(".tasks__input");

tasksAdd.addEventListener("click", (event) => {
    event.preventDefault();
    if (tasksInput.value)
        tasksList.insertAdjacentHTML("afterbegin", `<div class="task">
        <div class="task__title">
            ${tasksInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`);
    tasksInput.value = "";
    const tasksRemove = Array.from(document.querySelectorAll(".task__remove"));
    tasksRemove.forEach(taskRemove => {
        taskRemove.addEventListener("click", (event) => {
            taskRemove.closest(".task").remove();
        });
    });

});





