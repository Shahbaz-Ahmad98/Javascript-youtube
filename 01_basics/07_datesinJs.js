// Dates

// let myDate = new Date();
// console.log(myDate.toString()); // This will print the current date and time
// console.log(myDate.toDateString()); // This will print the current date in a readable format
// console.log(myDate.toLocaleString()); // This will print the current date and time in a readable format based on the user's locale
// console.log(typeof myDate); // This will print "object" because myDate is an object of the Date class

// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // Month is 0-indexed (0 = January, 11 = December)
// let myCreatedDate = new Date("2023-01-14"); // Month is 0-indexed (0 = January, 11 = December)
let myCreatedDate = new Date("01-14-2023"); 
// console.log(myCreatedDate.toLocaleString()); // This will print the created date in a readable format

let myTimeStamp = Date.now(); // This will return the number of milliseconds since January 1, 1970
// console.log(myTimeStamp); // This will print the current timestamp in milliseconds
// console.log(myCreatedDate.getTime()); // This will print the created date and timeconsole.log(Date.now()/1000); // This will print the current timestamp in seconds
// console.log(Math.floor(Date.now()/1000)); // This will print the current timestamp in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // This will print the month of the new date (0 = January, 11 = December)
console.log(newDate.getDay()); // This will print the day of the week of the new date (0 = Sunday, 6 = Saturday)


