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
        userTotal = 0;
        $("#userTotal").text(userTotal);

        red = Math.floor(Math.random() * 12) + 1;
        $("#red").attr("data-crystalValue", red);
        
        blue = Math.floor(Math.random() * 12) + 1;
        $("#blue").attr("data-crystalValue", blue);
        
        yellow = Math.floor(Math.random() * 12) + 1;
        $("#yellow").attr("data-crystalValue", yellow);
        
        green = Math.floor(Math.random() * 12) + 1;
        $("#green").attr("data-crystalValue", green);
    }

    function checkOutcome() {
        if (userTotal === totalRandNum) {
            $("#outcome").text("You Win!");
            wins++;
            document.getElementById("wins").innerHTML = wins;
            startGame();
        }
    
        else if (userTotal > totalRandNum) {
            $("#outcome").text("You Lose!");
            losses++;
            document.getElementById("losses").innerHTML = losses;
            startGame();
        }
    }
//  MAIN PROCESS
//==============================================================================

    startGame();

    $("body").on("click", "#red", function() {
        $("#outcome").text(" ");
        userTotal = userTotal + red;
        document.getElementById("userTotal").innerHTML = userTotal;
        checkOutcome();
    })
    $("body").on("click", "#blue", function() {
        $("#outcome").text(" ");
        userTotal = userTotal + blue;
        document.getElementById("userTotal").innerHTML = userTotal;
        checkOutcome();
    })
    $("body").on("click", "#yellow", function() {
        $("#outcome").text(" ");
        userTotal = userTotal + yellow;
        document.getElementById("userTotal").innerHTML = userTotal;
        checkOutcome();
    })
    $("body").on("click", "#green", function() {
        $("#outcome").text(" ");
        userTotal = userTotal + green;
        document.getElementById("userTotal").innerHTML = userTotal;
        checkOutcome();
    })    

});