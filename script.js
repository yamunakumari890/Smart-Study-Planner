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
});
