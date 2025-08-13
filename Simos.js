let start=false;
let gameseq=[];
let userseq=[];
let allowClicks=false;
let level=0;
let headi=document.querySelector("h2");
let btn=document.querySelectorAll(".box");
let btns=["pink","blue","blueviolet","brown"];
document.addEventListener("keydown",function(){
    if(start==false){
        console.log("game started");
        start=true;
        levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){btn.classList.remove("flash");},300);
}
function userflash(btn){
    btn.classList.add("userfl");
    setTimeout(function(){btn.classList.remove("userfl");},300);
}
function levelup(){
    allowClicks=false;
    userseq=[];
    level++;
    headi.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*4);
    let randcolor=btns[randidx];
    gameseq.push(randcolor);
    //console.log(gameseq);
    let randbtn=document.querySelector(`#${randcolor}`);
    //console.log(randidx);
    //console.log(randcolor);
  btnflash(randbtn);
}
function checkAns(idx){
    //console.log(`level ${level}`);
    
    if(gameseq[idx]==userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,1000);
            
        }
        
    }
    else{
        headi.innerHTML=`Game over !  your score was <b>${level}<b><br> Press any key to start` ;
        over();
         setTimeout(reset(),2000);
        
    }
   
}
function btnpress(){
   //console.log(this);
    let btn=this;
     userflash(btn);
     let usercolor=btn.getAttribute("id");
     //console.log(usercolor);
     userseq.push(usercolor);
     //console.log(userseq);
     checkAns(userseq.length-1);
     if (!allowClicks){return};
}
let allbtns=document.querySelectorAll(".box");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);}
function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    
    level=0;
}
function over(){
    document.body.style.backgroundColor="red";
    setTimeout(()=>{document.body.style.backgroundColor=""},2000);
}
