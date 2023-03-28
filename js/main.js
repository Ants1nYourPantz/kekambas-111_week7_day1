console.log('Hello from the main.js file!');

// Basics of JavaScript
// Comments using //

/* 
    Multi-line Comment in JavaScript 

    --Variable Declaration in JavaScript
    Primitive Data Types: String, Boolean, Number, Undefined, Null
    Object Types: Object, Arrays, Functions
*/


// Variable Declaration in JavaScript
// use 'var' to declare a globally-scoped or function-scoped variable
// optional value - use camelCase to name variables

// var myName;

// console.log(myName);



// String Declaration
var myName = 'Anthony';

// console.log() is equivalent to python's print() function
console.log(myName);
console.log(typeof myName);

// Stings can be created using '' or "" or ``, The tick marks (``) have a special behavior to format the String
// Tick Marks + ${} is the equivalent to f'{}' This is called and interpolated string
console.log('My name is ${myName}');
console.log("My name is ${myName}");
console.log(`My name is ${myName}`);

// NUMBER TYPES ALL FALL UNDER THE SAME TYPE OF 'number'
// Integer
var myAge = 99;
console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14;
console.log(pi);
console.log(typeof pi);

// Boolean
var trueBool = true;
console.log(trueBool);
console.log(typeof trueBool);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);

// Undefined
var something;
console.log(something);
console.log(typeof something);

// Null
var someNull = null;
console.log(someNull);
console.log(typeof someNull);

// Object Data Type

// Object
var myObject = {};
console.log(myObject);
console.log(typeof myObject);

var anotherObject = {
    prop1: 'Hello World',
    abc: 123
};
console.log(anotherObject);
console.log(typeof anotherObject);

// Array
var firstArray = [];
console.log(firstArray);
console.log(typeof firstArray);

var newArray = ['Anthony', 'Joe', 'James', 'Tyler']
console.log(newArray)
console.log(typeof newArray)

// Function
function abc(){};

console.log(abc)
console.log(typeof abc)


// Accessing Properties from an object
var person = {
    first: 'Emily',
    last: 'Murphy',
    languages: ['JavaScript', 'Python']
};

console.log(person);

// Bracket notation
console.log(person['first'])
// Dot notation
console.log(person.last)

console.log(person.languages)

// When accessing properties in an array (aka the indices), use bracket notation
console.log(person.languages[0])
console.log(person.languages[1])

// All array objects also have a 'length' property
console.log(person.languages.length)

//  Clear the console
console.clear();


// Variable Declaration - var vs let vs const
// Variable Hoisting
var myNewVariable = 'New variable'

console.log(myNewVariable);

var myNewVariable = 'New variable'

// let
// Declares a Block-Scoped local variable, optional value

// console.log(myCountry); Must be after the 'let' statement

let aCountry = 'United States';

console.log(aCountry);

if (true){
    var aState = 'New Jersey'; //globally-scoped
    let aCity = 'Holland'; //block-scoped
    console.log(aCity, aState, aCountry);
};

// console.log(aCity, aState, aCountry); //aCity is not defined error

// const - similar to let (block-scoped)
// 2 differences 1. Needs a value when declared. 2. Cannot be reassigned.

if (true){
    let myFavColor = 'blue';
    console.log(myFavColor);
    myFavColor = 'red';
    console.log(myFavColor);

    const myLastName = 'Romano';
    console.log(myLastName);
    // myLastName = 'Lincon';
    // console.log(myLastName);
}
// console.log(myLastName); //myLastName wont work outside the block scope

