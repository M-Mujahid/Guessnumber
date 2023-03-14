var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");


var ans = Math.floor(Math.random() *100) + 1;
var noOfGuesses = 0;
var guessedNumber = [];


function play(){
 
    var userGuess = document.getElementById("input").value;
    if(userGuess < 1 || userGuess > 100){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please insert num between 1-100!',
          })
    }
    else {
        
        guessedNumber.push(userGuess);
        noOfGuesses += 1;
    }

    if(userGuess < ans){

        msg1.textContent = "Your guess is too low";
        msg2.textContent = "No. of guesses: " + noOfGuesses;
        msg3.textContent = " guessed no. are :" + guessedNumber;

    }
    else if (userGuess > ans){

        
        msg1.textContent = "Your guess is too high";
        msg2.textContent = "No. of guesses: " + noOfGuesses;
        msg3.textContent = " guessed no. are :" + guessedNumber;
    }

    else if ( userGuess == ans){
        msg1.textContent = "yup you win !!";
        msg2.textContent = "The number was: " + ans;
        msg3.textContent = "you guess it in " + noOfGuesses;
    }

    
}
