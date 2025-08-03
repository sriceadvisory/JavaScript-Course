let firstName = 'Shon'// Using let for variables that may change
let lastName = 'Rice' // Using let for variables that may change
const name = `${firstName} ${lastName}`
const age = 30 // Using const for constants
let year = 2025 // Using let for variables that may change
let birthYear = `1995` // Using let for variables that may change
var isEmployed = true // Using var for demonstration, but let or const is preferred in modern JavaScript

function greet() {
    console.log(`Hello, my name is ${name}. I am ${age} years old and it is ${isEmployed} that I am employed.`);
}

greet();

console.log(typeof firstName); // string
console.log(typeof age); // number
console.log(typeof isEmployed); // boolean

let x = 10; // Using let for variables that may change
x += 5; // Incrementing x
x *= 2; // Doubling x
x--; // Decrementing x
x++; // Incrementing x again

console.log(age > 25); // true
console.log(age < 25); // false
console.log(age >= 30); // true
console.log(age <= 30); // true
console.log(age === 30); // true
console.log(age !== 25); // true 

console.log(`The value of x is now: ${x}`); // Output the final value of x
console.log(`The current year is ${year}`); // Output the current year

//If statement to check employment status
if (isEmployed) {// Using if statement to check employment status, defaults to true
    console.log(`${name} is employed.`);
} else {
    console.log(`${name} is not employed.`);
}

//Switch statement to check the current year
switch (year) {// Using switch to handle multiple cases
    case 2023:// Using case to check specific years strictly
        console.log("It's the year 2023.");
        break;
    case 2024:
        console.log("It's the year 2024.");
        break;
    case 2025:
        console.log("It's the year 2025.");
        break;
    default:
        console.log("It's some other year.");
}

//For loop to count down from 5
for (let i = 5; i > 0; i--) {// Using for loop to count down
    console.log(`Countdown: ${i}`);// Output the countdown value
}

//While loop to print numbers from 1 to 3
let count = 1;
while (count <= 3) {// Using while loop to print numbers
    console.log(`Count: ${count}`);// Output the current count
    count++;// Increment the count
}

console.log(Number(birthYear)); // Convert birthYear to a number and log it
console.log(Number(`Shon`)) // Attempt to convert a string to a number, will log NaN;

let n = `1` + 1;// Concatenating a string and a number, results in '11'
n = n - 1; // Subtracting 1 from the string '1' coerces it to a number
console.log(n); // Output the result of the operation, which will be 10

//Falsey values 0, ``, null, undefined, NaN, false
let falseyValue = 0; // Example of a falsey value

// = Assignment operator
// == Equality operator (loose) converts types if necessary
// === Strict equality operator checks both value and type
// != Inequality operator (loose) converts types if necessary
// !== Strict inequality operator checks both value and type

const inputName = prompt("What is your name?");// Prompt the user for their name
console.log(`Hello, ${inputName}!`); // Greet the user with their name

// Using alert to notify the user
alert("This is an alert message."); // Alert the user with a message

//Boolean logical operators
let isAdult = age >= 18; // Check if the person is an adult
let hasLicense = true; // Assume the person has a license

// Using logical AND (&&) and OR (||) operators
if (isAdult && hasLicense) {
    console.log(`${name} is an adult with a license.`);
} else if (isAdult || hasLicense) {
    console.log(`${name} is either an adult or has a license.`);
} else {
    console.log(`${name} is neither an adult nor has a license.`);
}

const hasDriversLicense = true; // Assume the person has a driver's license
const hasInsurance = false; // Assume the person does not have insurance

console.log(hasDriversLicense && hasInsurance); // Check if both conditions are true
console.log(hasDriversLicense || hasInsurance); // Check if at least one condition is true
console.log(!hasDriversLicense); // Check if the person does not have a driver's license

if (hasDriversLicense && hasInsurance) {
    console.log(`${name} can drive legally.`);
} else {
    console.log(`${name} cannot drive legally.`);
}

//Expressions vs statements - Expressions evaluate to values, statements perform actions
// An expression is a piece of code that evaluates to a value
let expressionResult = 5 + 3; // This is an expression that evaluates to 8
console.log(expressionResult); // Output the result of the expression

// A statement is a complete instruction, like the console.log above
if (expressionResult > 5) { // This is a statement
    console.log("The expression result is greater than 5.");
}

const city = "New York"; // Using const for a constant value
city !== "Los Angeles" ? console.log("The city is not Los Angeles.") : console.log("The city is Los Angeles."); // Ternary operator for conditional output
console.log(`The city is ${city == `New York` ? `New York` : `Los Angeles`}.`); // Using a ternary operator to check the city and output accordingly