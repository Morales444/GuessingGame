/**
 * Created by gisselle.ortega444 on 11/3/16.
 */

var random = Math.floor(Math.random()* 10);
function game(){
    "use strict";
    var colors = ["AQUA", "AZURE", "BLACK",
        "GOLD", "GREEN", "MAROON",
        "PINK", "PURPLE", "SILVER", "WHITE"];
    console.log(random);
    var userChoice = document.getElementById("input").value;
    var finished = false;
    var finCol = colors[random];
    var count = 0;

    //indexOF
    try {
        do {
            count++;
            userChoice = prompt("Maroon, Aqua, Green, Silver, Black, White, Purple, Pink, Azure, Gold\n" +
                "Which color am i thinking of?", "");
            if ( colors.indexOf(userChoice.toUpperCase()) == -1  ){
                alert("Sorry, this is not a valid color or an empty string");
            }
            else if (colors.indexOf(userChoice.toUpperCase())> random) {
                alert ("Sorry, this color is incorrect \n" +
                    "Hint: your color is alphabetically higher than the answer \n" +
                    "Please try again"
                )
            }
            else if (colors.indexOf(userChoice.toUpperCase())< random) {

                alert ("Sorry, this color is incorrect \n" +
                    "Hint: your color is alphabetically lower than the answer \n" +
                    "Please try again")
            }
            else {
                alert("Congratulations!!! You guessed the right color\n" +
                "It took you " + count + " guesses to finish the game");
                var myBody = document.getElementsByTagName("body")[0];
                myBody.style.background= finCol;
                finished = true;
                count= 0;
            }
        }
        while (
        finished == false)
    } catch (e) {
        console.log(e)
    }
}