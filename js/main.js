(function(){

  //console.log("SEAF fired");
  var video = document.querySelector("#headerVid");
  var playButton = document.querySelector("#playPause");
  var seekBar = document.querySelector("#seek-bar");
  var rewindVideo = document.querySelector("#rewind");
  var muteButton = document.querySelector("#muteVideo");
  var volumeBar = document.querySelector("#volume-bar");
  var fullVideo = document.querySelector("#full-screen");

  function playVideo(){
    console.log("from playVideo");
    var svg = this.firstElementChild;
    if (video.paused) {
    svg.dataset.icon = "pause"
    video.play();
  } else {
    svg.dataset.icon = "play"
    video.pause();
  }
  }

  function progressBar(){
    //console.log("from progressBar");
    var time = video.duration * (seekBar.value / 100);
    video.currentTime = time;
  }

  function rewindVid(){
    //console.log("from rewind");
    video.currentTime -= 5;
  }

  function progPlay(){
    console.log("from progPlay");
    var value = (100 / video.duration) * video.currentTime;
    seekBar.value = value;
  }

  function muteVideo(){
    console.log("from muteVideo");
    var volumeChange = this.firstElementChild;
    if (video.muted) {
    video.muted = true;
    volumeChange.dataset.icon = "volume-up";
    } else {
    video.muted = false;
    volumeChange.dataset.icon = "volume-off";

    }
  }

  function fullScreen(){ //This will give default video controls
    console.log("from fullScreen");
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  }

  playButton.addEventListener("click", playVideo); //VIDEO
  seekBar.addEventListener("change", progressBar, false); //SEEK BAR
  muteButton.addEventListener("click", muteVideo, false); //MUTE
  rewindVideo.addEventListener("click", rewindVid, false); //REWIND VIDEO X
  fullVideo.addEventListener("click", fullScreen); //FULLSCREEN
  video.addEventListener("timeupdate", progPlay, false); //TIME UPDATE

})();
