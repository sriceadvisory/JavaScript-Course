'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Brusschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 23,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`)
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your order with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient)
    console.log(otherIngridients);
  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})
//using default values for the function 
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
});

//spread operator, write multiple values individually and can be applied to all iterables such as strings, arrays, maps and sets. 
let goodArr = [7, 8, 9]
const newArr = [1, 2, ...goodArr];
console.log(newArr);

//adding new element to the object. Only can be used when values would be seperated by commas  
const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu]

//joining arrays
const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(wholeMenu)
//real world example for referrence 
//const ingridients = [prompt("Let's make pasta! Ingridient1 ?"), prompt("Ingridient 2?"), prompt("Ingridient 3?")]
//console.log(ingridients);

//restaurant.orderPasta(...ingridients);

//objects 
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' }
console.log(newRestaurant)
//shadow copy of the resturant object
const restaurantCopy = { ...restaurant };

//deconstructing the object and pulling the information 
const { name, openingHours, categories } = restaurant
console.log(name, openingHours, categories)

//renaming the elements while deconstructing the elements
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags)

//defaulting values
const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters)

//mutating values 
let d = 111;
let w = 999;
const obj = { w: 23, d: 7, x: 14 };

({ w, d } = obj);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//left side is array destructuring and the original array is still fine
const [x, y, z] = arr;
console.log(x, y, z);

//breaking out the elements of the array with wording
let [main, , secondary] = restaurant.categories
console.log(main, secondary);

//switching variables
[main, secondary] = [secondary, main]
console.log(main, secondary);

//Recieved 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);

let nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//defaulting values in an array that we do not know the length it will be
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//nested objects
const { fri: { open, close } } = openingHours
console.log(open, close);

//rest pattern and parameters - The spread operator is used where we would otherwise write values separated by commas, while the rest pattern is used where we would write variable names separated by commas.
//spread - on the right side
const secondArr = [1, 2, ...[3, 4]];
//Rest - on the left side
const [alt, cmd, ...others] = [1, 2, 3, 4, 5]

console.log(a, b, others);

//Rest element must be the last in the assignment and can only be one
const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, Risotto, otherFood);

//taking opening hours and building a weekend schedule from them. 
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays)

//functions - rest arguments 
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
};

const dip = [23, 5, 7];
add(...dip)

restaurant.orderPizza('mushrooms', 'peporoni', 'pineapple')

//Can be used on any data type && return any data type 
//short circuitting-Will return the first truthy value in teh expresion
console.log(undefined || 0 || '' || "Hello")

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10

restaurant.numGuests = 45

const guest2 = restaurant.numGuests || 10

//AND operator 
//just like the || operator and will short circut when it senses a false value returned from the expression 
console.log('Hello' && 23 && null && 'jonas')

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

//Nullish coalescing
restaurant.numGuests = 0
const guests = restaurant.numGuests || 10;
//only covers null or undefined to skip and move on to the next element. 
const correctGuest = resturant.numGuests ?? 10;
console.log(guestCorrect)

//Logical Assignment Operators 

const rest1 = {
  name: 'Carpi',
  numGuest: 20
}

const rest2 = {
  name: 'Le Pizza',
  owner: 'Gerald Smith'
}
//return num of guest unless it is false. 
rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;

//|| logical assignment operator, will assign if falsy.  
rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

// can use the nullish coalescing which will only covers null or undefined to skip and assign default value.
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

//And assignment follows the same rules but will assign the default value instead of just returning it.  
rest2.owner &&= 'Unknown'
rest1.owner &&= 'Unknown'