let VideoPlayer = document.querySelector('.img-container');
let playBtn = document.getElementById('play-btn');
let pauseBtn = document.getElementById('pause-btn');
let replayBtn = document.getElementById('replay-btn');
let audioDetailContainer = document.querySelector('.audioDetail-container');
let progressBar = document.querySelector('.green-bar');

let imgList = {
    'audio1' : '../assets/pic1.jpg',
    'audio2' : '../assets/med-catergory1.jpg',
    'audio3' : '../assets/med-category-pic2.jpg',
    'audio4' : '../assets/med-category1-pic3.jpg',
};

let audioList = {
    'audio1' : '../Audio/Namaste.mp3',
    'audio2' : '../Audio/breatheinme.mp3',
    'audio3' : '../Audio/Serenity.mp3',
    'audio4' : '../Audio/Reflection.mp3',
};
let audioSrc = localStorage.getItem('audio-id');
let audio = new Audio(audioList[audioSrc]);

const determineAudio = () => {
    let imgSrc = localStorage.getItem('audio-id');
    // console.log(imgSrc);
    VideoPlayer.style.backgroundImage = 'url(/' + imgList[imgSrc] + ')';
    // console.log(imgList[imgSrc]);
};
let audioPlaying = false;

let Minutes = localStorage.getItem('totalMin');
let Hours = localStorage.getItem('totalHrs');
let Seconds = localStorage.getItem('totalSec');

// console.log(Hours);
// console.log(Minutes);
// console.log(Seconds);
let pauseAudio = false;
let currentTime = 0;

let TotalTime = Number((Number(Minutes)*60) + (Number(Hours) * 60 * 60) + Number(Seconds)) * 1000;
var intervalId = null;
var audioDuration = null;

let playSound = () =>{
    // console.log(TotalTime);
    audio.currentTime = 0;
    audio.play();
    audioPlaying = true;
    pauseAudio = false;
    trackProgress(TotalTime/1000);
    audioDuration = setInterval(function(){
          audio.pause();
          //currentTime = 0;
    }, TotalTime);
      
};

var intervalId = null;

let trackProgress = (Time) => {
    
    intervalId =  setInterval(function(){
            if(currentTime < Time && pauseAudio == false){
                currentTime = (currentTime + 1);
                progressBar.style.width = ((currentTime / Time) * 100) + '%';
                // console.log(currentTime);
            }
            else{
                return;
            }    
        }, 1000);    
}

pauseBtn.addEventListener('click' , () =>{
    audio.pause(); 
    pauseAudio = true;
    clearInterval(intervalId);
});

replayBtn.addEventListener('click' , () => {
    currentTime = 0;
    progressBar.style.width = 0 + '%';
    clearInterval(audioDuration);
    playSound();
});



document.addEventListener('DOMContentLoaded' , function() {
    determineAudio();
});
