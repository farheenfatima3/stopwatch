let startBtn=document.querySelector("#start")

let resetBtn=document.querySelector("#reset")


var seconds=00;
var min=00;
var hour=00

var dis_second
var dis_min
var dis_hour
function showTimer(){
seconds++
   
    
    if(seconds/60==1){
        min++
        seconds=0
    }
    
    if(min/60==1){
        hour++;
        min=0
    }

    if(seconds<10){
        dis_second="0"+seconds
    }else{
        dis_second=seconds
    }

    if(min<10){
        dis_min="0"+min
    }else{
        dis_min=min
    }
    if(hour<10){
        dis_hour="0"+hour
    }else{
        dis_hour=hour
    }

    document.getElementById("display").innerHTML=dis_hour+":"+dis_min+":"+dis_second
}
let interval
let bol=true

function stopOrStart(){
if(bol){
   interval= window.setInterval(showTimer,1000)
   startBtn.innerHTML="Stop"
    bol=false
   
}else{
    window.clearInterval(interval)
    startBtn.innerHTML="Start"
  bol=true
}
}
function reset(){
    seconds=0
    min=0;
    hour=0
    document.getElementById("display").innerHTML="00:00:00"
    window.clearInterval(interval)
    startBtn.innerHTML="Start"
    bol=true
}
resetBtn.addEventListener("click",reset)

let val=document.getElementById("reason").value
console.log(val)