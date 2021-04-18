const frontbook=document.querySelector('.frontend');
const content_on=document.querySelector('.content-on');
const content_off=document.querySelector('.content-off');
const skills=document.querySelector('.skills');



frontbook.addEventListener('click',click)
function click(){
    
    
    if(content_on.style.display==="none"){
        setTimeout(off,1400)
        function off(){
            content_on.style.display="block"
            content_off.style.display="none"
        }
        frontbook.style.transform=` translateX(50%) rotateY(0deg) `;
    }else{
        setTimeout(on,1400)
        function on(){
            content_on.style.display="none"
            content_off.style.display="block"
        }
        
        frontbook.style.transform=` translateX(-50%) rotateY(-180deg) `;
        frontbook.style.boxShadow = "10px 20px 30px black";
      
       
    }
   skills.style.transform=`translateX(50%)`
   
}