/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(numbers[0], numbers[4], numbers[numbers.length - 1]);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
//reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
let min = Math.min(...numbers);
let max = Math.max(...numbers);

let sum = 0;
numbers.forEach(i => {sum+=i});
let avg = sum/numbers.length;

console.log(avg);
// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 
//python: it provides flexibility with data types, whereas JavaScript is limited to holding a single data type

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
var IT114L = 
{
    "coursecode": "IT114L",
    "name": "Web Systems and Technology",
    "units": 3,
    "numberOfStudents": 46,
    "professorName": "Job Lipat"
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.professorName = "Sir John Lim";
console.log(IT114L.professorName);
// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here

var curric = 
[{
        "coursecode": "IT114L",
        "name": "Web Systems and Technology",
        "units": 3,
        "numberOfStudents": 46,
        "professorName": "Job Lipat"
    }, {
        "coursecode": "PE044",
        "name": "Path Fitness",
        "units": 2,
        "numberOfStudents": 50,
        "professorName": "Ferdinand Lim"
    }, {
        "coursecode": "CS107",
        "name": "Information System",
        "units": 3,
        "numberOfStudents": 40,
        "professorName": "Adomar Ilao"
    }
];
// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let total = 0;
curric.forEach(i => {total += i.units});
console.log(total);
// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 
//dictionaries: enable access to values through their corresponding keys 

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
numbers = [...numbers, 999];

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
var {coursecode: t, units: b} = {...IT114L};
console.log(t, b);