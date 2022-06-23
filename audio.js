function audioPlayer(){
    const audio = document.getElementById("audio")
    let audioDuration = audio.duration;

    const play = document.getElementById("playAudio")
    const backwardSeconds = document.getElementById("backwardSecondsAudio")
    const forwardSeconds = document.getElementById("forwardSecondsAudio")
    const control = document.getElementById("controlAudio")
    const controlVolume = document.getElementById("controlAudioVolume")

    // console.log(audio.duration)


    audio.addEventListener("loadeddata",()=>{
        audioDuration = audio.duration
    })

    audio.addEventListener("timeupdate",(event)=>{
        const percentage = (event.target.currentTime/audioDuration)*100
        control.value = percentage
    })

    play.onclick = ()=>{
        if(audio.paused){
            audio.play()
        }else{
            audio.pause()
        }
    }

    backwardSeconds.onclick = ()=>{
        audio.currentTime = audio.currentTime-10
    }
    forwardSeconds.onclick = ()=>{
        audio.currentTime = audio.currentTime+10
    }

    control.oninput = (event)=>{
        audio.currentTime = (audioDuration/100)*event.target.value
   
        console.log(audio.currentTime)
    
        console.log(audioDuration/100)

    }

    controlVolume.oninput=(event)=>{
        audio.volume = event.target.value/100
        audio.volume = .2 // por mientras xd
        console.log(event.target.value)
    }

    console.log(audio.currentTime)




    /*******************/

    const progressBar = document.getElementById("progress__bar");
const progressFill = document.getElementById("progress__fill");

const progress = document.getElementById("progress");
// Listen for click on entire progress bar div (to allow skipping ahead)
progress.addEventListener("click", function (event) {
  // Get X coordinate of click in div
  var rect = this.getBoundingClientRect();
  // Convert click position to percentage value
  var percentage = (event.clientX - rect.left) / this.offsetWidth;
  // Seek to the percentage converted to seconds
  soundA.currentTime = percentage * soundA.duration;
  soundB.currentTime = percentage * soundB.duration;
});

//Frame animations for progress bar fill - converts to CSS percentage
function stepA() {
  progressFill.style.width =
    ((soundA.currentTime / soundA.duration) * 100 || 0) + "%";
  requestAnimationFrame(stepA);
}
function stepB() {
  progressFill.style.width =
    ((soundB.currentTime / soundB.duration) * 100 || 0) + "%";
  requestAnimationFrame(stepB);
}


}


export default audioPlayer;