//---objects with constructors------------
// 2 ways to define object as constructors
const objectnew  = new Object();
objectnew.name = "asking";
// or

const objnew2 = {
    id: 456987
};

// console.log(objectnew);
// console.log(objnew2); 

//---to print the object keys or values
console.log(Object.keys(objectnew));
console.log(Object.values(objectnew));  

//console.log(objectnew.hasOwnProperty("id")); 
//to check if the object has a particular property or not  
console.log(objnew2.hasOwnProperty("id"));  

