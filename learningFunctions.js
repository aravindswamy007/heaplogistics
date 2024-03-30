//functions can be declared via function statement or function expressions
/*
Function expressions
While the function declaration above is syntactically a statement, functions can also be created by a function expression.

Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16

However, a name can be provided with a function expression.
Providing a name allows the function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces:

Function expressions are convenient when passing a function as an argument to another function.
The following example shows a map function that should receive a function as first argument and an array as second argument:

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const cube = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]



Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code).
The scope of a function declaration is the function in which it is declared (or the entire program, if it is declared at the top level).

There are other ways to call functions. There are often cases where a function needs to be called dynamically,
or the number of arguments to a function vary, or in which the context of the function call needs to be set to a specific object determined at runtime.

Function hoisting only works with function declarations — not with function expressions. The following code will not work:

console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};


*/
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
//  console.log(num1); error
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"


//Recursion
function loop(x) {
  // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
  if (x >= 10) {
    return;
  }
  // do stuff
  //console.log('loop is called',x);
  loop(x + 1); // the recursive call
  //console.log('loop call ended',x);
}
let loopResult = loop(0);
console.log(loopResult);

/*function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  foo(i - 1);
  console.log(`end: ${i}`);
}
foo(3);

// Logs:
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3
*/
/*const foo = function bar() {
  // statements go here
};
Within the function body, the following are all equivalent:

bar()
arguments.callee()
foo()*/

/*
Name conflicts
When two arguments or variables in the scopes of a closure have the same name, there is a name conflict.
 More nested scopes take precedence. So, the innermost scope takes the highest precedence, while the outermost scope takes the lowest.
 function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20 (instead of 10)
*/






/*
Function parameters
There are two special kinds of parameter syntax: default parameters and rest parameters.

Default parameters
In JavaScript, parameters of functions default to undefined. However,
 in some situations it might be useful to set a different default value. This is exactly what default parameters do.

 ---In Past--
 function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
---New Declaration--
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5

the following function will throw a ReferenceError when invoked,
because the default parameter value does not have access to the child scope of the function body:
function f(a = go()) {
  function go() {
    return ":P";
  }
}

f(); // ReferenceError: go is not defined

This function will print the value of the parameter a,
 because the variable var a is hoisted only to the top of the scope created for the function body,
  not the parent scope created for the parameter list, so its value is not visible to b.

  function f(a, b = () => console.log(a)) {
   var a = 1;
   b();
 }

 f(); // undefined
 f(5); // 5

 function test(num = 1) {
   console.log(typeof num);
 }

 test(); // 'number' (num is set to 1)
 test(undefined); // 'number' (num is set to 1 too)

 // test with other falsy values:
 test(""); // 'string' (num is set to '')
 test(null); // 'object' (num is set to null)


 Evaluated at call time
 The default argument is evaluated at call time.
 Unlike with Python (for example), a new object is created each time the function is called.
 function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], not [1, 2]

Earlier parameters are available to later default parameters
Parameters defined earlier (to the left) are available to later default parameters:
function greet(name, greeting, message = `${greeting} ${name}`) {
  return [name, greeting, message];
}

greet("David", "Hi"); // ["David", "Hi", "Hi David"]
greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]


Destructured parameter with default value assignment
You can use default value assignment with the destructuring assignment syntax.

A common way of doing that is to set an empty object/array as the default value for the destructured parameter;
for example: [x = 1, y = 2] = []. This makes it possible to pass nothing to the function and still have those values prefilled:

function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray(); // 3
preFilledArray([]); // 3
preFilledArray([2]); // 4
preFilledArray([2, 3]); // 5

// Works the same for objects:
function preFilledObject({ z = 3 } = {}) {
  return z;
}

preFilledObject(); // 3
preFilledObject({}); // 3
preFilledObject({ z: 2 }); // 2


*/


/*Rest parameters
The rest parameter syntax allows a function to accept an
indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
myFun("one", "two");

// a, "one"
// b, "two"
// manyMoreArgs, [] <-- still an array


A function definition can only have one rest parameter,
and the rest parameter must be the last parameter in the function definition.
function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}

The rest parameter is not counted towards the function's length property.

The difference between rest parameters and the arguments object

The arguments object is not a real array, while rest parameters are Array instances,
 meaning methods like sort(), map(), forEach() or pop() can be applied on it directly.

 function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
//OPTIONAL
function fn(a, b) {
  const normalArray = Array.prototype.slice.call(arguments);
  // — or —
  const normalArray2 = [].slice.call(arguments);
  // — or —
  const normalArrayFrom = Array.from(arguments);

  const first = normalArray.shift(); // OK, gives the first argument
  const firstBad = arguments.shift(); // ERROR (arguments is not a normal array)
}
//OPTIONAL

*/

function f(a, b = () => console.log(a)) {
 var a = 1;
 b();
}

f(); // undefined
f(5); // 5
f(4,()=>console.log('hi'));

let x;

let defaultArray = [x=7,5+10,'hi'];
console.log(defaultArray,x);

function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray(); // 3
preFilledArray([]); // 3
preFilledArray([2]); // 4
preFilledArray([2, 3]); // 5
console.log(preFilledArray());

function testingArray(arr=[]){
  console.log(arr);
}

const testArray = [1,2,3,4,5];

testingArray(testArray);
testingArray([]);

function testingRestParams(...args){
  console.log(args);
}

const testRestArray = [1,2,2,3,4,45,6];
testingRestParams(testRestArray);/*
[
  [
    1,  2, 2, 3,
    4, 45, 6
  ]
]*/
testingRestParams(1,2,3,4,5,6); //[ 1, 2, 3, 4, 5, 6 ]
