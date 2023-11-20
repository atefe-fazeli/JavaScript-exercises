let users = [
  { id: 0, name: "edi", familly: "ahadi" },
  { id: 1, name: "nono", familly: "ahadi" },
  { id: 2, name: "ficho", familly: "ahadi" },
  { id: 3, name: "kocho", familly: "ahadi" },
  { id: 4, name: "pepium", familly: "ahadi" },
  { id: 5, name: "pepi", familly: "ahadi" },
  { id: 6, name: "pofak", familly: "ahadi" },
  { id: 7, name: "gomonagi", familly: "ahadi" },
  { id: 8, name: "kechapat", familly: "ahadi" },
  { id: 9, name: "rasool", familly: "ahadi" },
  { id: 10, name: "edi", familly: "ahadi" },
  { id: 11, name: "edi", familly: "ahadi" },
  { id: 12, name: "edi", familly: "ahadi" },
  { id: 14, name: "edi", familly: "ahadi" },
  { id: 15, name: "edi", familly: "ahadi" },
  { id: 16, name: "edi", familly: "ahadi" },
  { id: 17, name: "edi", familly: "ahadi" },
  { id: 18, name: "edi", familly: "ahadi" },
  { id: 19, name: "edi", familly: "ahadi" },
  { id: 20, name: "edi", familly: "ahadi" },
  { id: 21, name: "edi", familly: "ahadi" },
  { id: 22, name: "edi", familly: "ahadi" },
];
let $ = document;
let paginationElems = $.getElementById("pagination");
let listElem = $.getElementById("list");
let rows = 5;
let paginationItems = Math.ceil(users.length / rows);

function listGenerator(targetSection) {
  listElem.innerHTML = "";
  targetSection.forEach((element) => {
    let item = $.createElement("div");
    item.classList.add("item");
    item.innerHTML = element.name + " " + element.familly;
    listElem.appendChild(item);
  });
}

function slicer(id) {
  let startPoint = id * rows;
  let endPoint = id * rows + rows;
  let targetSection = users.slice(startPoint, endPoint);
  listGenerator(targetSection);
}

function paginationGenerator() {
  let i = 0;
  while (i < paginationItems) {
    let paginationBtn = $.createElement("button");
    paginationBtn.setAttribute("id", i);
    paginationBtn.innerHTML = i + 1;
    paginationBtn.addEventListener("click", () => {
      let unActive = $.querySelector("button.active");
      if (unActive) {
        unActive.classList.remove("active");
        console.log(unActive);
      }
      paginationBtn.classList.add("active");
      slicer(paginationBtn.id);
    });
    paginationElems.appendChild(paginationBtn);
    i++;
  }
}
window.addEventListener("load", paginationGenerator);
window.addEventListener("load", slicer(0));
