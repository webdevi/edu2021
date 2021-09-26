const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  // https://developer.mozilla.org/ko/docs/Web/API/MediaDevices/getUserMedia
  // promise를 직접 사용하는 경우 
  navigator.mediaDevices.getUserMedia({audio: false ,video:true})
    .then(localMediaStream => {
      /*스트림 사용 */ 
    //  console.log(localMediaStream);    
      video.srcObject = localMediaStream;
      // 이제 사용안함 video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      /* 오류처리 */ 
      console.error(`OH NO!!!`, err);
    });
}

function paintToCanvas(){
  const width = video.videoWidth; 
  const height = video.videoHeight;  
  canvas.width = width; 
  canvas.height = height; 
  
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    const pixels = ctx.getImageData(0, 0, width, height); 
    console.log(pixels);
    debugger;
  }, 16);
}

function takePhoto(){
  // played the sound 
  snap.currentTime = 0 ; 
  snap.play(); 

  // take the data out of the canvas 
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a'); 
  link.href = data;
  link.setAttribute('download', 'pretty');
  link.innerHTML = `<img src="${data}" alt="pretty" />`;  
  //link.textContent = 'Download Image'; 
  // insertBefore() 특정 위치에 앞에 노드 삽입
  //부모노드.insertBefore(삽입 할 노드, 기준 점 노드);
  strip.insertBefore(link, strip.firstChild); 
}

getVideo(); 
 
// https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement/canplay_event
video.addEventListener('canplay', paintToCanvas);