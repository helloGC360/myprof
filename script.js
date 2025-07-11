const manu=document.getElementById('manu');
const nav=document.getElementsByClassName('nav');
const ch=document.getElementsByClassName('ch');
var n=ch.length;
let k=1;
  function an(){
    if(k==1){
      manu.style=`width:200px;height:${n*35}px;transition:0.5s`;
      nav[0].style="background:green;transition:0.5s";
      for(let i=0;i<n;i++){
        ch[i].style="font-size:15px;transition:0.3s"
      }
      
      k=0;
    }else{
      manu.style='height:00px;width:10px;top:4vh;right:10vw;transition:0.5s';
      nav[0].style="background:black;transition:0.5s";
      for(let i=0;i<n;i++){
        ch[i].style="font-size:0px;transition:0.3s"
      }
      k=1;
    }
    }
    
    
    
    const butter=document.getElementsByClassName('bt');
    for(let i=0;i<butter.length;i++ ){
     butter[i].addEventListener("mouseenter",randpos);
     
    }
    
    let ty=0,x,y;
    let time;
    function randpos(){
    for(let i=0;i<butter.length;i++ ){
      
       x = Math.floor((Math.random()*1000)%(window.innerWidth));
       y = Math.floor((Math.random()*1000) %( window.innerHeight));
      
      time=(ty-y)/100;
      if(time<0){time=(-1)*time}
      if(time<=3){time=3}
     
     butter[i].style=`top:${y}px;left:${x}px;transition:${time}s`;
      console.log(time,x,y);
      ty=y;
    }
    }
    
    randpos();