(()=>{
    const stepElems = document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let currElem = graphicElems[0]; 
    let ioIndex; 
    let io = new IntersectionObserver((entry,observer)=>{
        // console.log(entry[0].target.dataset.index);
        ioIndex = entry[0].target.dataset.index;
    });

    
    for (let i = 0; i < stepElems.length; i++) {
        io.observe(stepElems[i]);
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }

    

    window.addEventListener('scroll', ()=>{
        let step;
        let boundingRect; 
         
        for(let i = ioIndex -1 ; i < ioIndex+2; i++){
            step = stepElems[i];
            if(!step) continue;
            boundingRect = step.getBoundingClientRect();

            if(boundingRect.top > window.innerHeight*0.1 &&
               boundingRect.top < window.innerHeight*0.8){
                   unactivate();
                   currElem = graphicElems[step.dataset.index];  
                   activate(); 
            }
        } 
    });


    function activate(){
        currElem.classList.add('visible');
    }

    function unactivate(){
        currElem.classList.remove('visible'); 
    }
    activate();
 

})();