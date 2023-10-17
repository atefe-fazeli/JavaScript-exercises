let $ = document;

let inputElem = $.getElementById("input-field");
let noteParent = $.getElementById("listed");
let btnSave = $.getElementById("btn-save");
let btnDelete = $.getElementById("btn-delete");
let colorBox=$.getElementsByClassName('color-box')

function add() {
  let noteElem = $.createElement("p");
  let noteContainer = $.createElement("div");
  console.log(inputElem.value);
  noteElem.innerHTML = inputElem.value;
  noteElem.classList.add("card-text", "p-3");
  noteContainer.classList.add("card", "rounded", "shadow-sm");
  noteContainer.style.backgroundColor=inputElem.style.backgroundColor
  noteParent.appendChild(noteContainer);
  noteContainer.appendChild(noteElem);
  inputElem.value = "";
  inputElem.style.backgroundColor='white'
  function deleteNoteHandler() {
    noteContainer.remove();
  }
  noteContainer.addEventListener("click", deleteNoteHandler);
 
}

function inputChangeHandler(event) {
  if (event.keyCode === 13) {
    add();
  }
}

function saveHandler() {
  add();
}

function deleteHandler() {
  inputElem.value = "";
}

function changeColorHandler(event){
    inputElem.style.backgroundColor=event.target.style.backgroundColor

}

inputElem.addEventListener("keyup", inputChangeHandler);
btnDelete.addEventListener("click", deleteHandler);
btnSave.addEventListener("click", saveHandler);
for(let i=0;i<colorBox.length;i++){
colorBox[i].addEventListener('click',changeColorHandler)
}