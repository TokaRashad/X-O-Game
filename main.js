let inturn = "X";

let allDivs = document.querySelectorAll("main .box");

allDivs.forEach(function (item) {
    item.onclick = function () {
        if (item.innerHTML == "") {
            item.innerHTML = inturn;
            if (inturn == "X") {
                inturn = "O";
            } else if (inturn == "O") {
                inturn = "X";
            }
        }
            gameOver();
    };
  });
  
  function gameOver() {
    if (allDivs[0].innerHTML == allDivs[1].innerHTML && allDivs[1].innerHTML == allDivs[2].innerHTML && allDivs[0].innerHTML != "")
        {
            document.querySelector("#game").innerHTML = allDivs[0].innerHTML + " is WINNER!";
            console.log("1");
        }

    if(allDivs[3].innerHTML == allDivs[4].innerHTML && allDivs[4].innerHTML == allDivs[5].innerHTML && allDivs[3].innerHTML != "")
        {
            document.querySelector("#game").innerHTML = allDivs[3].innerHTML + " is WINNER!";
            console.log("2");
        }
    
    if (allDivs[6].innerHTML == allDivs[7].innerHTML && allDivs[7].innerHTML == allDivs[8].innerHTML && allDivs[6].innerHTML != "")
        {
            document.querySelector("#game").innerHTML = allDivs[6].innerHTML + " is WINNER!";
            console.log("3");
        }

    if(allDivs[0].innerHTML == allDivs[3].innerHTML && allDivs[3].innerHTML == allDivs[6].innerHTML && allDivs[0].innerHTML != "")
        {
            document.querySelector("#game").innerHTML = allDivs[0].innerHTML + " is WINNER!";
            console.log("4");
        }
    
    if (allDivs[1].innerHTML == allDivs[4].innerHTML && allDivs[4].innerHTML == allDivs[7].innerHTML && allDivs[1].innerHTML != "")
        {
            document.querySelector("#game").innerHTML = allDivs[1].innerHTML + " is WINNER!";
            console.log("5");
        }

    if(allDivs[2].innerHTML == allDivs[5].innerHTML && allDivs[5].innerHTML == allDivs[8].innerHTML && allDivs[2].innerHTML != "")
        {
            document.querySelector("#game").innerHTML = allDivs[2].innerHTML + " is WINNER!";
            console.log("6");
        }
    
    if (allDivs[0].innerHTML == allDivs[4].innerHTML && allDivs[4].innerHTML == allDivs[8].innerHTML && allDivs[0].innerHTML != "")
        {
            document.querySelector("#game").innerHTML = allDivs[0].innerHTML + " is WINNER!";
            console.log("7");
        }

    if(allDivs[2].innerHTML == allDivs[4].innerHTML && allDivs[4].innerHTML == allDivs[6].innerHTML && allDivs[2].innerHTML != "")
        {
            document.querySelector("#game").innerHTML = allDivs[2].innerHTML + " is WINNER!";
            console.log("8");
        }
    

}
