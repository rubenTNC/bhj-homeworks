const tasksAdd = document.querySelector(".tasks__add");
const tasksList = document.querySelector(".tasks__list");
const tasksInput = document.querySelector(".tasks__input");


tasksAdd.addEventListener("click", (event) => {
    event.preventDefault();
    if (tasksInput.value.trim()) {
        tasksList.insertAdjacentHTML("afterbegin",
        `<div class="task">
            <div class="task__title">
                ${tasksInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
        tasksInput.value = "";
        let task = document.querySelector(".task");
        let taskRemove = task.querySelector(".task__remove");
        taskRemove.addEventListener("click", () => {
            task.remove()
        });
    };
});







