// //object can be used to store multiple values in a single variable
// //objects are written in key:value pairs
// //---objects key values are always in string format
// //object can be declared in two ways: using object literal or using constructor

// //1.using object literal
// const objectdemo = {
//     name: "ash",
//     age: 32,
//     hobbies : ["reading", "travelling", "swimming"],
// };
// console.log(objectdemo);
// console.log(objectdemo.name);  //"dot" notation to access object properties
// console.log(objectdemo["age"]); //"bracket" notation to access object properties

// //Dot Notation: Preferable for properties with valid names that don’t require dynamic access.

// //Square Bracket Notation: Use when:

// //The property name contains spaces, special characters, or starts with a number.

// const symb = Symbol("symbol key");
// //const symb2 = Symbol("another symbol key");
// //---example of bracket notation
// const objecttest = {
//     name: "ash",
//     age: 32,
//     hobbies : ["reading", "travelling", "swimming"],
//     "email" : "fishertest2mailinator.com",
//     [symb] : "xyz",
//    // [symb]: "56tr"
     
// };
// console.log(objecttest["email"]);    //bracket notation is used when key has special characters.
// console.log(objecttest[symb]);
// //-------Note: if you define the same symbol key more than once, 
// // the last value overrides the previous one.

// //we can also update the object properties values
// objecttest.age =35;
// objecttest["name"] = "nishant";
// //console.log(objecttest);

// //----or else if u want to freeze the object properties then use "Object.freeze()" method----
// Object.freeze(objecttest);
// objecttest.age = 45;  //it will not update the age property value
//console.log(objecttest);

//--object with functions
const objwithfunc = {
    name: "ash",
    age: 32,
    hobbies : ["reading", "travelling", "swimming"],
    // greet: function(){
    //     console.log("hello there!");
    // },
     
};

objwithfunc.greet = function(){
    return `Hello from object inside function, ${this.name}`;  
    
    //--note::::use return to return a value from function
}
console.log(objwithfunc.greet());// By default, a function with no return statement returns "undefined".

//objwithfunc.greet();  //use like this to call the function inside the object






