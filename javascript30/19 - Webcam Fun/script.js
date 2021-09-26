const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const $rmin  = document.querySelector('.rmin');
const $rmax  = document.querySelector('.rmax');

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
    // https://devjhs.tistory.com/577
    // drawImage(image ,canvas_x, canvas_y,canvas_width,canvas_height)
    ctx.drawImage(video, 0, 0, width, height);
    // take the pixels out 
    let pixels = ctx.getImageData(0, 0, width, height); 
    // mess with them 
    // pixels = redEffect(pixels); 
    // pixels = rgbSplit(pixels);
    pixels = greenScreen(pixels);
    ctx.globalAlpha = 0.1;
    //put them back 
    ctx.putImageData(pixels, 0 , 0 );
    
    //console.log(pixels);
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
// RGB 값을 R 강화, G 약화, B 약화 시키는 것이고,
function redEffect(pixels){   
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i+0] = pixels.data[i+0]+ 100 ; // red
    pixels.data[i+1] = pixels.data[i+1]- 50 ; // green
    pixels.data[i+2] = pixels.data[i+2]* 0.5 ; // blue     
  }
  return pixels;
}
// 픽셀의 R, G, B 값을 흩뿌려주는 효과를 준다.
function rgbSplit(pixels ){
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue     
  }
  return pixels;
}

function greenScreen(pixels){
  const levels = [];
  // R, G, B 슬라이드의 값을 받아서 각각의 min, max 값을 설정한 다음
  document.querySelectorAll('.rgb input').forEach((input)=>{
      levels[input.name] = input.value; 
  }); 

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    // 각각의 픽셀들이 이 범위안에 들어오면 픽셀의 Alpha 값을 0으로 만들어버린다
    // 하얗게 만들어버리는 것이다.
    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo(); 
 
// https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement/canplay_event
video.addEventListener('canplay', paintToCanvas);