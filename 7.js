//Write a function to check if an array is sorted in ascending order.
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
        console.log(inputArray[i]);
    }
    return 1;

}






let userInput = prompt("enter array =");
let inputArray = userInput.split(" ");

function ascsort(inputArray);