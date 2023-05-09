var piece=["milieu","soubrette","chiaroscurist","autochthonous","pareidolia","anachronism","limerence","verisimilitude","eudaemonic","fuchsia"]
var index=Math.floor(Math.random()*piece.length);
console.log(index);
var word=piece[index];
var butt=document.getElementById("btn");
var inp=document.getElementById("input");
var tag=document.getElementById("tag");
var tag1=document.getElementById("tag1")
var tag2=document.getElementById("tag2")
var inpValue=inp.value.trim();
var arr=[];
var barr=[]
var sec=30;
var tries=0;
var buttonClicked=false;
var pieceholder;
var placeHolder;
var take=localStorage.getItem("win");
var take2=localStorage.getItem("loss");
var pageWins=document.getElementById("win");
var pageLosses=document.getElementById("loss");
var win=0;
var loss=0;

for(var i=0;i<word.length;i++){
    arr.push("_");
}

function store(){
    placeHolder=arr.join(" ");
    pieceholder=placeHolder.split(" ").join('');
    tag.textContent=placeHolder;
}
store();


for(var i=0;i<word.length;i++){
    barr.push(word[i]);
}

console.log(barr)

function destroy(){
    inp.remove();
    tag.remove();
    if(sec===-1){
        alert("you ran out of time, you lose");
    }else if(tries>15&&tries<=25){
        alert(tries+" tries, haha you barely escaped by the skin of your arse");
    }else if(tries> 25){
        alert(tries+" tries, you're awful");
    }else if(tries<15){
        alert(tries+" tries,not too shabby ")
    }
}

function timer(){
    buttonClicked=true;
    let tyme=setInterval(function(){
        tag1.textContent=sec+" seconds remaining";
        sec--;
        if(sec===-1||word===pieceholder){
            storeStuff()
            clearInterval(tyme);
            destroy();
        }
    },1000)
}


butt.addEventListener("click",timer);


inp.addEventListener("keydown",function(event){
    if(buttonClicked===true){
        event.preventDefault();
        tries++;
        tag2.textContent="you have entered "+tries+" inputs";
        var ki=event.key.toLowerCase();
        var thisARR=[];
        for(i=0;i<barr.length;i++){
            if(barr[i]===ki){
                thisARR.push(i);
            }
        }
        console.log(thisARR)
        for(i=0;i<thisARR.length;i++){
            arr.splice(thisARR[i],1,word[thisARR[i]]);
        }
        store();
        inp.value="";
    }
    
})

function storeStuff(){
    if(sec!==-1){
        win=take;
        take++;
        localStorage.setItem("win",win);
        pageWins.textContent="wins: "+take;
    }else if(sec===-1){
        loss=take2;
        localStorage.setItem("loss",loss);
        take2++;
        pageLosses.textContent="losses: "+take2;
    }

}

pageLosses.textContent="losses: "+take2;
pageWins.textContent="wins: "+take;



