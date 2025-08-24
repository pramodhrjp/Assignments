function addTask() {
  const task_input = document.getElementById("taskInput").value;
  if (!task_input) {
    alert("Please enter a task");
    return;
  }

  const taskCard = document.createElement("div");
  taskCard.className = "task-card";

  const taskSpan = document.createElement("span");
  taskSpan.className = "task-text";
  taskSpan.textContent = task_input;

  const btnContainer = document.createElement("div");
  btnContainer.className = "task-buttons";
  

  const doneButton = document.createElement("button");
  doneButton.textContent = 'Done'
  doneButton.onclick = function () {
    taskSpan.classList.toggle("done");
    doneButton.classList.toggle("done-active"); 
  };


  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.onclick = function () {
    document.getElementById("taskContainer").removeChild(taskCard);
    
  }

  btnContainer.appendChild(doneButton);
  btnContainer.appendChild(removeButton);

  taskCard.appendChild(taskSpan);
  taskCard.appendChild(btnContainer);

  document.getElementById("taskContainer").appendChild(taskCard);


  document.getElementById("taskInput").value = '';

}
