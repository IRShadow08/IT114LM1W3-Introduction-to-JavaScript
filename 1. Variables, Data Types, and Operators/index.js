/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var a = "hello";
console.log(a);
// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let g = "let keyword";

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const c = "consts";

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer:
// var = implies a global scope
// let = local, const = constant value throughout the code

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
{
    let num_a = 1;
    let num_b = 2;

    console.log(num_a + num_b);
    console.log(num_a - num_b);
    console.log(num_a * num_b);
    console.log(num_a / num_b);
    console.log(num_a % num_b);
}

// Checkpoint 1.2 What operators did you use?
// Answer: +,-,*,/,%
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
{
    let string_a = "Hello";
    let string_b = "World";

    console.log(string_a + " " + string_b);
}

// Checkpoint 1.3 What operators did you use?
// Answer: 

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
console.log(1 < 2);
console.log(1 > 2);
console.log(1 === 2);
console.log(1 != 2);

// Checkpoint 1.4 What operators did you use?
// Answer: <, >, ===, !=


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
console.log(0 in [0,1,2,3]);

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: Having an empty list has a value of false, resulting into true if === false as well.
// Your code here
console.log([] == false);