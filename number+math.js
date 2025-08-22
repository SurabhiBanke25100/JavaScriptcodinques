//-------------number object----------------
//There are two ways to create a number object
//1.using a number literal
// const ano = 500;
// console.log(ano);
// //2.using the Number() constructor
// const bno = new Number(1000);
// console.log(bno);

//-------------Maths Object----------------
// console.log(Math);
// console.log(Math.abs(-4.8));
// console.log(Math.round(4.8));
// console.log(Math.ceil(5.1)); //ceil: rounds a number before decimal like 5 se thoda sa bhi upr no. hua toh it will round the no. before decimal.
// //o/p: 6

// console.log(Math.floor(5.9));//floor: rounds a number after decimal. like 9>5 then floor() will round down. 
// //o/p: 5

//shortcut to comment the lines:  "ctrl+/(forward slash)"
// console.log(Math.min(10,2,-9,90));  //o/p: -9
// console.log(Math.max(112,113333.01,56,78));

// console.log(Math.random());
// //console.log(Math.random()*10); //on multiplying by 10 it will give random no. between 0 to 9.99999
// //but i want atleast 1 
// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor((Math.random()*10)+ 1));

const min = 10;
const max = 20;
console.log(Math.random() * (max - min + 1) + min);

