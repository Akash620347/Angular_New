// goes last
let sum = (a, b) => {
    console.log("Entered into 1st function")
    console.log("Sum of 2 number is:",a+b)
}

// goes second
let calculator = (a, b, sumCallBack) => {
    console.log("Entered into 2nd function")

    sumCallBack(a, b);
}
// goes first
// console.log("Entered into call function")

// this sum copy into sumCallBack
// calculator(1,2,sum);


/************************************** */
// WE CAN'T PASS sum() like this --> BECAUSE sumCallBack is not a function it only taking the sum as a function.
//     SO, FOR THAT WE CAN PASS A CALLBACK Function.
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// });

// another way of doing it 
calculator(2, 3, (a,b)=>{
    console.log("Entered into the callback")
    console.log(a+b)
})

// this function can be callback like the example above.
// setTimeout(function, 3000)
setTimeout(() =>{
    console.log("Hello Akash Kumar")
}, 2000);

// callBack Hell

// count = 1;
// function callBackHell(dataId, getNext){
//     setTimeout(()=>{
//         console.log(`Came in callBackHell for ${count} times`)
//         console.log("Data id is: ",dataId);
//         count++;
//         if(getNext)
//         getNext()
//     },2000);
// }

// callBackHell(1, ()=>{
//     console.log("Checking for next....")
//     callBackHell(2, ()=>{
//         console.log("Checking for next....")
//         callBackHell(3, ()=>{
//             console.log("Last one.")
//         })
//     })
// });


// to avoid callBack Hell we can use Promise

// function getData(getId, getNext){ 
//     return new Promise ((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Successfully resolved")
//             console.log("Data id is: ",getId);
//             getNext();
//         }, 5000)
//     })
// }
// getData(123, ()=>{
//     console.log("Goging for next....")
//     getData(12131, ()=>{

//     })
// })


// to work with .then() and .catch() method in Promise

// basic Promise
let basicPromise = () =>{
    return new Promise((resolve, reject) =>{
        console.log("In promise")
        resolve("Successfully in resolve");
    })
}

let promise = basicPromise()

promise.then(()=>{
console.log("After Successful promise")
})
promise.catch(() =>{
console.log("After rejected promise")
})


// proxy chaining 

function getData(getId){ 
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve("Successfully resolved")
            console.log("Data id is: ",getId)
        }, 2000)
    })
}
// ****************ONE APPROACH********************
// let p1 = new getData(1);
// p1.then(()=>{
//     console.log("Fetching for next.....")
//     let p2 = new getData(2);
//     p2.then(()=>{
//     console.log("Fetching for next.....")
//         let p3 = new getData(3);
//         p3.then(()=>{
//             console.log("Ended.....")
//         })
//     })
// })
// *****************2ND APPROACH****************
getData(1).then(()=>{
    console.log("Fetching for next.....")
    getData(2).then(()=>{
        console.log("Fetching for next.....")
        getData(3).then(()=>{
            console.log("Ended.....")
        })
    })
})