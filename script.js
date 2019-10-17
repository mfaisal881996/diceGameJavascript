function playTheGame(){
    var firstPlayer = Math.floor(Math.random() * 6) + 1;
    var sourceImage = "images/dice"+firstPlayer+".png";
    document.getElementsByClassName("dice")[0].setAttribute("src",sourceImage);

    var secondPlayer = Math.floor(Math.random() * 6) + 1;
    var sourceImage = "images/dice"+secondPlayer+".png";
    document.getElementsByClassName("dice")[1].setAttribute("src",sourceImage);

    if(firstPlayer > secondPlayer){
        document.getElementsByClassName("flag")[1].style.visibility = "hidden";
        document.getElementsByClassName("flag")[0].style.visibility = "visible";
    }
    else if(secondPlayer > firstPlayer){
        document.getElementsByClassName("flag")[0].style.visibility = "hidden";
        document.getElementsByClassName("flag")[1].style.visibility = "visible";
    }
    else{
        document.getElementsByClassName("flag")[0].style.visibility = "visible";
        document.getElementsByClassName("flag")[1].style.visibility = "visible";
    }
    movePlayer(firstPlayer * 10);
    console.log(firstPlayer);
}

function movePlayer(movePoints){
    document.getElementsByClassName("player")[0].style.position = "relative";
    document.getElementsByClassName("player")[0].style.left = movePoints+"px";
}