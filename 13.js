//function to count the number of occurrences of a specific element in an array.


function countArray(inputArray, element) {

    //The function countArray is modified to take two parameters: the input array and the element to count occurrences of.

    let count = 0;
    for (let i = 0; i < newArray.length; i++) {
        if (inputArray[i] == element) {
            count++;
        }
        return count;
    }
}


let userArray = prompt("Enter the elements of an array separated by spaces: ");
let inputArray = userArray.split(" ").map(Number);
let count = countArray(inputArray, parseInt(elementToCount));
console.log(`Number of occurrences of ${elementToCount} in the array: ${count}`);