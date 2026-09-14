let tasks = JSON.parse(localStorage.getItem("studyTasks")) || [];
const filterTasks = document.getElementById("filterTasks");
const taskInput = document.getElementById("taskInput");
const subject = document.getElementById("subject");
const priority = document.getElementById("priority");
const studyDate = document.getElementById("studyDate");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

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

  const task = document.createElement("div");
  task.classList.add("task-card");

  task.innerHTML =  `
  <h3>${taskInput.value}</h3>
  <p>Subject: ${subject.value}</p>
  <p>Priority: ${priority.value}</p>
  <p>Date: ${studyDate.value}</p>
  <button class="complete-btn">✅ Complete</button>
  <button class="delete-btn">🗑️ Delete</button>
  <button class="edit-btn">✏️ Edit</button>
   `;
   taskList.appendChild(task);

const completeBtn = task.querySelector(".complete-btn");

completeBtn.addEventListener("click", function(){
  task.classList.toggle("completed");
});

const deleteBtn = task.querySelector(".delete-btn");

deleteBtn.addEventListener("click", function(){
  task.remove();
});

const editBtn = task.querySelector(".edit-btn");

const taskTitle = task.querySelector("h3");

editBtn.addEventListener("click", function() {
  const newTask = prompt("Edit your task:", taskTitle.textContent);

  if (newTask !== null && newTask.trim() !== ""){
    taskTitle.textContent = newTask;
  }
});
filterTasks.addEventListener("change", function () {
     const filterValue = filterTasks.value;

    const tasks = document.querySelectorAll(".task-card");

    tasks.forEach(function (task) {

        const isCompleted = task.classList.contains("completed");

        if (filterValue === "all") {

            task.style.display = "block";

        } 
        else if (filterValue === "completed") {

            if (isCompleted) {
                task.style.display = "block";
            } else {
                task.style.display = "none";
            }

        } 
        else if (filterValue === "pending") {

            if (!isCompleted) {
                task.style.display = "block";
            } else {
                task.style.display = "none";
            }
          }
        });
   });
}); 
