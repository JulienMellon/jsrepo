console.log('toastertime!')

/*
Tasks
Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

P.S. Hint: use split to split the string into an array, transform it and join back.
*/

function camelize(str){
  //split string into words
  return str
  .split('-')
  //change first letter of each word except the first to capitals
  .map( (x,i) => i == 0? x :x[0].toUpperCase() + x.slice(1)  )
  //join elements into string 
  .join('')
  //return
}

let ex1 =  camelize ("background-color");
let ex2 = camelize("list-style-image");
let ex3 = camelize("-webkit-transition") == 'WebkitTransition';

console.log(ex1)
console.log(ex2)
console.log(ex3)
/*
Open a sandbox with tests.

solution
Filter range
importance: 4
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.
*/

function filterRange (arr, a, b){
  return arr.filter(
    (x, i) => x >= a && x <= b 
  )
  
}


let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered)

/*


For instance:

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)
Open a sandbox with tests.

solution

Filter range "in place"
importance: 4
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

*/

function filterRangeInPlace(somearr, g, h){
  return somearr.forEach( (x, i, a) => somearr[i] <= h && somearr[i] >= g ? x : somearr.splice(i, 1) )
}

let arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

filterRangeInPlace(arr2, 4, 7); // removed the numbers except from 1 to 4

console.log(arr2)

/*


For instance:


alert( arr ); // [3, 1]
Open a sandbox with tests.

solution
Sort in decreasing order
importance: 4
*/

function sortDecreasing(arr){
  return arr.sort( (a, b) => b - a, 0)
}

console.log( sortDecreasing(arr2) )

/*
*/
let arrToCopy = [5, 2, 1, -10, 8];
let anotherArrToCopy = ["HTML", "JavaScript", "CSS"];

function copyAndSortArray(arr){
  let newArr = arr
  newArr.sort( (a, b) => b - a )
  return newArr
}

let copiedAndSortedArr = copyAndSortArray(arrToCopy)

console.log(copiedAndSortedArr)
console.log(`originalArray ${arrToCopy}`)

console.log(anotherArrToCopy.slice().sort())


// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10

/*
solution
Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.


let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
solution



Create an extendable calculator
importance: 5
Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

/let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.
Open a sandbox with tests.
*/

//First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
class MakeCalculator {
  constructor(name) {
    this.methods = {
      '+' : (a, b) => a + b,
      '-' : (a, b) => a - b
    }
    this.calculation = function (str) {
      let split = str.split(' ');
      let o = split[1]
      let a = split[0]
      let b = split[2]
      return this.methods[o](a, b);
    };
    //Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
    
  }
}

let calc = new MakeCalculator('duhhhhh name goes here as a string')
console.log(calc.name)
console.log(calc.calculation('1 + 2'))

let powerCalc = new MakeCalculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

/*

solution
Map to names
importance: 5
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:

*/

function mapToName(arr){
  return arr.map( (x) => x.name )
}

console.table( )


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names =  mapToName( users );

console.log(names)

/*
alert( names ); // John, Pete, Mary
solution
Map to objects
importance: 5
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/ /*

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

solution
Sort users by age
importance: 5
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

*/

function sortByAge(arr){
  arr.sort( (a, b) => a.age - b.age )
}

/*

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
solution


Shuffle an array
importance: 3
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

solution
Get average age
importance: 4
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
solution
Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  // your code 
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
Open a sandbox with tests.
*/