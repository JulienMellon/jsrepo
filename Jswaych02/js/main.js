/*
Coding time!
Build a habit of choosing good variable names in all exercises, starting with these ones.

Improved hello
Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
*/
    let first = prompt('enter First Name', 'firstName')
    let last = prompt('enter last name now', 'lastnamegoeshere')
    alert( first +' '+ last )


/*
Final values
Observe the following program and try to predict the final values of its variables.
*/
let a = 2;
a -= 1; //a == 1
a++; // 2
let b = 8; //b == 8 
b += 2; // b == 10
const c = a + b * b; // 102
const d = a * b + b; // 30
const e = a * (b + b); // 2 * (10 + 10) === 40
const f = a * b / a; // 10
const g = b / a * a; // 10 / 2 * 2 = === 10
console.log(a, b, c, d, e, f, g);
//Check your prediction by executing it.

/*

VAT calculation
Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

*/

let vatCalc = () => {
    vat = 20.6
    let price = Number( prompt('Whats the price?', '0') )
    let result = price + ( price*vat*0.01)
    alert( result )
}  

vatCalc()


/*

From Celsius to Fahrenheit degrees
Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

*/

function convertCtoF(degreesCentigrade){
    let degreesF = degreesCentigrade * 9/5 +32
    return degreesF
}

alert(`Result is ${convertCtoF( prompt('Degrees C', 'Degs C') )} degrees F` )

/*


Variable swapping
Observe the following program.
*/

let number1 = 5;
let number2 = 3;

let temporary = number1
number1 = number2
number2 = temporary

console.log(number1); // Should show 3
console.log(number2); // Should show 5
/*Add the necessary code to swap the values of variables number1 and number2.

T> This exercise has several valid solutions. You may use more than two variables to solve it.
*/

