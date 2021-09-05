window.onload=function(){
    var formEl = document.querySelector("#task-form"); //form element
    var tasksToDoEl = document.querySelector("#tasks-to-do"); //to do list element

    var createTaskHandler = function(event) {
        event.preventDefault();
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";
        listItemEl.textContent = "This is a new task.";
        tasksToDoEl.appendChild(listItemEl);
    };

    formEl.addEventListener("submit", createTaskHandler);
}





