let final = "0";
document.getElementById("getFinalValue").innerHTML = final;


// array practise

let prices = [250,645,300,900,50];
document.getElementById("getPrice").innerHTML = prices;

let pricesLength = prices.length;
for(let i = 0; i< pricesLength; i++){
    prices[i] = prices[i] * 0.1;
}
document.getElementById("getPrice").innerHTML = prices;

