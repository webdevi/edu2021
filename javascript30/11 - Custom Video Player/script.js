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

function volumnControl(){ 
  video.volumn = parseFloat(this.value);
  console.log(video.volumn);
}

function speedContorl(){
  console.log(`speed : ${this.value}`);  
  video.playbackrate += parseFloat(this.value);
} 
function handlerangeUpdate(){
  video[this.name]  = this.value;
}
function skip(){
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip); 
} 
function handelProgress(){
  const percent = (video.currentTime / video.duration ) * 100; 
  progressBar.style.flexBasis = `${percent}%`; 
} 
function playskip(e){  
  const playpoint = (e.offsetX / progress.offsetWidth) * video.duration ;
  video.currentTime = playpoint;
}
// Hook up the event listners
video.addEventListener('click', toggleVideo);
toggle.addEventListener('click', toggleVideo);

video.addEventListener('play', toggleIcon);
video.addEventListener('timeupdate', handelProgress);
video.addEventListener('pause', toggleIcon);

toggle.addEventListener('click', toggleIcon);

skipButtons.forEach(skipButton=>skipButton.addEventListener('click', skip));
ranges.forEach(range=>range.addEventListener('change', handlerangeUpdate));
/*mousemove 이벤트를 태워야 조금 더 자연스럽게 작동을 함 */
ranges.forEach(range=>range.addEventListener('mousemove', handlerangeUpdate));
progress.addEventListener("click", playskip );
progress.addEventListener("mousemove", playskip );

