'use strict';

function logger() {
    console.log('This is a logger function from script2.js');
}

//Calling, running, executing the logger function
logger();
logger();
logger();

function greet(names, ages, isEmployed) {
    const oneLiner = `Hello, my name is ${names}. I am ${ages} years old and it is ${isEmployed} that I am employed.`;
    return oneLiner
}

const shonName = greet('Shon', 29, true);// Calling the greet function with parameters

const susyName = greet('Susy', 29, false); // Output the result of the greet function

console.log(shonName); // Output the result of the greet function
console.log(susyName); // Output the result of the greet function

//Function declaration vs expression
function calcAge1(birthYear) {
    return 2025 - birthYear; // Using a function declaration to calculate age
}

const age1 = calcAge1(1995); // Calling the function to calculate age
console.log(`Age calculated using function declaration: ${age1}`); // Output the calculated age

//Function expression
const calcAge2 = function (birthYear) { // Assigning a function expression to a variable
    return 2025 - birthYear; // Using a function expression to calculate age
};

const age2 = calcAge2(1996);
console.log(`Age calculated using function expression: ${age2}`); // Output the calculated age

//arrow function
const calcAge3 = (birthYear) => 2025 - birthYear; // Using an arrow function to calculate age
const age3 = calcAge3(1997); // Calling the arrow function to calculate age
console.log(`Age calculated using arrow function: ${age3}`); // Output the calculated age

const yearsToRetirement = (birthYear) => {
    const age = 2025 - birthYear; // Calculate age
    const retirementAge = 65; // Define retirement age
    return retirementAge - age; // Return years to retirement
};

console.log(`Years to retirement: ${yearsToRetirement(1995)}`); // Output years to retirement

//functions calling other functions
function displayRetirementInfo(birthYear) {
    const yearsLeft = yearsToRetirement(birthYear); // Call the yearsToRetirement function
    console.log(`You have ${yearsLeft} years left until retirement.`); // Output the years left until retirement
}

displayRetirementInfo(1995); // Call the function to display retirement info

//arrays methods
const friends = ['Alice', 'Bob', 'Charlie']; // Using an array to store friends' names
friends.push('David'); // Adding a new friend to the array
friends.pop(); // Removing the last friend from the array
friends.unshift('Eve'); // Adding a friend to the beginning of the array
friends.shift(); // Removing the first friend from the array
friends[1] = 'Frank'; // Changing the second friend's name
friends.at(0); // Accessing the first friend in the array
console.log(friends.includes('Alice')); // Checking if 'Alice' is in the array
friends.indexOf('Charlie'); // Finding the index of 'Charlie' in the array
friends.length - 1; // Getting the last index of the array
friends.length; // Getting the length of the array
console.log(friends[2]); // Output the friends array
console.log(friends)

const Shon = [`Shon`, `Rice`, 30, `Billing`]; // Using arrays to store information about Shon
const Susy = [`Susy`, `Rice`, 29, `Marketing`]; // Using arrays to store information about Shon and Susy
const people = [Shon, Susy]; // Combining Shon and Susy into a single array
console.log(people); // Output the combined array of people

//objects
const husband = { // Using an object to store information about Shon
    firstName: 'Shon',
    lastName: 'Rice',
    birthYear: 1995, // Using birthYear to calculate age
    age: 2025 - 1995, // Calculating age directly
    job: 'Billing',
    friends: ['Vern', 'David', 'Don'], // Adding a friends array to the object,
    // Using a method to calculate age
    calcAge: function (birthYear) { // Adding a method to calculate age
        return 2025 - this.birthYear; // Using 'this' to refer to the object
    },

    getSummary: function () { // Adding a method to get a summary of the object
        return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job}.`;
    }
};

const wife = { // Using an object to store information about Susy
    firstName: 'Susy',
    lastName: 'Rice',
    birthYear: 1996, // Using birthYear to calculate age
    age: 2025 - 1996, // Calculating age directly
    job: 'Marketing',
    friends: ['Diana', 'Claire', 'Daisy'], // Adding a friends array to the object
    // Using a method to calculate age
    calcAge: function (birthYear) { // Adding a method to calculate age
        return 2025 - this.birthYear; // Using 'this' to refer to the object
    },

    getSummary: function () { // Adding a method to get a summary of the object
        return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job}.`;
    }
};

console.table(husband); // Output the husband object
console.table(wife); // Output the wife object

//Accessing object properties dot notation and template literals
console.log(`${husband.firstName} ${husband.lastName} is ${husband.age} years old and works in ${husband.job}.`); // Using template literals to access object properties
console.log(`${wife.firstName} ${wife.lastName} is ${wife.age} years old and works in ${wife.job}.`); // Using template literals to access object properties

//Accessing object properties bracket notation
console.log(`${husband['firstName']} ${husband['lastName']} is ${husband['age']} years old and works in ${husband['job']}.`); // Using bracket notation to access object properties
console.log(`${wife['firstName']} ${wife['lastName']} is ${wife['age']} years old and works in ${wife['job']}.`); // Using bracket notation to access object properties

const interestedIn = prompt("What do you want to know about Shon? Choose between firstName, lastName, age, job, or friends:"); // Prompt user for input
console.log(husband[interestedIn]); // Output the requested property of the husband object
//Object methods

if (husband[interestedIn]) {
    console.log(husband[interestedIn]); // Valid key, print value
} else {
    console.log("Property not found!"); // Invalid key, print fallback
}

//adding properties to objects
husband.location = 'California'; // Adding a new property to the husband object
husband['email'] = 'shon@shon.com'; // Adding another property using bracket notation

console.log(`${husband.firstName} has ${husband.friends.length} friends, and his best friend is ${wife.firstName}`); // Output the updated husband object

console.log(husband[`calcAge`](1995)); // Calling the calcAge method of the husband object
console.log(wife[`calcAge`](1996)); // Calling the calcAge method of the wife object

console.log(husband.getSummary()); // Calling the getSummary method of the husband object
console.log(wife.getSummary()); // Calling the getSummary method of the wife object

//for loop to iterate over object properties
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

//Looping through object properties
for (const key in husband) { // Using for...in loop to iterate over object properties
    console.log(`${key}: ${husband[key]}`); // Output each key-value pair of the husband object
}

for (const key in wife) { // Using for...in loop to iterate over object properties
    console.log(`${key}: ${wife[key]}`); // Output each key-value pair of the wife object
}

//looping backwards through an array
const letters = ['a', 'b', 'c', 'd', 'e']; // Using an array to demonstrate looping backwards
for (let i = letters.length - 1; i >= 0; i--) { // Looping backwards through the letters
    console.log(letters[i]); // Output each element of the letters
}

//looping inside a loop
const nestedArray = [['a', 'b'], ['c', 'd'], ['e', 'f']];   // Using a nested array to demonstrate looping inside a loop    
for (let i = 0; i < nestedArray.length; i++) { // Outer loop to iterate through the nested array
    for (let j = 0; j < nestedArray[i].length; j++) { // Inner loop to iterate through each sub-array
        console.log(nestedArray[i][j]); // Output each element of the nested array
    }
}

//dice game while loop until 6
let dice = Math.trunc(Math.random() * 6) + 1; // Generate a random number between 1 and 6

while (dice != 6) {
    console.log(`You rolled a ${dice}. Try again!`); // Output the rolled number
    dice = Math.trunc(Math.random() * 6) + 1; // Generate a new random number
    if (dice === 6) {
        console.log("You rolled a 6! Game over."); // Output message when 6 is rolled
    }
}