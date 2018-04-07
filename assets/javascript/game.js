//  GLOBAL VARIABLES
//==============================================================================

$(document).ready(function() {

    var totalRandNum;
    var userTotal = 0;

    var red;
    var blue;
    var yellow;
    var green;

    var wins = 0;
    var losses = 0;



//  FUNCTIONS
//==============================================================================

    function startGame() {
        totalRandNum = Math.floor(Math.random() * 101) + 19;
        $("#totalRandNum").text(totalRandNum);
        console.log("this is total random number " + totalRandNum)
        userTotal = 0;

        red = Math.floor(Math.random() * 12) + 1;
        redData = $("#red").attr("data-crystalValue", red);
        console.log(redData[0].attributes[1]);
        
        blue = Math.floor(Math.random() * 12) + 1;
        $("#blue").attr("data-crystalValue", blue);
        console.log("this is blue number " + blue);
        
        yellow = Math.floor(Math.random() * 12) + 1;
        $("#yellow").attr("data-crystalValue", yellow);
        console.log("this is yellow number " + yellow);
        
        green = Math.floor(Math.random() * 12) + 1;
        $("#green").attr("data-crystalValue", green);
        console.log("this is green number " + green);
        
    }

//  MAIN PROCESS
//==============================================================================


    startGame();

    $("body").on("click", "#red", function() {
        document.getElementById("userTotal").innerHTML = red;
    })

    $("body").on("click", "#blue", function() {
        document.getElementById("userTotal").innerHTML = blue;
    })
    $("body").on("click", "#yellow", function() {
        document.getElementById("userTotal").innerHTML = yellow;
    })
    $("body").on("click", "#green", function() {
        document.getElementById("userTotal").innerHTML = green;
    })    

        if (userTotal === totalRandNum) {
            $("#outcome").text("You Win!");
            wins++;
            startgame();
        }

        else if (userTotal >= totalRandNum) {
            $("#outcome").text("You Lose!");
            losses++;
            startgame();
        }
   
});