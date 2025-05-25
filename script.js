let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";

  taskList.forEach((task, index) => {
    let li = document.createElement("li");
    li.className = task.done ? "done" : "";
    li.innerHTML = `
      <span onclick="toggleDone(${index})">${task.text}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">X</button>
    `;
    taskListElement.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Don't add empty task! 😡");
    return;
  }

  taskList.push({ text: taskText, done: false });
  input.value = "";
  saveTasks();
  renderTasks();
}

function toggleDone(index) {
  taskList[index].done = !taskList[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

renderTasks();
