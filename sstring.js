const name = "hthi nker uyiu"
const count = "10";

//Below is the new pattern to print String
//console.log(`name: ${name} \n count: ${count}`);

//console.log(`String type:${name.__proto__}`);
//console.log(`String type:${count.toUpperCase()}`);
//console.log(name.slice(1,4));

//console.log(name.indexOf("n"));

//console.log(name.charAt(2));

//console.log(name.length); // Output: 14

//-------------substring---------------
const str = "Mozilla";

//console.log(str.substring(1, 3));
// Expected output: "oz"

//console.log(str.substring(2));
// Expected output: "zilla"

//note: difference between slice and substring is that slice can accept negative index but substring cannot.
//------------slice-----------
//console.log(str.slice(1, 3)); //output:"oz"

//console.log(str.slice(2)); //output:"zilla"

//console.log(str.slice(-5)); // Expected output: "zilla"
//explaination: total length is 7, so -5 means start from the 3rd character from the end, which is "z" in "zilla".
//console.log(str.slice(-6, -3)); // Expected output: "zil"

//------------replace-----------
console.log(str.replace("Mozilla", "Google")); // Output: "Google"

let url = "https://www.example.com/path?query=123";
console.log(url.replace("?query", "-45")); // Output: "http://www.example.com/path?query=123"

