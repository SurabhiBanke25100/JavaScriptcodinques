//Stack(Primitive)  and Heap(Reference) Memory Concept

let name = "John diger";
let anotherName = name;
anotherName = "John doe";
//console.log(anotherName); //output: John diger
// The value of anotherName remains unchanged , due to the fact that the anotherName variable holds a copy of the value stored in name, not a reference to it.

//console.log(name); // Output: John diger



//----------------------------------------------------------------------------------------

let personame = {
    email : "testcode@hmail.com",
     id: 45689
    }
let andotherPerson = personame;

andotherPerson.email = "jghtb@mkibn.com";
console.log(andotherPerson.email); 
console.log(personame.email); 
//output is same for both andotherPerson and personame coz andotherPerson is a reference to the same object in memory as personame.
// means the andotherPerson variable holds a reference to the same object stored in personame, not a copy of it.
