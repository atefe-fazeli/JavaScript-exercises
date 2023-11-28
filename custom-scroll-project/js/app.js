let body=document.body
let progressbarElem=document.querySelector('.progressbar')
bodyHeight=body.clientHeight
let scrollHeight=0
let progressPercent=0

progressbarElem.style.width='0px'


window.addEventListener('scroll',function (){
scrollHeight=window.scrollY
    progressPercent=(scrollHeight*100)/(bodyHeight-scrollHeight)
    progressbarElem.style.width=`${(progressPercent/100)*window.innerWidth}px`
})

window.addEventListener('load',function (){


    console.log('load')
})
