// program to add  two  no  using   function


function add(a, b) {
    return a + b;
}


let n = prompt("enter number1=");
let n1 = prompt("enter number2=");

let num = parseInt(n); //parseInt():convert string to int
let num1 = parseInt(n1);

console.log("sum=", add(n, n1));