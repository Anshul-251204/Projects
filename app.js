
let timer = 61;
let sc = 0;

let hrn = 0;

function scorePP(){

    sc+=10;

    document.querySelector("#score").textContent = sc;
}
function makeBubble(){

    var culter = "";

    for(var i = 1; i <90+45 ; i++) {
        var rn =  Math.floor(Math.random() * 10);
         culter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".bubble-section").innerHTML = culter;
}

makeBubble();
function setTimer(){

    var stop = setInterval( function(){

        if(timer > 0){
            timer--;
            
            document.querySelector("#time").textContent = timer;
        }else{
            clearInterval(stop);
            document.querySelector(".bubble-section").innerHTML = "";
        }

    },1000)
}

function changehit(){

     hrn = Math.floor(Math.random()*10);
   
    var hit = document.querySelector("#hit");
    hit.textContent = hrn;

}

document.querySelector(".bubble-section").addEventListener("click" , function(dets){
    var clickedNum = Number(dets.target.textContent);

    if(clickedNum === hrn){
        scorePP();
        changehit();
        makeBubble();

    }
})


// makeBubble();
setTimer();
changehit();




