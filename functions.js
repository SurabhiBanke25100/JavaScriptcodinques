function addnumbers(a,b){   //function declaration: value paased called parameters
    return a+b;
}

console.log(addnumbers(4,"2 "));       //function call: value passed called arguments



function calcprice(val1,val2,...price){
    return price;
}

console.log(calcprice(200,300,400,800,900,788,865));  //o/p: [ 400, 800, 900, 788, 865 ]
//...price is called rest operator which takes all the remaining arguments as an array


//------function with objects handling---
const obj1 ={
    name : "ash",
    age : 32,

};

function displayobj(otherobj){
    return `name is ${otherobj.name} and age is ${otherobj.age}`;

}

console.log(displayobj(obj1));