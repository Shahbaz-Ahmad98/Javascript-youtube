let score = "hitesh"

// console.log(typeof score); // This will print "number"
// console.log(typeof(score)); // This will print "number"

let valueInNumber = Number(score); // This will convert the string "33" to the number 33
// console.log(typeof valueInNumber); // This will print "number"
// console.log(valueInNumber); // This will print 33


// "33" => 33
// "33abc" => NaN
// "true" => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn); // This will convert the number 1 to the boolean true
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false;
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber); // This will convert the number 33 to the string "33"
console.log(stringNumber); // This will print "33"
console.log(typeof stringNumber); // This will print "string"