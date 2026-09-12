const taskInput = document.getElementById("taskInput");
const subject = document.getElementById("subject");
const priority = document.getElementById("priority");
const studyDate = document.getElementById("studyDate")

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
  console.log("Add Task Button Clicked");

  if (taskInput.value.trim() === ""){
    alert("Please enter a task");
    return;
  }

  const task = document.createElement("div");

  task.innerHTML =  `
  <h3>${taskInput.value}</h3>
  <p>Subject: ${subject.value}</p>
  <p>Priority: ${priority.value}</p>
  <p>Date: ${studyDate.value}</p>
   `;
   taskList.appendChild(task);
});
