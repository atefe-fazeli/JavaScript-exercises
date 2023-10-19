let $ = document;
let iconElems = $.getElementsByTagName("i");
let audioElems = $.getElementsByTagName("audio");

let isPlaying = false;
let currentMusic

// function pauseHandler(currentMusic){
// currentMusic.pause()
// isPlaying=false
// }

// function playHandler(currentMusic){
//     currentMusic.play()
//     isPlaying=true
// }

for (let i = 0; i < iconElems.length; i++) {
  iconElems[i].addEventListener("click", function clickHandler(event){
    for(let j=0;j<audioElems.length;j++){
        console.log(audioElems[j].data-name)
        if(audioElems[j].dataset.name===event.target.dataset.name){
            audioElems[j].currentTime=0
            audioElems[j].play()
            
            // currentMusic=audioElems[j]
        }else{
            audioElems[j].pause()

        }
    }
    
    // if(isPlaying){
    //     pauseHandler(currentMusic)
    // }else{
    //     playHandler(currentMusic)
    // }
})
}



