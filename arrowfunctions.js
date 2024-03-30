/*

Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
Arrow functions cannot be used as constructors. Calling them with new throws a TypeError.
They also don't have access to the new.target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions.

() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}


Rest parameters, default parameters, and destructuring within params are supported, and always require parentheses:
(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression


async param => expression
async (param1, param2, ...paramN) => {
  statements
}


tradational way to new way
// Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
a => a + 100;


// Traditional anonymous function
(function (a, b) {
  return a + b + 100;
});

// Arrow function
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Traditional anonymous function (no parameters)
(function () {
  return a + b + 100;
});

// Arrow function (no parameters)
() => a + b + 100;


Arrow functions are always unnamed. If the arrow function needs to call itself,
 use a named function expression instead. You can also assign the arrow function to a variable so it has a name.
 // Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100;


Function body
Arrow functions can have either an expression body or the usual block body.

In an expression body, only a single expression is specified, which becomes the implicit return value.
In a block body, you must use an explicit return statement.
const func = (x) => x * x;
// expression body syntax, implied "return"

const func2 = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed


Returning object literals using the expression body syntax (params) => { object: literal } does not work as expected.
const func = () => { foo: 1 };
// Calling func() returns undefined!

const func2 = () => { foo: function () {} };
// SyntaxError: function statement requires a name

const func3 = () => { foo() {} };
// SyntaxError: Unexpected token '{'
This is because JavaScript only sees the arrow function as having an expression body
if the token following the arrow is not a left brace,so the code inside braces ({}) is parsed as a
sequence of statements, where foo is a label, not a key in an object literal.

To fix this, wrap the object literal in parentheses:
const func = () => ({ foo: 1 });


Cannot be used as methods
Arrow function expressions should only be used for non-method functions because they do not have their own this
"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // logs undefined
obj.c(); // logs 10, Object

Cannot be used as constructors
Arrow functions cannot be used as constructors and will throw an error when called with new.
 They also do not have a prototype property.
 const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false


//OPTIONAL
Cannot be used as generators
The yield keyword cannot be used in an arrow function's body (except when used within
generator functions further nested within the arrow function). As a consequence, arrow functions cannot be used as generators.


An arrow function cannot contain a line break between its parameters and its arrow.
const func = (a, b, c)
  => 1;
// SyntaxError: Unexpected token '=>'
For the purpose of formatting, you may put the line break after the arrow or use parentheses/braces around the function body,
 as shown below. You can also put line breaks between parameters.
 const func = (a, b, c) =>
  1;

const func2 = (a, b, c) => (
  1
);

const func3 = (a, b, c) => {
  return 1;
};

const func4 = (
  a,
  b,
  c,
) => 1;


//OPTIONAL
Precedence of arrow
Although the arrow in an arrow function is not an operator, arrow functions have special parsing rules that interact
differently with operator precedence compared to regular functions.


let callback;

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments

Because => has a lower precedence than most operators, parentheses are necessary to avoid
callback || () being parsed as the arguments list of the arrow function.
callback = callback || (() => {});




Using arrow functions examples
// An empty arrow function returns undefined
const empty = () => {};

(() => "foobar")();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
  .then((a) => {
    // …
  })
  .then((b) => {
    // …
  });

// Parameterless arrow functions that are visually easier to parse
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);



//OPTIONAL
Perhaps the greatest benefit of using arrow functions is with methods like setTimeout() and
EventTarget.prototype.addEventListener() that usually require some kind of closure,
call(), apply(), or bind() to ensure that the function is executed in the proper scope.

With traditional function expressions, code like this does not work as expected:
const obj = {
  count: 10,
  doSomethingLater() {
    setTimeout(function () {
      // the function executes on the window scope
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // logs "NaN", because the property "count" is not in the window scope.

With arrow functions, the this scope is more easily preserved:
const obj = {
  count: 10,
  doSomethingLater() {
    // The method syntax binds "this" to the "obj" context.
    setTimeout(() => {
      // Since the arrow function doesn't have its own binding and
      // setTimeout (as a function call) doesn't create a binding
      // itself, the "obj" context of the outer method is used.
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // logs 11
*/

let testArrowFunction = x => console.log(x);
testArrowFunction(33);
let testAFWithDV = ({a,b} = {a:10,b:20})=>{
  console.log(a,b);
}
const testObj = {
};
const testObj2 = {
  a:45,
  b:'string'
};
testAFWithDV(testObj);//undefined undefined
testAFWithDV(testObj2)//45 string
testAFWithDV();//10 20

/*IIFE
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
The name IIFE is promoted by Ben Alman in his blog.
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
The second part creates the immediately invoked function expression () through which the JavaScript engine
will directly interpret the function.


Use cases
Avoid polluting the global namespace
Because our application could include many functions and global variables from different source files,
it's important to limit the number of global variables. If we have some initiation code that we don't need to use again,
we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a
function declaration or a function expression.
