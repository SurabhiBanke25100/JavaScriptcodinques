function removeDuplicates(inputArray) {
    let uniqueArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (!uniqueArray.includes(inputArray[i])) {
            uniqueArray.push(inputArray[i]);
        }
    }

    return uniqueArray;
}

let userInput = prompt("Enter the elements of an array separated by spaces:");
let inputArray = userInput.split(" ").map(Number);

console.log("Array with duplicates removed:", removeDuplicates(inputArray));