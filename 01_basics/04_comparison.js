// console.log(2 > 1); // This will print true
// console.log(2 < 1); // This will print false
// console.log(2 == 1); // This will print false
// console.log(2 != 1); // This will print true
// console.log(2 >= 1); // This will print true

console.log("2" > 1); // This will print true because the string "2" is converted to the number 2 before comparison
console.log("02" > 1); // This will print true because the string "02" is converted to the number 2 before comparison

console.log(null > 0); // This will print false because null is converted to 0 before comparison
console.log(null == 0); // This will print false because null is only equal to undefined, not to any other value    
console.log(null >= 0); // This will print true because null is converted to 0 before comparison

console.log(undefined == 0); // This will print false because undefined is converted to NaN before comparison
console.log(undefined > 0); // This will print false because undefined is converted to NaN before comparison    
console.log(undefined < 0); // This will print false because undefined is converted to NaN before comparison

// ===

console.log("2" === 2); // This will print false because the string "2" is not equal to the number 2