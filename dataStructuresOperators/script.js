'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Brusschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

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