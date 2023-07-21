//function to find the sum of all elements in an array.


function sumarr(inputArray) {
    var sum = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        sum += inputArray[i];
    }
    return sum;
}


let userInput = prompt("enter the elements of an array seperated by spaces=");

let inputArray = userInput.split(" ").map(Number); //remember:  map(Number):'N' is capital


console.log("sum of all elements of array=", sumarr(inputArray));