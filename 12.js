//program to check array given is pelindrome or not.


function isPalindrome(inputArray) {
    let newArray = inputArray.slice().reverse();
    //use  the reverse() method to create a new reversed array newArray.

    return JSON.stringify(newArray) === JSON.stringify(inputArray); //We compare the original array inputArray and the reversed array newArray by converting them to JSON strings using JSON.stringify() and then check if they are equal.
}

let userArray = prompt("Enter the elements of an array separated by spaces: ");
let inputArray = userArray.split(" ").map(Number);
console.log("Check array is palindrome or not:", isPalindrome(inputArray));