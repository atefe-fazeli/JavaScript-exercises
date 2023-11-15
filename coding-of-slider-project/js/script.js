const images = ["./image/1.jpg", "./image/2.png", "./image/3.jpg"];
let imageElem = document.querySelector("img");
let prevElem=document.getElementsByClassName('prev')
let nextElem=document.getElementsByClassName('next')

let index=0;


function setImageHandler() {
  if (index == images.length) {
    index = 0;
    imageElem.src = `${images[index]}`;
    console.log(index)
    index++
  } else {
    imageElem.src =`${images[index]}`;
    console.log(index)

    index++;
  }

}

function prevImageHandler() {
  if (index==-1) {
    index =images.length-1;
    imageElem.src = `${images[index]}`;
    console.log(index)
    index--
  } else {
    imageElem.src =`${images[index]}`;
    console.log(index)
    index--;
  }

}

setInterval(setImageHandler, 4000);
nextElem[0].addEventListener('click',setImageHandler)
prevElem[0].addEventListener('click',prevImageHandler)