let $=document

let navElem=$.getElementById('mainNav')
let liElems=$.getElementsByTagName('li')
let imgElem=$.querySelector('img')


function scrollHandler(event){
    console.log($.documentElement.scrollTop)
    if($.documentElement.scrollTop>0){
        navElem.classList.add('bg-black')
        imgElem.style.height='64px'
        for(let i=0;i<liElems.length;i++){
           liElems[i].classList.add('txt-white') 
        };
    }else{
        navElem.classList.remove('bg-black')
        imgElem.style.height='84px'
        for(let i=0;i<liElems.length;i++){
            liElems[i].classList.remove('txt-white') 
         };
    }
}



$.addEventListener('scroll',scrollHandler)