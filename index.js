let startBtn=document.querySelector("#start")

let resetBtn=document.querySelector("#reset")
let reason=document.querySelector("#reason")
let add=document.querySelector("#add")
let list=document.querySelector("#list")


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

add.addEventListener("click",addLocal)
function addLocal(){
    let userReason=reason.value
    let getting=localStorage.getItem("Reason")
    
    if(userReason.trim()!=0){
    if(getting==null){
        arr=[]
    }else{
        arr=JSON.parse(getting)
    }
    arr.push(userReason)
    localStorage.setItem("Reason",JSON.stringify(arr))
    }
    show()
    reason.value=""
}

function show(){
    let showing=''
    getting=localStorage.getItem("Reason")
    arr=JSON.parse(getting)
    arr.forEach(function(item,index){
        showing+=` <tr>
        <th>${index+1}</th>
        <td>${item}<button onClick="edit(${index})">Edit</button><button onClick="delItem(${index})">Delete</button></td>
    </tr>`
    })
list.innerHTML=showing
}

function delItem(index){
arr.splice(index,1)
localStorage.setItem("Reason",JSON.stringify(arr))
show()
}
function edit(index){
    reason.value=arr[index]
    let input=document.createElement("input")
    input.value=index
  console.log(input)
}
