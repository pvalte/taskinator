window.onload=function(){
    var buttonEl = document.querySelector("#save-task"); //button element
    var tasksToDoEl = document.querySelector("#tasks-to-do"); //to do list element

    var createTaskHandler = function() {
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";
        listItemEl.textContent = "This is a new task.";
        tasksToDoEl.appendChild(listItemEl);
    };

    buttonEl.addEventListener("click", createTaskHandler);
}





