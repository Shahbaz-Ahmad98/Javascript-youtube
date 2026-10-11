// +++++++++++ Numbers ++++++++++++
const score = 400
// console.log(score); // This will print 400

const balance = new Number(100) // This will create a Number object with the value 100
// console.log(balance); // This will print [Number: 100]

// console.log(balance.toString().length); // This will print 3 because the string representation of the number 100 has a length of 3
// console.log(balance.toFixed(2)); // This will print "100.00" because the toFixed() method formats the number to 2 decimal places

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)); // This will print "23.9" because the toPrecision() method formats the number to 3 significant digits

const hundreds= 1000000
// console.log(hundreds.toLocaleString("en-IN")); // This will print "10,00,000" because the toLocaleString() method formats the number according to the Indian numbering system

// +++++++++++ Maths ++++++++++++
// console.log(Math); // This will print the Math object which contains various mathematical constants and functions
// console.log(Math.abs(-4)); // This will print 4 because the abs() method returns the absolute value of a number 
// console.log(Math.round(4.6)); // This will print 5 because the round() method rounds a number to the nearest integer
// console.log(Math.ceil(4.2)); // This will print 5 because the ceil() method rounds a number up to the nearest integer
// console.log(Math.floor(4.9)); // This will print 4 because the floor() method rounds a number down to the nearest integer
// console.log(Math.min(4, 7, 2)); // This will print 2 because the min() method returns the smallest value from a list of numbers
// console.log(Math.max(4, 7, 2)); // This will print 7 because the max() method returns the largest value from a list of numbers

console.log(Math.random()); // This will print a random number between 0 and 1
console.log((Math.random()*10) + 1); // This will print a random number between 1 and 10
console.log(Math.floor((Math.random()*10) + 1)); // This will print a random integer between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // This will print a random number between 10 and 20