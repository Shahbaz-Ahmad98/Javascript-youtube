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
// console.log(stringNumber); // This will print "33"
// console.log(typeof stringNumber); // This will print "string"

// ****************** Operations ******************

let value = 3;
let negValue = -value;
// console.log(negValue); // This will print -3

// console.log(2 + 2); // This will print 4
// console.log(2 - 2); // This will print 0
// console.log(2 * 2); // This will print 4
// console.log(2 ** 2); // This will print 4
// console.log(2 / 3); // This will print 0.6666666666666666
// console.log(2 % 3); // This will print 2

let str1 = "Hello";
let str2 = " hitesh";
let str3 = str1 + str2;
// console.log(str3); // This will print "Hello hitesh"

// console.log("1" + 2); // This will print "12" because the number 2 is converted to a string and concatenated with "1"
// console.log(1 + "2"); // This will print "12" because the number 1 is converted to a string and concatenated with "2"
// console.log("1" + 2 + 2); // This will print "122" because the number 2 is converted to a string and concatenated with "1" and "2"
// console.log(1 + 2 + "2"); // This will print "32" because the numbers 1 and 2 are added first to get 3, and then concatenated with the string "2"
// console.log( (3 + 4) * 5 % 3); // This will print 2 because the expression inside the parentheses is evaluated first, resulting in 7, which is then multiplied by 5 to get 35, and finally the modulus operator is applied to get the remainder when 35 is divided by 3, which is 2

// console.log(+true); // This will print 1
// console.log(+false); // This will print 0
// console.log(+""); // This will print 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2; // This will assign the value 4 to num1, num2, and num3
// console.log(num1, num2, num3); // This will print 4 4 4

let gameCounter = 100;
gameCounter++; // This will increment the value of gameCounter by 1
console.log(gameCounter); // This will print 101