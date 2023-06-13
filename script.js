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

var pageWins=document.getElementById("win");
var pageLosses=document.getElementById("loss");
pageWins
var take=[];
var take2=[];

for(var i=0;i<word.length;i++){
    arr.push("_");
}

function store(){
    placeHolder=arr.join(" ");
    pieceholder=placeHolder.split(" ").join('');
    tag.textContent=placeHolder;
    console.log(word,pieceholder)
}
store();

function display(){
    pageLosses.textContent= "losses: " + JSON.parse(localStorage.getItem("take2"));
    pageWins.textContent="wins: " + JSON.parse(localStorage.getItem("take"));
}

display();

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
        alert(tries+" tries, haha you barely escaped by the skin of your teeth");
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
    // if(sec!==-1) {
    //     win++;
    //     var take=JSON.parse(localStorage.getItem("take"))||[];
    //     take.push(win);
    //     localStorage.setItem("win", JSON.stringify(take));
    // }else if(sec===-1){
    //     loss++;
    //     var take2=JSON.parse(localStorage.getItem("take2"))||[];
    //     take2.push
    //     localStorage.setItem("loss",JSON.stringify(take2));
    // }
    var win;
    var loss;
    console.log(win);
    console.log(take);

    if(sec!==-1) {
        if(Object.keys(take).length === 0){
            win = JSON.parse(localStorage.getItem("take"));
            win++;
            take.push(win);
            localStorage.setItem("take", JSON.stringify(take));
        }

    } else if(sec===-1){
        if(Object.keys(take2).length===0){
            loss=JSON.parse(localStorage.getItem("take2"));
            loss++;
            take2.push(loss);
            localStorage.setItem("take2",JSON.stringify(take2));
        }

    }

    display()

}





