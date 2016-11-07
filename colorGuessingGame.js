/**
 * Created by gisselle.ortega444 on 11/3/16.
 */

var random = Math.floor(Math.random()* 9);
function game(){
    "use strict";
    var colors = ["RED", "BLUE", "GREEN",
        "YELLOW", "BLACK", "WHITE",
        "PURPLE", "PINK", "ORANGE", "GRAY"];
    console.log(random);
    var userChoice = document.getElementById("input").value;
    var finished = false;


    //indexOF
    do {
        userChoice = prompt("Type in your answer here", "");

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
            alert("Congratulations!!! You guessed the right color" );
            finished = true;
        }
    }
    while (
        finished == false)





}