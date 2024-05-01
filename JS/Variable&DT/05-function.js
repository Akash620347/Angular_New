// functions syntax(normal function)
function addSum(a,b){
    let sum = a+b;
    console.log("Sum of values are",sum)
}

addSum(2,3);

// arrow function implementation
let addSumArrow = (a, b) => {
    let sum = a+b;
    console.log("Sum of arrow function",sum);
}

addSumArrow(3,4);



// functions 

// multiplying 2 numbers using arrow function 
let multiply = (a, b) =>{
    return a*b;
}
document.getElementById("getMultiply").innerHTML = multiply(12,19);

// to return vowels form the string 

let volwelsReturn = (argument) => {
    let count = 0;
    for(let i = 0; i<argument.length; i++){
        if(argument[i] == 'a' || argument[i] == 'A' ||
           argument[i] == 'e' || argument[i] == 'E' ||
           argument[i] == 'i' || argument[i] == 'I' ||
           argument[i] == 'o' || argument[i] == 'O' ||
           argument[i] == 'u' || argument[i] == 'U'
        )
        count++;
    }
    console.log(count)
    document.getElementById("getVowelsCount").innerHTML = count;
    return count;
}

volwelsReturn("aeiouAeiou")


// forEach loop --> Call back function (applicable only for array)

// print square of each element of array 
let arr = [2, 4, 6, 8, 10];


arr.forEach((square) =>{
    console.log("value of array",square*square)
})

// to get the largest number by reduce method 

arr = [4, 1, 0, 2, 10, 30];
let result = arr.reduce((res, curr) =>{
    // if(res > curr)
    // return res;
    // else
    // return curr;


    let large = Math.max(res, curr);
    res = large;
    return res
})
console.log("Max number",result)

// reduce method to calculate sum
let sizeOfArray = prompt("Enter the size");
let userArr = [];

for(let i = 0; i< sizeOfArray; i++){
    let takeInput = prompt(`Enter numbers into array of size ${sizeOfArray-i}`);
    userArr.push(parseInt(takeInput));
}
let returnSum = userArr.reduce((res, curr) =>{
    return res+curr;
})
console.log("Sum of userArry",returnSum);

// reduce method to calculate mul

let returnMul = userArr.reduce((res, curr) =>{
    return res*curr;
})
console.log("Multiplication of userArry", returnMul)

// to get array greater than 10
const greaterTanTen = arr.filter((result) =>{
    if(result >= 10)
    return result;
})

console.log(greaterTanTen)


console.log("res", "2*3")
