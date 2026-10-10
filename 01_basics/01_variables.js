const accountId = 144553;
let accountEmail = "user@example.com";
var accountPassword = "securepassword123";
let accountCity = "Delhi"; // Recommended approach for declaring variables
let accountState;

// accountId = 2 // This will throw an error because accountId is a constant and cannot be reassigned.

accountEmail = "newemail@example.com";
accountPassword = "newsecurepassword456";
accountCity = "Mumbai"; // This will work because accountCity is declared with let

console.log(accountId); // This will print 144553

/*
Prefer not to use var because of issue in block scope and function scope.
Use let or const instead for block scope and better maintainability.
*/

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]); // This will print all the updated values