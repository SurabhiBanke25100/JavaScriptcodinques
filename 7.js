//Write a function to  sorted array in ascending order.
function ascsort(inputArray) {

    var temp;
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {

            if (inputArray[i] > inputArray[j]) {
                temp = inputArray[i];
                inputArray[i] = inputArray[j];
                inputArray[j] = temp;
            }
        }

    }
    return inputArray;

}

let userInput = prompt("enter array =");
let inputArray = userInput.split(" ").map(Number); //use the map():-> while spliting the input string to convert the elements to numbers for comparison

let sortedArray = ascsort(inputArray);
console.log("Sorted array in ascending order:", sortedArray);