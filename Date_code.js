//------------Date--------
const mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

 const newdate = new Date("01-14-2024");
// console.log(newdate.toLocaleString());

const timestamp = Date.now();
// console.log(timestamp);
// console.log(newdate.getTime()); 
// console.log(timestamp/1000); //convert milliseconds to seconds

// console.log(Math.floor(timestamp/1000));

// console.log(mydate.getFullYear());
// console.log(mydate.getDate()); 
// console.log(mydate.getMonth() + 1); //months are 0-indexed, so January is 0, February is 1, etc.
// console.log(mydate.getDay()); //0 is Sunday, 1 is Monday, ..., 6 is Saturday

const newdatetime = mydate.toLocaleString("default",{
    timeZone: "universal",
    timeZoneName: "short"
});

console.log(newdatetime);