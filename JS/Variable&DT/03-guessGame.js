let guessedNumber = Math.floor(Math.random() * 10);
console.log(guessedNumber)



// prompt always return string value so while any condition not use (===) triple equal to.
let userNumber = prompt("Enter the number")

while(userNumber != guessedNumber){
    console.log("Guessed number ",userNumber," ", "Correct number",guessedNumber)
    userNumber = prompt("Wrong number guessed, Keep Trying....")
}

if(userNumber == guessedNumber){
    alert("Yoohooo!!! you guessed the correct number")
}


