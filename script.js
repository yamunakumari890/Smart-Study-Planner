let tasks = JSON.parse(localStorage.getItem("studyTasks")) || [];

const filterTasks = document.getElementById("filterTasks");
const taskInput = document.getElementById("taskInput");
const subject = document.getElementById("subject");
const priority = document.getElementById("priority");
const studyDate = document.getElementById("studyDate");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function createTaskCard(taskData, index){

  const task = document.createElement("div");
  task.classList.add("task-card");

  if(taskData.completed){
    task.classList.add("completed");
  }

    task.innerHTML = `
        <h3>${taskData.title}</h3>
        <p>Subject: ${taskData.subject}</p>
        <p>Priority: ${taskData.priority}</p>
        <p>Date: ${taskData.date}</p>

        <button class="complete-btn">✅ Complete</button>
        <button class="delete-btn">🗑️ Delete</button>
        <button class="edit-btn">✏️ Edit</button>
    `;
    taskList.appendChild(task);

    const completeBtn = task.querySelector(".complete-btn");

    completeBtn.addEventListener("click", function() {
      task.classList.toggle("completed");

      taskData.completed = task.classList.contains("completed");

        tasks[index] = taskData;

      localStorage.setItem("studyTasks", JSON.stringify(tasks));
    });

    const deleteBtn = task.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function(){
      task.remove();

      tasks.splice(index, 1);

      localStorage.setItem("studyTasks", JSON.stringify(tasks));
    });

    const editBtn = task.querySelector(".edit-btn");
    const taskTitle = task.querySelector("h3");

    editBtn.addEventListener("click", function(){
       const newTask = prompt(
            "Edit your task:",
            taskTitle.textContent
        );

        if(newTask !== null && newTask.trim() !== ""){

          taskTitle.textContent = newTask;
          taskData.title = newTask;
          tasks[index] = taskData;

          localStorage.setItem("studyTasks", JSON.stringify(tasks));
        }
    });

}

addTaskBtn.addEventListener("click", function() {
  console.log("Add Task Button Clicked");

  if (taskInput.value.trim() === ""){
    alert("Please enter a task");
    return;
  }

  const taskData ={
    title: taskInput.value,
    subject: subject.value,
    priority: priority.value,
    date: studyDate.value,
    completed: false
  };

  tasks.push(taskData);
  localStorage.setItem("studyTasks", JSON.stringify(tasks));

 createTaskCard(taskData, tasks.length - 1);

   taskInput.value = "";

    subject.value = "";

    priority.value = "";

    studyDate.value = "";
});

filterTasks.addEventListener("change", function() {
  const filterValue = filterTasks.value;
  const taskCards = document.querySelectorAll(".task-card");

  taskCards.forEach(function (task){
    const isCompleted = task.classList.contains("completed");

    if(filterValue === "all") {
      task.style.display = "block";
    }
    else if (filterValue === "completed") {

      task.style.display = isCompleted ? "block" : "none";
    }
    else if (filterValue === "pending") {

      task.style.display = !isCompleted ? "blcok" : "none";
    }
  });
});

function loadTasks() {
  tasks.forEach(function (taskData, index){
    createTaskCard(taskData, index);
  });
}

loadTasks();