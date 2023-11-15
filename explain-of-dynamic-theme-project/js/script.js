let btn1=document.getElementsByClassName('btn1')
let btn2=document.getElementsByClassName('btn2')
let btn3=document.getElementsByClassName('btn3')
let btn4=document.getElementsByClassName('btn4')
let btn5=document.getElementsByClassName('btn5')


function changeTheme(e){
console.log(typeof e.target.dataset.color)
document.documentElement.style.setProperty('--theme-color',e.target.dataset.color)
}


btn1[0].addEventListener('click',changeTheme)
btn2[0].addEventListener('click',changeTheme)
btn3[0].addEventListener('click',changeTheme)
btn4[0].addEventListener('click',changeTheme)
btn5[0].addEventListener('click',changeTheme)
