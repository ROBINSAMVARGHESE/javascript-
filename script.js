
// 1. Create a program that asks the user for two numbers and prints their sum.

let num1 = 547;
let num2 = 239;
let sum = num1 + num2;
console.log("Sum :", sum)

// 2.Implement a program that calculates the area of a rectangle using user-provided length and width.

let a = 500;
let b = 60;
function areaRectangle(a, b) {
    let area = a * b;
    return area;
}
console.log("Area = " + areaRectangle(a, b));

// 3. Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).

var Age = 0;
if(Age >= 21) {
 console.log('you are eligible for voting');
} else {
 console.log('you are not eligible  for voting');
}

//4. Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).

let score = 70;

if (score >= 60) {
    console.log("You passed in the examination.");
}
else {
    console.log("You failed in the examination.");
}

// 5. Implement a program that checks if a user's entered number is positive, negative, or zero.

let num = 1;

switch (num) {
    case 1:
        console.log("Positive nunber");
        break;
    case -1:
        console.log("Negative number");
        break;
    case 0:
        console.log(" Number Zero");
        break;
}


// 6. Finding the user's age and checks if they are a child,teenger, Adult or Senior

let age = 20-59;
switch (age) {
    case 0 - 12:
        console.log('child');
        break;
    case 13 - 19:
        console.log('Teenger');
        break;
    case 20 - 59:
        console.log('Adult');
        break;
    case 60:
        console.log('Senior');
        break;

    default:
        console.log('invalid age');
}


// find the sum of all the odd numbers

const odd = [];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of arr) {
    if (num % 3 === 0) {
        odd.push(num);
    }
}
console.log(odd);




// find the square of each number




// using If-else statement for " you are eligble for voting "

var Age = 0;
if(Age >= 21) {
 console.log('you are eligible for voting');
} else {
 console.log('you are not eligible  for voting');
}


