let rangeElem=document.getElementById('range')

function rangeHandler(e){
    console.log(e.target.value)
}

rangeElem.addEventListener('click',rangeHandler)