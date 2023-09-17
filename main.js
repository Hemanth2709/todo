const inputBox = document.getElementById("input-box");
const listID = document.getElementById("listcontainer");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `${inputBox.value}
    <i class="fas fa-times"></i>
    `;
    listID.appendChild(li);
    saveData();
    inputBox.value = "";
  }
}

listID.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName == "I") {
      e.target.parentElement.remove();
    }
  },
  false
);

function getCompletedTasks() {
  let completedTasks = document.getElementsByClassName("checked");
  for (let i = 0; i < completedTasks.length; i++) {
    completedTasks[i].style.display = "none";
  }
}

function saveData() {
  localStorage.setItem("data", listID.innerHTML);
}

function showList() {
  listID.innerHTML = localStorage.getItem("data");
}

showList();

function clearAll() {
  localStorage.clear();
  listID.innerHTML = "";
}
