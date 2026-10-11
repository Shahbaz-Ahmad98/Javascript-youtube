// Primitive data types are the most basic data types in JavaScript. They are immutable and do not have methods or properties.

// 7 primitive data types in JavaScript are:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // This will print false because each Symbol is unique, even if they have the same description   

const bigNumber = 1234567890123456789012345678901234567890n; // BigInt



// Reference (Non-primitive) data types are more complex data types in JavaScript. They are mutable and have methods and properties.
// 3 reference data types in JavaScript are:
// 1. Object
// 2. Array
// 3. Function

const heros = ["Iron Man", "Spiderman", "Thor"]; // Array
let myObj = {
    name: "Hitesh",
    age: 21,
} // Object

const myFunction = function() {
    console.log("Hello World");
} // Function

console.log(typeof heros); // This will print "object"
console.log(typeof myObj); // This will print "object"
console.log(typeof myFunction); // This will print "function"




// ++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYouTubename = "hiteshchoudhary.com"; // Primitive data type is stored in stack memory

let anotherYouTubeName = myYouTubename; // anotherYouTubeName is a copy of myYouTubename, so it is also stored in stack memory
anotherYouTubeName = "chaiaurcode" // anotherYouTubeName is changed, but myYouTubename is not changed because they are stored in different memory locations

console.log(myYouTubename); // This will print "hiteshchoudhary.com"
console.log(anotherYouTubeName); // This will print "chaiaurcode"

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne; // userTwo is a reference to userOne, so it is stored in heap memory
userTwo.email = "hitesh@google.com"; // This will change the email for both userOne and userTwo since they reference the same object in memory
console.log(userOne.email); // This will print "hitesh@google.com"
console.log(userTwo.email); // This will print "hitesh@google.com"