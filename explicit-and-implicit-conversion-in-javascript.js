
// Fix 1: This works fine — subtraction causes implicit conversion of "5" to 5.
let result = "5" - 2; 
console.log("The result is: " + result); 
// Output: The result is: 3

// Fix 2: "false" (string) is truthy, so this block will always run — may be confusing.
// Convert string "false" to actual boolean using a comparison.
let isValidString = "false";
let isValid = (isValidString === "true");  // Only true if the string is exactly "true"

if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is invalid!"); 
}
// Output: This is invalid!

// Fix 3: "+" causes string concatenation — we need to convert 'age' to a number explicitly.
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge); 
// Output: Total Age: 30

