/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber > 50) console.log("more than fifty");
// TODO 2.2 Display whether the random number is odd or even
// Your code here
console.log(randomNumber%2==0?"Even":"Odd");

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 3 == 0 && randomNumber % 5 == 0) console.log("fizzbuzz");
else if (randomNumber % 3 == 0) console.log("fizz");
else if (randomNumber % 5 == 0) console.log("buzz");
else console.log(randomNumber);


let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
toDisplay = randomNumber%2==0?"Even":"Odd";
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer:
// Shortened if-else statement.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (let i=1; i<=n; i++)
{console.log(i);}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here

let i = 0;
while (i < list.length) 
{console.log(list[i++]);} 

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: 
// do while: executes initially before condition checking for subsequent loops
// while: checks the conditions right away

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for (const i of list) 
{console.log(i);}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for (const i in list) 
{console.log(list[i]);}
// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach(i => console.log(i));

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 
// of: it iterates through object types, in iterates through indices, and each is used for iterating through an array

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try 
{
    if(denominator === 0)
    {throw new Error("Division by zero error")}
    console.log(numerator / denominator);
} 
catch(error) 
{console.log("error");} 
finally {console.log("cleaning up resources");}