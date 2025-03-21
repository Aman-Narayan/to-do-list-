
const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const taskDescription = document.createElement("span");
  taskDescription.textContent = taskText;
  li.appendChild(taskDescription);

  const completeButton = document.createElement("button");
  completeButton.classList.add("complete");
  completeButton.textContent = "Complete";
  completeButton.onclick = () => {
    li.classList.toggle("completed");
  };
  li.appendChild(completeButton);
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    taskList.removeChild(li);
  };
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  taskInput.value = "";
}


addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
