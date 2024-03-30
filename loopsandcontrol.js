/*LOOPS
The statements for loops provided in JavaScript are:

for statement
do...while statement
while statement
labeled statement
break statement
continue statement
for...in statement
for...of statement*/


//Labels
let i, j;

// The first for statement is labeled "loop1"
loop1: for (i = 0; i < 3; i++) {
  // The second for statement is labeled "loop2"
  loop2: for (j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Logs:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// for braking  if you don't use a label, you would need to use a boolean flag instead.
/*Using a labeled block with break
You can label statements other than loops, such as simple blocks, but only break statements can reference non-loop labels.*/
foo: {
  console.log("face");
  break foo;
  console.log("this will not be executed");
}
console.log("swap");

// Logs:
// "face"
// "swap"
//Labelled FUNCTIONS
L: function F() {}
//but in strict but it will throw an error
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
//Non-plain functions, such as generator functions and async functions can neither be labeled in strict code, nor in non-strict code:


console.log('---------------');
//for in
/* it is better to use a traditional for loop with a numeric index when iterating over arrays, because the for...in statement iterates over
 user-defined properties in addition to the array elements, if you modify the Array object (such as adding custom properties or methods).*/
 var arr = [1, 2, 3];
arr.customProperty = "hello";

// Using for...in loop
console.log("Using for...in loop:");
for (var key in arr) {
  console.log(key); // Prints 0, 1, 2, customProperty
}

// Using traditional for loop
console.log("Using traditional for loop:");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // Prints 1, 2, 3
}

console.log('using for...of loop:');
for(let element of arr){
  console.log(element);
}
console.log('---------------');
console.log('Exceptional handling.....');
//Exceptional handling
// function CustomException(message) {
//   const error = new Error(message);
//   return error;
// }
//
// CustomException.prototype = Object.create(Error.prototype);
// throw new CustomException('Exception message');
//throw
/*The throw statement throws a user-defined exception. Execution of the current function will
stop (the statements after throw won't be executed), and control will be passed to the first catch
 block in the call stack. If no catch block exists among caller functions, the program will terminate.*/
//  function getRectArea(width, height) {
//   if (isNaN(width) || isNaN(height)) {
//     throw new Error('Parameter is not a number!');
//   }
// }
//
// try {
//   getRectArea(3, 'A');
// } catch (e) {
//   console.error(e);
//   // Expected output: Error: Parameter is not a number!
//}
function isNumeric(x) {
  return ["number", "bigint"].includes(typeof x);
}

function sum(...values) {
  if (!values.every(isNumeric)) {
    throw new TypeError("Can only add numbers");
  }
  return values.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6
try {
  sum("1", "2");
} catch (e) {
  console.error(e); // TypeError: Can only add numbers
}

console.log('trycatch...');
// try {
//   tryStatements
// } catch (exceptionVar) {
//   catchStatements
// } finally {
//   finallyStatements
// }
//Unlike other constructs such as if or for, the try, catch, and finally blocks must be blocks, instead of single statements.
/*A catch block contains statements that specify what to do if an exception is thrown in the try block.
If any statement within the try block (or in a function called from within the try block) throws an exception,
 control is immediately shifted to the catch block. If no exception is thrown in the try block, the catch block is skipped.

The finally block will always execute before control flow exits the try...catch...finally construct.
 It always executes, regardless of whether an exception was thrown or caught.
*/

//Catch Binding
/*Catch binding
When an exception is thrown in the try block, exceptionVar (i.e., the e in catch (e)) holds the exception value.
You can use this binding to get information about the exception that was thrown. This binding is only available in the catch block's scope.*/
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}
/*If you don't need the exception value, you can omit it along with the enclosing parentheses.*/
function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
/*If an exception is thrown from the try block, even when there's no catch block to handle the exception, the finally block still executes,
 in which case the exception is still thrown immediately after the finally block finishes executing.*/
 /*
Immediately before a control-flow statement (return, throw, break, continue) is executed in the try block or catch block, finally block will be executed.
 Control flow statements (return, throw, break, continue) in the finally block will "mask" any completion value of the try block or catch*/
 function doIt() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

doIt(); // returns 2

/*Unconditional catch block
When a catch block is used, the catch block is executed when any exception is thrown from within the try block.
For example, when the exception occurs in the following code, control transfers to the catch block.*/
try {
  throw "myException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
/*Conditional catch blocks
You can create "Conditional catch blocks" by combining try...catch blocks with if...else if...else structures, like this:*/
try {
  myroutine(); // may throw three types of exceptions
} catch (e) {
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else if (e instanceof RangeError) {
    // statements to handle RangeError exceptions
  } else if (e instanceof EvalError) {
    // statements to handle EvalError exceptions
  } else {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
  }
}

/*Returning from a finally block
If the finally block returns a value, this value becomes the return value of the entire try-catch-finally statement,
regardless of any return statements in the try and catch blocks. This includes exceptions thrown inside of the catch block:*/
(() => {
  try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
      throw ex;
    } finally {
      console.log("finally");
      return;
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
})();

// Logs:
// "inner" "oops"
// "finally"
/*Utilizing error objects
When a runtime error occurs, a new Error object is created and thrown. With this Error object, we can determine the type of the Error and handle it according to its type.

Types of Errors:
Besides error constructors, Javascript also has other core Error constructors.

AggregateError
EvalError
InternalError
RangeError
ReferenceError
SyntaxError*/
