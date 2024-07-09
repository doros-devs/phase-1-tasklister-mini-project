const inputBox = document.querySelector("#new-task-description");
const toDoListItems = document.querySelector("#tasks");

document.querySelector("#create-task-form").addEventListener("submit", (e) => {
    e.preventDefault()});

function addTask() {
    if (inputBox.value === ''){
        alert("You must write something");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        toDoListItems.appendChild(li);
        let cancel = document.createElement("button");
        cancel.innerHTML = "delete";
        li.appendChild(cancel);

    }
}

toDoListItems.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON" ){
        e.target.parentNode.remove();
    }
})