const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + "Value"); // This will print "hitesh50Value" because the number 50 is converted to a string and concatenated with "hitesh"

console.log("(Hello my name is ${name} and my repo count is ${repoCount})"); // This will print "(Hello my name is ${name} and my repo count is ${repoCount})" because the string is not enclosed in backticks, so the variables are not interpolated

const gameName = new String("hitesh-hc-com"); // This will create a new String object with the value "hitesh-hc-com"

// console.log(gameName[0]); // This will print the first character of the String object with the value "hitesh-hc-com"
// console.log(gameName.__proto__); // This will print the prototype of the String object with the value "hitesh-hc-com"


// console.log(gameName.length); // This will print the length of the String object with the value "hitesh-hc-com"
// console.log(gameName.toUpperCase()); // This will print the String object with the value "HITESH-HC-COM" in uppercaseconsole.log(gameName.charAt(2)); // This will print the character at index 2 of the String object with the value "hitesh-hc-com"
console.log(gameName.charAt(2)); // This will print the character at index 2 of the String object with the value "hitesh-hc-com"
console.log(gameName.indexOf("t")); // This will print the index of the first occurrence of the character "t" in the String object with the value "hitesh-hc-com"

const newwString = gameName.substring(0, 4); // This will create a new String object with the value "hite" which is a substring of the original String object with the value "hitesh-hc-com"
console.log(newwString); // This will print the new String object with the value "hite"

const anotherString = gameName.slice(-8, 4); // This will create a new String object with the value "    hitesh    " which is a slice of the original String object with the value "hitesh-hc-com"
console.log(anotherString); // This will print the new String object with the value "    hitesh    "

const newStringOne = "    hitesh    "; // This will create a new String object with the value "    hitesh    "
console.log(newStringOne); // This will print the new String object with the value "    hitesh    "
console.log(newStringOne.trim()); // This will print the new String object with the value "hitesh" which is the original String object with the value "    hitesh    " with the leading and trailing whitespace removed

const url = "https://hitesh.com/hitesh%20choudhary"; // This will create a new String object with the value "https://hitesh.com/hitesh%20choudhary"

url.replace("%20", "-"); // This will create a new String object with the value "https://hitesh.com/hitesh-choudhary" which is the original String object with the value "https://hitesh.com/hitesh%20choudhary" with the "%20" replaced with "-"
console.log(url.replace("%20", "-")); // This will print the new String object with the value "https://hitesh.com/hitesh-choudhary" which is the original String object with the value "https://hitesh.com/hitesh%20choudhary" with the "%20" replaced with "-"
console.log(url.includes("sundar")); // This will print false because the String object with the value "https://hitesh.com/hitesh%20choudhary" does not include the substring "sundar"

console.log(gameName.split("-")); // This will print an array with the elements "hitesh", "hc", and "com" which are the substrings of the original String object with the value "hitesh-hc-com" split by the "-" character
