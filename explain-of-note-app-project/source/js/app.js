let $ = document;

let inputElem = $.getElementById("input-field");
let noteParent = $.getElementById("listed");

let noteElem = $.createElement("p");
let noteContainer = $.createElement("div");

function inputChangeHandler(event) {
  if (event.keyCode === 13) {
    console.log(inputElem.value);
    noteElem.innerHTML = inputElem.value;
    noteElem.classList.add("card-text", "p-3");
    noteContainer.classList.add("card", "rounded", "shadow-sm");
    noteParent.appendChild(noteContainer);
    noteContainer.appendChild(noteElem);
  }
}

inputElem.addEventListener("keyup", inputChangeHandler);
