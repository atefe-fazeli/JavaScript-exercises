let $ = document;

let addBtn = $.getElementById("add_btn");
let overlayElem = $.getElementById("overlay");
let modalElem = $.getElementById("todo_form");
let closeModalElem = $.getElementsByClassName("close-modal");
let inputElem = $.getElementById("todo_input");
let submitElem = $.getElementById("todo_submit");
let noStatusElem = $.getElementById("no_status");
let statusElems=$.getElementsByClassName('status')
let todoList=[]
// open modal
function openModalHandler() {
  overlayElem.classList.add("active");
  modalElem.classList.add("active");
}
// close modal
function closeModalHandler() {
  overlayElem.classList.remove("active");
  modalElem.classList.remove("active");
  inputElem.value=null
}
// remove or delete a todo
function removeTodoHandler(event) {
  let removeItem = event.target.parentElement;
  console.log(removeItem);
  removeItem.remove();
}
// add todo
function addTodoHandler() {
  console.log(inputElem.value);
  let todo = $.createElement("div");
  todo.setAttribute("draggable", "true");
  todo.setAttribute("class", "todo");
  todo.setAttribute("id",`${todoList.length}`);
todoList.push(todo)
console.log(todoList)
  todo.innerHTML = inputElem.value;
  let span = $.createElement("span");
  span.setAttribute("class", "close");
  span.innerHTML = "&times;";
  span.addEventListener("click", removeTodoHandler);
  noStatusElem.appendChild(todo);
  todo.appendChild(span);
  closeModalHandler();
}

function dragOverHandler(e){
e.preventDefault()
}
function dragStartHandler(e){
console.log("dragstart")
e.dataTransfer.setData('elemId',e.target.id)
}
function dropHandler(e){
console.log("drop")
   let targetId=e.dataTransfer.getData('elemId')
   let targetItem=todoList.find(function (item){
    return item.id===targetId
   }) 
   console.log(targetItem,typeof targetItem)
   let newParent=e.target
   console.log(newParent)
   newParent.appendChild(targetItem)
}
function dragHandler(e){
e.target.remove()
}

addBtn.addEventListener("click", openModalHandler);
closeModalElem[0].addEventListener("click", closeModalHandler);
submitElem.addEventListener("click", addTodoHandler);
for(let i=0;i<statusElems.length;i++){
    statusElems[i].addEventListener('dragover',dragOverHandler)
    statusElems[i].addEventListener('dragstart',dragStartHandler)
    statusElems[i].addEventListener('drop',dropHandler)
    statusElems[i].addEventListener('drag',dragHandler)

}