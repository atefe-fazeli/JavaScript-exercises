let $=document
let hourElem=$.getElementById('hour')
let minuteElem=$.getElementById('minute')
let secondsElem=$.getElementById('seconds')


function clockHandler(){
    let hour=new Date().getHours()
    let minute=new Date().getMinutes()
    let seconds=new Date().getSeconds()

    console.log(seconds)
    if(hour<10){
        hourElem.innerHTML=`0${hour}`
    }else{
        hourElem.innerHTML=hour
    }

    if(minute<10){
        minuteElem.innerHTML=`0${minute}`
    }else{
        minuteElem.innerHTML=minute
    }
    if(seconds<10){
        secondsElem.innerHTML=`0${seconds}`
    }else{
        secondsElem.innerHTML=seconds
    }
}



setInterval(clockHandler,1000)
window.addEventListener('load',clockHandler)