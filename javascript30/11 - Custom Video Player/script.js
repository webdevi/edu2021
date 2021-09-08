// Get our elements 
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build out functions
function toggleVideo(){
  const methodnm = video.paused? "play" : "pause"; 
  video[methodnm]();  
}

function toggleIcon(){
  toggle.textContent = video.paused? "▶" : "| |";  
}

// Hook up the event listners
video.addEventListener('click', toggleVideo);
toggle.addEventListener('click', toggleVideo);

video.addEventListener('click', toggleIcon);
toggle.addEventListener('click', toggleIcon);

