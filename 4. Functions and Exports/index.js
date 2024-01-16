/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name) {
    console.log("Hello, " + name);
}
greet("John");
// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 
// function declaration: they are automatically defined when code is loaded, whereas function expressions are executed when variables are assigned during runtime

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
var calculateArea = function(l, w) 
{return l*w;};
console.log(calculateArea(5, 6));

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer:
// It provides functions as an argument

function callBackText(callback) 
{callback();}
callBackText(function() {console.log("WOO")});

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

let array = [1,2,3,4,5];
function modifyArray (arr, mod) 
{
    let i = 0;
    arr.forEach(o =>{ 
        array[i++] = mod(o);
    });
}

modifyArray(array, (num) => num+1)
console.log(array);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

const { add, PI } = require('./mathUtils.js');
console.log(add(6,4));
console.log(PI);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

isPalindrome = require('./isPalindrome.js');
console.log(isPalindrome("raccar"));


// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer:  
// It manages the export and import of objects across different files. The use of require and module.exports is recommended for ensuring compatibility with various versions, addressing historical conflicts, and similar concerns