let submitBtn = document.getElementById("submit");
let titleElem = document.getElementById("title");
let authorElem = document.getElementById("author");
let yearElem = document.getElementById("year");
let formElem = document.getElementsByTagName("form");
let tbodyElem = document.getElementById("book-list");
let bookList = [];
let title = "";
let author = "";
let year = 0;

function clearInputs(){
    titleElem.value=null
    authorElem.value=null
    yearElem.value=null
}

function bookListCreator() {
    tbodyElem.innerHTML=''
  bookList.map((item) => {
    let trElem = document.createElement("tr");
    let th1Elem = document.createElement("th");
    let th2Elem = document.createElement("th");
    let th3Elem = document.createElement("th");
    th1Elem.innerHTML = item.title;
    th2Elem.innerHTML = item.author;
    th3Elem.innerHTML = item.year;
    trElem.appendChild(th1Elem)
    trElem.appendChild(th2Elem)
    trElem.appendChild(th3Elem)
    tbodyElem.appendChild(trElem)
  });
}

function submitHandler(e) {
  e.preventDefault();
  title = titleElem.value;
  author = authorElem.value;
  year = yearElem.value;
  let newItem = { title: title, author: author, year: year };
  bookList.push(newItem);
  console.log(bookList);
  localStorage.setItem("bookList", JSON.stringify(bookList));
  bookListCreator();
  clearInputs()
}

function loadHandler() {
  bookList = JSON.parse(localStorage.getItem("bookList"));
  if (bookList === null) {
    bookList = [];
  } else {
    bookListCreator();
  }
}

window.addEventListener("load", loadHandler);
formElem[0].addEventListener("submit", submitHandler);
