//program to check  whether string is pelindrome or not

function isPelindrome(string) {

    const reversestr = str.split('').reverse().join('');


    return str === reversestr;
}



let str = prompt("enter the string u wan to check pelindrome or not=");

console.log("pelindrome or not=", isPelindrome(str));