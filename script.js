let appendMusicNotesStyles={
    height:'0',
    width:'0',
    visibility:'hidden'
}
let audioProperty={
    visibility:'hidden',
}
let audioPlay = document.getElementsByTagName('audio');
let appendMusicNotes = document.getElementById('appendMusicNotes')
appendMusicNotes.style=appendMusicNotesStyles;
let subVolume = document.getElementById('subVolume')
let addVolume = document.getElementById('addVolume')
let displayVolume = document.getElementById('volText')
let volumeRange = document.getElementById('volRange')
let volumeCase = 50;
let tunesArray = ['a','b','d','e','f','g','h','j','k','l','o','p','s','t','u','w','y'];
let keyStrokes = document.getElementById('keyStrokes')
let christmasChoralLeft= new Array()
let christmasChoralRight = new Array()

displayVolume.value = `${volumeCase} %`
function volumeIncrease(){ 
    if(volumeCase<120) {
        volumeCase++
         displayVolume.value = `${volumeCase} %`
        volumeRange.value=volumeCase
    }
    else if(volumeCase==120){
       return volumeCase
    }
    else {
        return null
    }
}
function volumeDecrease(){
    if(volumeCase>1){
        volumeCase--
        displayVolume.value = `${volumeCase}%`
        volumeRange.value=volumeCase
    }
    else if (volumeCase==0){
        return volumeCase
    }
    else {
        return null
    }
}
function volRange(){
    volumeCase = volumeRange.value
    displayVolume.value = `${volumeCase} %`
}
function runMusic(entry){
    let tone = document.createElement('audio');
    tone.src =`/tunes/${entry}.wav`
    tone.autoplay=true;
    if(volumeCase ==0){
        tone.volume = 0.0
    }
    else{
     tone.volume = `${volumeCase/120}`   
    }
    
    tone.style=audioProperty;
    appendMusicNotes.appendChild(tone);
}
document.addEventListener('keydown',(b)=>{
    if(b.keyCode=='38'){
        volumeIncrease()
    }
    else if(b.keyCode=='40'){
        volumeDecrease()
    }
    else {
        return null
    }
})
document.addEventListener('keypress',(e)=>{
    for(i in tunesArray){
        if(e.key.toLowerCase()==tunesArray[i]){
            runMusic(tunesArray[i]);
            ()=>{
            let tonner = document.getElementById(`${tunesArray[i]}`)
            let childP=tonner.getElementsByTagName('p');
            childP.style.visibility='visible';
            }
        }
    }
})
volumeRange.addEventListener('change',volRange);
subVolume.addEventListener('click',volumeDecrease)
addVolume.addEventListener('click',volumeIncrease)

// christmasChoralLeft =['C', 'G', 'C', 'G', 'F', 'C', 'F', 'G', 'F', 'C', 'F', 'G', 'C', 'G', 'C', 'C', 'G', 'C', 'F', 'C', 'F', 'G', 'F', 'C', 'F', 'G', 'C', 'G', 'C', 'G', 'C', 'G'];
// christmasChoralRight= [
//     'G', 'A', 'G', 'E',
//     'G', 'A', 'G', 'E',
//     'C', 'C', 'E', 'D', 'C',
//     'C', 'C', 'E', 'D', 'C',
//     'G', 'G', 'C', 'C', 'E', 'D', 'C',
//     'D', 'D', 'E', 'E', 'D', 'C',
//     'G', 'G', 'C', 'C', 'E', 'D', 'C',
//     'D', 'D', 'E', 'E', 'D', 'C',
//     'G', 'G', 'C', 'C', 'E', 'D', 'C',
//     'G', 'G', 'C', 'C', 'E', 'D', 'C'
//   ];
  
// function runHarmony()=>{
//     for(i of christmasChoralLeft){
//         runMusic(christmasChoralLeft[i])
//     }
//     for(i of christmasChoralRight){
//         runMusic(christmasChoralRight[i])
//     }
    
// }

