function findDuplicates(inputArray) {
    let uniqueArray = [];
    let duplicateArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (!uniqueArray.includes(inputArray[i])) {
            uniqueArray.push(inputArray[i]);
        } else if (!duplicateArray.includes(inputArray[i])) {
            duplicateArray.push(inputArray[i]);
        }
    }

    return duplicateArray;
}

let userInput = prompt("Enter the elements of an array separated by spaces:");
let inputArray = userInput.split(" ").map(Number);

let duplicateValues = findDuplicates(inputArray);
console.log("Duplicate values in the array:", duplicateValues);