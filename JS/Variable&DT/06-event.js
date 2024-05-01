let isToggle = false;

let toggleHandler = (evt) =>{
    isToggle = !isToggle;
    if(isToggle){
        document.querySelector("body").style.backgroundColor = "black"
        console.log(isToggle)
    }
    else{
        document.querySelector("body").style.backgroundColor = "white"
        console.log(isToggle)
    }
}

theme.addEventListener("click", toggleHandler)