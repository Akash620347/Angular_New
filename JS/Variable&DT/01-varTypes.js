let value = 30
value = 40

const check = 30
// check = 40


var test = 20
var test = 200

console.log(value)
console.log(check)
console.log(test)


// for even number testing

console.log("Printing even numbers")

let range = prompt("Enter range for even number ")
for(let i = 0; i<=range ; i++){
    if(i%2 == 0)
    console.log("Value ", i, " is even number")
}

// for prime number testing

console.log("Printing prime numbers")
let primeRange = prompt("Enter range for prime number ")
let isPrime = true
for(let i = 2; i<range; i++){
    if(range == 0 || range == 1){
        console.log("Number is not prime")
    }
   if(range%i == 0){
   isPrime = false
   }
}
if(isPrime)
   console.log(`${range} is prime number`)

else 
console.log(`${range} is not prime`)

console.log("...................");

// to create the username

let userName = prompt("Enter your username")

let userNameLen = userName.length;

// for creation of the username "username --> "@username(userName.length)" "

console.log("Created Username")

console.log(`@${userName}${userNameLen}`)


