const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() { 
    if (inputBox.value === '') {
        alert("You must write a task")
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ''; 
    saveData();
}

listContainer.addEventListener("click", function(ani){
    if (ani.target.tagName === "LI") {
        ani.target.classList.toggle("checked");
        saveData();
    }
    else if (ani.target.tagName === "SPAN") {
        ani.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData () {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showList () {
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();