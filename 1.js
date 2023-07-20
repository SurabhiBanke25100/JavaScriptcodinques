function factorial(number) {
    let f = 1;
    for (let i = number; i > 0; i--) {
        f = f * i;

    }
    return f;
}

let userInput = prompt("Please enter number:");
//console.log("userInput:", userInput);


var t = factorial(userInput);


console.log("factorial=", t);