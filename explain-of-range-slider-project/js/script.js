let rangeElem=document.getElementById('range')
let containerElem=document.getElementsByClassName('container')


function rangeHandler(e){
    console.log(e.target.value)
    containerElem[0].style.filter=`brightness(${e.target.value}%)`
    
    console.log(containerElem[0])
}

rangeElem.addEventListener('click',rangeHandler)