/*# Map, Filter, Reduce

#### 1. Get total orders
* Return the total amount of orders. 
*/

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

const totalAmount = orders.reduce((sum, order) => {
  return sum + order.amount;
}, 0);

console.log(totalAmount);

console.log("-------------------------------------");

/* #### 2. Increment by 1
```javascript 
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
``` 
* Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.*/

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const newArray = arrayOfNumbers.map((item) => item + 1);
console.log(newArray);

/*
#### 3. Filter Evens
* Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.
 */

function filterEvens(value) {
  return value % 2 === 0;
}
console.log([2, 14, 24, 32, 65, 1].filter(filterEvens));

/*#### 4. Filter Friends
 * Given an array, create a function which filters array based on a search query.*/

const cats = ["fifka", "bella", "mania", "effi", "sofcia"];
function catsFilter(catsArray, key) {
  return catsArray.filter((element) => element.includes(key));
}

console.log(catsFilter(cats, "f"));

/* #### 5. Sum Up
 * Write a function called sum that uses the reduce method to sum up an array of numbers. */

function sum(arrayOfNumbers) {
  return arrayOfNumbers.reduce((acc, curr) => acc + curr);
}
console.log(sum([3, 7, 5, 6]));

//#### 6. Square Root* Given an array of numbers, find the square root of each element in the array.

function squareRoot(arrayOfNumbers) {
  return arrayOfNumbers.map((el) => Math.sqrt(el));
}
console.log(squareRoot([1, 2, 3]));
