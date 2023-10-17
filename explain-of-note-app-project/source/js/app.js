let $ = document;

let inputElem = $.getElementById("input-field");
let noteParent = $.getElementById("listed");
let btnSave = $.getElementById("btn-save");
let btnDelete = $.getElementById("btn-delete");

function add() {
  let noteElem = $.createElement("p");
  let noteContainer = $.createElement("div");
  console.log(inputElem.value);
  noteElem.innerHTML = inputElem.value;
  noteElem.classList.add("card-text", "p-3");
  noteContainer.classList.add("card", "rounded", "shadow-sm");
  noteParent.appendChild(noteContainer);
  noteContainer.appendChild(noteElem);
  inputElem.value = "";
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

inputElem.addEventListener("keyup", inputChangeHandler);
btnDelete.addEventListener("click", deleteHandler);
btnSave.addEventListener("click", saveHandler);
