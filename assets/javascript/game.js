window.onload = function () {

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    //push user guesses
    var userGuesses = [];
    var showGuesses = document.getElementById("myGuesses");
    document.onkeyup = function (event) {

        var userGuesses = String.fromCharCode(event.keyCode).toLowerCase();

        var computerGuess = letters[Math.floor(Math.random() * letters.length)];
        if (/^[a-zA-Z]+$/.test(userGuesses) && letters.indexOf(userGuesses) == -1) {
            letters.push(userGuesses);

            if (userGuesses === computerGuess) {
                wins++;
                guesses = 10;
                letters.length = 0;
                alert("You guessed it!");
            } else if (guesses === 1) {
                losses++;
                guesses = 10;
                letters.length = 0;
                alert("Though luck! Try again!");

            } else if (userGuesses !== computerGuess) {
                guesses--;
            }
            var displayLetters = letters.join(", ");
            var html =
                "<p>You chose: </p>" +
                "<p>" + displayLetters + "</p>" +
                "<p>wins: " + wins + "</p>" +
                "<p>losses: " + losses + "</p>" +
                "<p>guesses left: " + guesses + "</p>"
            document.querySelector("#game").innerHTML = html;
        }


    }
};


