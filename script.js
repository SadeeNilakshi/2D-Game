function KeyCheck(event){
    var KeyCode = event.which;

    if (KeyCode == 13) {
        // Enter
        if(boyWorkerNumber == 0){

            boyWorkerNumber = setInterval(boyRunAnimation,100);
        }

        if(backgroundWorkerNumber == 0){
             backgroundWorkerNumber =  setInterval(backgroundmove,100);
        }
        
    }

    if (KeyCode == 32) {
        // Space

        if(boyJumpWorkerNumber == 0){
            clearInterval(boyWorkerNumber);
            boyJumpWorkerNumber = setInterval(boyJumpAnimation,100);
        }

       
    }


}

var boyImageNumber = 1;
var boyWorkerNumber = 0;

function boyRunAnimation(){

    boyImageNumber = boyImageNumber + 1;

    if(boyImageNumber == 9){
        boyImageNumber = 1;
    }

    document.getElementById("boy").src = "Resources/Run ("+boyImageNumber+").png";
}

var boyJumpImageNumber = 1;
var boyJumpWorkerNumber = 0;

function boyJumpAnimation(){

    boyJumpImageNumber = boyJumpImageNumber + 1;

    if(boyJumpImageNumber == 13){
        clearInterval(boyJumpWorkerNumber);
        boyJumpWorkerNumber = 0;
        boyJumpImageNumber = 1;

        boyWorkerNumber =  setInterval(boyRunAnimation,100);

        if(backgroundWorkerNumber == 0){
            backgroundWorkerNumber =  setInterval(backgroundmove,100);
       }
    }

    document.getElementById("boy").src = "Resources/Jump ("+boyJumpImageNumber+").png";

}

var backgroundMarginLeft = 0;
var backgroundWorkerNumber = 0;

function backgroundmove(){

    backgroundMarginLeft = backgroundMarginLeft - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundMarginLeft + "px";

}

var boxMarginLeft = 500;

function createBox(){
    for(var i = 0; i < 10; i++){
        var box = document.createElement("div");
        box.className = "box";
        box.id = "box" + i;
        box.style.marginLeft = boxMarginLeft + "px";
        boxMarginLeft = boxMarginLeft + 500;
        document.getElementById("background").appendChild(box);
    }
}

function moveBox(){
    for(var i = 0; i < 10; i++){
       var box = document.getElementById("box" + i);
       var currentMarginLeft = getComputedStyle(box).marginLeft;
       var newMarginLeft = parseInt(currentMarginLeft) - 20;
       box.style.marginLeft = newMarginLeft + "px";
    }
}





   