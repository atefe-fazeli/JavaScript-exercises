let $=document

let reactElem=$.getElementById('react')
let vueElem=$.getElementById('vue')
let boxElem=$.getElementsByClassName('box')



function dragStartHandler(event){
    console.log("drag start")
    event.dataTransfer.setData('elemId',event.target.id)
    console.log(event)

}
function dragHandler(){
    console.log("drag")
}
function dragEnterHandler(){
    console.log("drag enter")
}
function dragOverHandler(event){
    event.preventDefault()
    console.log("drag over")
}
function dragLeaveHandler(){
    console.log("drag leave")
}
function dragEndHandler(){
    console.log("drag end")
}

function dropHandler(event){
    let dragId=event.dataTransfer.getData('elemId',event.target.id)
    let dragItem=$.getElementById(dragId)
    boxElem[0].appendChild(dragItem)
}

reactElem.addEventListener('dragstart',dragStartHandler)
reactElem.addEventListener('drag',dragHandler)
reactElem.addEventListener('dragenter',dragEnterHandler)
// reactElem.addEventListener('dragover',dragOverHandler)
reactElem.addEventListener('dragleave',dragLeaveHandler)
reactElem.addEventListener('dragend',dragEndHandler)
vueElem.addEventListener('dragstart',dragStartHandler)
vueElem.addEventListener('drag',dragHandler)
vueElem.addEventListener('dragenter',dragEnterHandler)
// vueElem.addEventListener('dragover',dragOverHandler)
vueElem.addEventListener('dragleave',dragLeaveHandler)
vueElem.addEventListener('dragend',dragEndHandler)
boxElem[0].addEventListener('drop',dropHandler)
boxElem[0].addEventListener('dragover',dragOverHandler)






