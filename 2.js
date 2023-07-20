//Write a function to check if a number is even or not 



function even(number) {

    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let n = prompt("enter number="); //taking input from user using "prompt" method



console.log("to check no:", even(n));