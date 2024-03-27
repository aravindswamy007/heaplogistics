//practicing variables
let message = 'this is my first javascript program';

let a =10, b= 20, c = 9;
console.log(message);
console.log(a,b,c);

let $ = 'hello';
let _ = 'world';
console.log($,_);

//strict
"use strict";

num = 5; // error: num is not defined

//when to use uppercase for constanst
const PI = 3.1415;
const res = 33+44;
console.log(PI,res);


//learning datatypes
//there are 7 primitive datatypes and rest everything in js are objects
//js also can comvert primitive type to objects via autoboxing and also supports wrapper classes
// 7 primitive types are number,strings,null,undefined,boolean,symbol,bigint
let number = 55;
console.log(number.length);
let errorMessage = 'this is an error message';
console.log(errorMessage.length);

/* autoboxing process
var str = 'Autoboxing';
var strBoxed = new String(str);
console.log(strBoxed.length);
strBoxed = undefined;*/

/* objects
An array is an ordered collection of data.
Strings and arrays are both sequences of data. Hence the same concepts of indexes and length apply to both of them.
*/
const arr = [1,3];
console.log(arr[4]);//undefined
//Owing to the fact that sort(), by default, converts each value in the respective array into a string before
const arrForSorting = ['apple',55,'mango',-3,null];
console.log(arrForSorting.sort()); //[ -3, 55, 'apple', 'mango', null ]

//FUNCTIONS
function demo(num){
  return num*num;
};

console.log(demo(9));

//OBJECTS
let exampleObject = {
  'name':'aravind',
  age: 20,
  isHealthy: function(){
    return true;
  }
};

console.log(exampleObject);
//accessing objects with [] and . operator
console.log(exampleObject.name,exampleObject['age']);
//adding more properties to the object
exampleObject.favoriteDrink = 'sharjah';
exampleObject['expectedResult'] = true;
console.log(exampleObject);

//type of
console.log(typeof null,typeof 'string',typeof {},typeof demo(5));//object

//Numeric conversion
let age = Number('this is a string value');
console.log(age);//NaN
console.log(Number(true),Boolean(1),Boolean(''),Boolean('a sentence'));
//One operator that does not trigger implicit type coercion is ===, which is a strict equality operator,
//whereas the loose equality operator == does both comparison and conversion if need

 
