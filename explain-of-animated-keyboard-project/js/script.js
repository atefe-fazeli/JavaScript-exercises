let liElems = document.querySelectorAll("li");
let leftShift = document.getElementById("left-shift");
let rightShift = document.getElementById("right-shift");
let title = document.getElementsByClassName("title");
let titleValue = "";

function keyHandler(e) {

  if (e.code === "ShiftLeft") {
    leftShift.classList.add("hit");
  } else if (e.code === "ShiftRight") {
    rightShift.classList.add("hit");
  } else {
    for (let i = 0; i < liElems.length; i++) {
      if (liElems[i].id.toLowerCase() == e.key.toLowerCase()) {
        liElems[i].classList.add("hit");
        let result = liElems[i];
        liElems[i].addEventListener("animationend", function () {
          result.classList.remove("hit");
        });

        if (e.key === "Backspace") {
          titleValue = titleValue.slice(0, titleValue.length - 1);
          title[0].innerHTML = `${titleValue}`;
        }else {
          console.log(typeof e.key,typeof titleValue)
          titleValue = titleValue + e.key;
          title[0].innerHTML = `${titleValue}`;
        }

        break;
      }
    }
  }
}
document.addEventListener("keydown", keyHandler);
