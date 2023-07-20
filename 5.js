function isPalindrome(number) {
    let temp = number;
    let reversed = 0;
    while (temp !== 0) {
        let digit = temp % 10;
        reversed = reversed * 10 + digit;
        temp = Math.round(temp / 10);
    }

    if (number === reversed)
        return true;

    else {
        return false;
    }

}

let n = prompt("Enter number:");
console.log("Is palindrome:", isPalindrome(parseInt(n)));