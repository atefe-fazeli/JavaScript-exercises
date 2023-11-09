let $ = document;
let inputElem = $.getElementById("itemInput");
let addButtonElem = $.getElementById("addButton");
let clearButtonElem = $.getElementById("clearButton");
let ulElem = $.getElementById("todoList");
let todoArray = [];

function getTodoValue(e) {
  if (e.keyCode === 13) {
    addTodoHandler();
  }
}

function deleteHandler(e) {
  let newArray = todoArray.filter(function (item) {
    console.log(item.id, e.target.parentElement.getAttribute("id"));
    return item.id != e.target.parentElement.getAttribute("id");
  });
 
    for(let i=0;i<newArray.length;i++){
        newArray[i].id=i
    }
    todoArray=newArray
    localStorage.setItem("todoArr", JSON.stringify(todoArray));
  console.log(newArray,'newarray')
  console.log(todoArray, "delete");
  e.target.parentElement.remove();
}

function completeHandler(e) {
  let index = todoArray.findIndex(function (item) {
    return item.id == e.target.parentElement.getAttribute("id");
  });
  if (index !== null) {
    todoArray[index].isCompleted = true;
    localStorage.setItem("todoArr", JSON.stringify(todoArray));
  }
  console.log(todoArray, "completed");
  e.target.parentElement.classList.add("uncompleted");
}

function clearTodoHandler() {
  inputElem.value = null;
}

function addTodoHandler() {
  console.log(inputElem.value);
  todoArray.push({
    title: inputElem.value,
    id: todoArray.length,
    isCompleted: false,
  });

  todoLi = $.createElement("li");
  todoLi.classList.add("completed", "well");
  todoLabel = $.createElement("label");
  todoLabel.innerHTML = inputElem.value;
  completeBtn = $.createElement("button");
  completeBtn.classList.add("btn", "btn-success");
  completeBtn.innerHTML = "Complete";
  deleteBtn = $.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", deleteHandler);
  completeBtn.addEventListener("click", completeHandler);
  todoliId = todoArray.length - 1;
  todoLi.setAttribute("id", todoliId);
  todoLi.appendChild(todoLabel);
  todoLi.appendChild(completeBtn);
  todoLi.appendChild(deleteBtn);
  ulElem.appendChild(todoLi);

  localStorage.setItem("todoArr", JSON.stringify(todoArray));
  clearTodoHandler();
}

function loadTodoHandler() {
  todoArray = JSON.parse(localStorage.getItem("todoArr"));
  console.log(todoArray);
  if (todoArray === null) {
    todoArray = [];
  } else {
    if (todoArray.length) {
      console.log(todoArray,'localstorage');
      todoArray.forEach((element) => {
      console.log(element.title,'localstograge title')

        todoLi = $.createElement("li");
        todoLi.classList.add("well");
        todoLabel = $.createElement("label");
        todoLabel.innerHTML = element.title;
        completeBtn = $.createElement("button");
        completeBtn.classList.add("btn", "btn-success");

        if (element.isCompleted) {
          todoLi.classList.add("uncompleted");
        } else {
          todoLi.classList.add("completed");
        }
        completeBtn.innerHTML = "Complete";
        deleteBtn = $.createElement("button");
        deleteBtn.classList.add("btn", "btn-danger");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener("click", deleteHandler);
        completeBtn.addEventListener("click", completeHandler);
        todoliId = element.id;
        todoLi.setAttribute("id", todoliId);
        todoLi.appendChild(todoLabel);
        todoLi.appendChild(completeBtn);
        todoLi.appendChild(deleteBtn);
        ulElem.appendChild(todoLi);
      });
    }
  }
}

inputElem.addEventListener("keydown", getTodoValue);
addButtonElem.addEventListener("click", addTodoHandler);
clearButtonElem.addEventListener("click", clearTodoHandler);
window.addEventListener("load", loadTodoHandler);

// localStorage.clear()
