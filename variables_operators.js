const z = 3+5;
console.log(z);
/*At a high level, an expression is a valid unit of code that resolves to a value.
 There are two types of expressions: those that have side effects (such as assigning values) and those that purely evaluate.*/

 //binary operator
 /*3 + 4 or x * y. This form is called an infix binary operator,
 because the operator is placed between two operands. All binary operators in JavaScript are infix.*/
 const sum = 34 +35;
 //Unary operators
 let unaryExample = 5;
 unaryExample++;
 console.log(sum,unaryExample);

//Assignment operators
/*If an expression does not evaluate to an object, then assignments to properties of that expression do not assign:*/
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
/*In strict mode, the code above throws, because one cannot assign properties to primitives.
It is an error to assign values to unmodifiable properties or to properties of an expression without properties (null or undefined).*/

/*
Destructuring
For more complex assignments, the destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals.

Without destructuring, it takes multiple statements to extract values from arrays and objects:*/
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];
//With destructuring, you can extract multiple values into distinct variables using a single statement:
const [three3, four4, five5] = foo;


//chaining
let x;
const y = (x = f()); // Or equivalently: const y = x = f();
console.log(y); // Logs the return value of the assignment x = f().

console.log(x = f()); // Logs the return value directly.

function f(){
  return 3;
}

// An assignment expression can be nested in any place
// where expressions are generally allowed,
// such as array literals' elements or as function calls' arguments.
console.log([0, x = f(), 0]);
console.log(f(0, x = f(), 0));



//Assigment chaining
    // function f() {
    //   console.log("F!");
    //   return 2;
    // }
    // function g() {
    //   console.log("G!");
    //   return 3;
    // }
    // let x, y;
    //
    // y = x = f();//x = 2,y=2
    // y = [f(), x = g()];//y = [2,3] and also prints F! and G!
    // x[f()] = g();//x[2] = 3 and printing also happens

/*
Avoid assignment chains
Chaining assignments or nesting assignments in other expressions can result in surprising behavior.
For this reason, chaining assignments in the same statement is discouraged.

In particular, putting a variable chain in a const, let, or var statement often does not work.
Only the outermost/leftmost variable would get declared; other variables within the assignment
chain are not declared by the const/let/var statement. For example:*/


/*Comparison operators
A comparison operator compares its operands and returns a logical value based on whether the comparison is true.
The operands can be numerical, string, logical, or object values.
Strings are compared based on standard lexicographical ordering, using Unicode values*/

let leftOperand  = 4;
let rightOperand = 5;
console.log('the result of OR opeartor: ',leftOperand | rightOperand,'the result of AND opeator:',leftOperand & rightOperand);//5 , 4

/*
Short-circuit evaluation
As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules:

false && anything is short-circuit evaluated to false.
true || anything is short-circuit evaluated to true.*/
/*Note that for the second case, in modern code you can use the Nullish coalescing operator (??) that works like ||,
 but it only returns the second expression, when the first one is "nullish", i.e. null or undefined.
 It is thus the better alternative to provide defaults, when values like '' or 0 are valid values for the first expression, too.*/


 //Conditional opearator
// const status = age >= 18 ? "adult" : "minor";

 const xv2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 const av2 = [x, x, x, x, x];

 for (let i = 0, j = 9; i <= j; i++, j--) {
   //                              ^
   console.log(`a[${i}][${j}]= ${av2[i][j]}`);
 }


//Unary opearators
//delete Math.PI; // returns false (cannot delete non-configurable properties)
//The delete operator deletes an object's property. The syntax is:
const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)


//typeof
/*const myFun = new Function("5 + 2");
const shape = "round";
const size = 1;
const foo = ["Apple", "Mango", "Orange"];
const today = new Date();
typeof myFun; // returns "function"
typeof shape; // returns "string"
typeof size; // returns "number"
typeof foo; // returns "object"
typeof today; // returns "object"
typeof doesntExist; // returns "undefined"
typeof true; // returns "boolean"
typeof null; // returns "object"
predifined OBJECTS
typeof Date; // returns "function"
typeof Function; // returns "function"
typeof Math; // returns "object"
typeof Option; // returns "function"
typeof String; // returns "function"
*/

/*in
The in operator returns true if the specified property is in the specified object. The syntax is:
propNameOrNumber in objectName
// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false
// (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math; // returns true
const myString = new String("coral");
"length" in myString; // returns true

// Custom objects
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true
*/


/*
instanceof
The instanceof operator returns true if the specified object is of the specified object type. The syntax is:
objectName instanceof objectType

const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}

*/


/*
this
Use the this keyword to refer to the current object. In general, this refers to the calling object in a method. Use this either with the dot or the bracket notation:

this["propertyName"];
this.propertyName;
*/

/* more unary opeartor are
grouping ()
New
super*/
