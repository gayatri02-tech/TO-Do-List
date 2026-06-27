const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = task;

    // Complete task
    span.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className ="btn btn-outline-info";
    

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    //Edit and Save Button

   const EditBtn  = document.createElement("button");
   EditBtn.textContent ="Edit";
   EditBtn.className ="btn btn-outline-info";

   EditBtn.addEventListener('click',function () {
    span.contentEditable = true;
    span.focus();
    EditBtn.textContent ="Save";

    EditBtn.addEventListener('click',function () {
        span.contentEditable = false;
        EditBtn.textContent ="Edit";  
    });  

   });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(EditBtn);
    taskList.appendChild(li);

    input.value = "";
}