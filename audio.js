function audioPlayer() {
  const audio = document.getElementById("audio");
  let audioDuration = audio.duration;

  const play = document.getElementById("playAudio");
  const backwardSeconds = document.getElementById("backwardSecondsAudio");
  const forwardSeconds = document.getElementById("forwardSecondsAudio");
  const control = document.getElementById("controlAudio");
  const controlVolume = document.getElementById("controlAudioVolume");

  const xd = document.querySelector("div.test");
  const song = document.querySelectorAll(".content-info-song");

  const playSong = async () => {
    const resp = await fetch("./API.json");
    const id_song = await resp.json();

    song.forEach((element) => {
      element.addEventListener("click", () => {
        console.log(element.id);

        id_song.forEach((ele) => {
          if (element.id == ele.id) {
            audio.src = ele.song;
            audio.play();
          }

        //   console.log(ele.id);
        //   console.log(ele.song);
        });
      });
    });
  };

  playSong();

  // console.log(audio.duration)

  let statePlay = true;

  play.addEventListener("click", () => {
    if (statePlay) {
      statePlay = false;
      play.classList = "btn-pause";
    } else {
      statePlay = true;
      play.classList = "btn-play";
    }

    //   console.log(statePlay)
  });

  audio.addEventListener("loadeddata", () => {
    audioDuration = audio.duration;
  });

  audio.addEventListener("timeupdate", (event) => {
    const percentage = (event.target.currentTime / audioDuration) * 100;
    control.value = percentage;

    // console.log(control.value)

    xd.setAttribute("style", `width: ${control.value}%;`);
  });

  play.onclick = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  backwardSeconds.onclick = () => {
    audio.currentTime = audio.currentTime - 10;
  };
  forwardSeconds.onclick = () => {
    audio.currentTime = audio.currentTime + 10;
  };

  control.oninput = (event) => {
    audio.currentTime = (audioDuration / 100) * event.target.value;

    xd.setAttribute("style", `width: ${event.target.value}%;`);

    // console.log(xd)

    // console.log(event.target.value)

    // console.log((audioDuration*event.target.value)/100 )

    // console.log(audioDuration/100)
  };

  controlVolume.oninput = (event) => {
    audio.volume = event.target.value / 100;
    // audio.volume = .2
    console.log(event.target.value);
  };
}

export default audioPlayer;
