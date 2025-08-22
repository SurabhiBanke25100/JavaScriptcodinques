//------------Array--------
const array1 = [1,22,"htg",[1,2,3],true];
//console.log(array1);
//in Js array can hold multiple data types

//---Array methods----

// console.log(array1.length);
// console.log(array1[3][1]);  //output:2
// console.log(array1[2].toUpperCase());
// console.log(array1.indexOf(22));
 //ray1.push({email:'test@mail.com', id:5678});
// array1.push(98);
// array1.pop();
// console.log(array1);

// const slcmethod = array1.slice(1,3);
// console.log("A",array1);
// console.log(slcmethod);

// const spcmethod = array1.splice(1,3);
// console.log("B",array1);
// console.log(spcmethod);

const array2 = [23,7,"nobs",true];
// array2.unshift(45);   //unshift adds element at the beginning of the array
// console.log(array2);

// array2.unshift(63);
// console.log(array2);    //shift removes the first element of the array

// array2.shift();
// console.log(array2);    //shift removes the first element of the array  

//  const array3 = array2.join();
// // console.log(array3);
// // console.log(array3.split(","));  //split converts string to array
  
// array4 = array3.concat(array2);
// console.log(array4.split(","));  //concat merges two arrays


//--------advanced array methods--------
//instead of using concat we can use "spread" operator
// const array4 = [1,2,4,56,7];
// array5 = [...array1,...array2,...array4];
// console.log(array5);  //spread operator merges two arrays

// const anotherarry = [1,2,4,[5,6,7],[8,[9,10],11],99,4,5,67,8];
// console.log(anotherarry.flat(Infinity)); 
//flat method flattens the array to a single level, Infinity means it will flatten all levels



//--------some more advacned methods array-------
// console.log(Array.isArray("amit")); //isArray method checks if the variable is an array or not
// console.log(Array.from("amit")); //"from" method converts a string to an array

const match1 = 300;
const match2 = "ert";
const match3 = {"name":"amit" , "age":23};
const match4 = [1,2,3,4];
console.log(Array.of(match1,match2,match3,match4)); //"of" method creates an array from the given arguments