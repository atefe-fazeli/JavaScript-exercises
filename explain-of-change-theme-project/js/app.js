const switchElement = document.querySelector('.switch')
const body=document.body
let themeFlag=false
let theme

switchElement.addEventListener('click', function () {
themeFlag=!themeFlag
console.log(themeFlag)
if(themeFlag){
  theme=localStorage.setItem('theme','dark')
 }else{
   theme=localStorage.setItem('theme','light')
 }
 theme=localStorage.getItem('theme')
 if(theme==='dark'){
  body.setAttribute('class','dark')
 }else{
  body.removeAttribute('class')
 }
})

window.addEventListener('load',function (){
  theme=localStorage.getItem('theme')
  if(theme==='dark'){
   body.setAttribute('class','dark')
  }else{
   body.removeAttribute('class')
  }
})

