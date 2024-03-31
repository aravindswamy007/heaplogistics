/*
Fixes mistakes that make it difficult for JavaScript
engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.


Strict mode applies to entire scripts or to individual functions.
It doesn't apply to block statements enclosed in {} braces;
attempting to apply it to such contexts does nothing.
eval code, Function code, event handler attributes, strings passed to setTimeout(),
and related functions are either function bodies or entire scripts, and invoking strict mode in them works as expected.

Strict mode for scripts
To invoke strict mode for an entire script, put the exact statement "use strict"; (or 'use strict';) before any other statements.
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";


Strict mode for functions
Likewise, to invoke strict mode for a function, put the exact statement "use strict";
(or 'use strict';) in the function's body before any other statements.
function myStrictFunction() {
  // Function-level strict mode syntax
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return `Hi! I'm a strict mode function! ${nested()}`;
}
function myNotStrictFunction() {
  return "I'm not strict.";
}


The "use strict" directive can only be applied to the body of functions with simple parameters.
Using "use strict" in functions with rest, default, or destructured parameters is a syntax error.
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}


Strict mode for modules
The entire contents of JavaScript modules are automatically in strict mode, with no statement needed to initiate it.
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;


Strict mode for classes
All parts of a class's body are strict mode code, including both class declarations and class expressions.
class C1 {
  // All code here is evaluated in strict mode
  test() {
    delete Object.prototype;
  }
}
new C1().test(); // TypeError, because test() is in strict mode

const C2 = class {
  // All code here is evaluated in strict mode
};

// Code here may not be in strict mode
delete Object.prototype; // Will not throw error



Changes in strict mode
Strict mode changes both syntax and runtime behavior. Changes generally fall into these categories:

changes converting mistakes into errors (as syntax errors or at runtime)
changes simplifying how variable references are resolved
changes simplifying eval and arguments
changes making it easier to write "secure" JavaScript
changes anticipating future ECMAScript evolution.

Variable Declaration Without var, let, or const:
'use strict';
myVariable = 10; // Error: Uncaught ReferenceError: myVariable is not defined

In non-strict mode, attempting to delete a non-configurable property of an object doesn't throw an error
and simply returns false. However, in strict mode, it's considered a mistake and results in a TypeError.
'use strict';
var obj = {};
Object.defineProperty(obj, 'prop', { value: 42, configurable: false });
delete obj.prop; // Error: Uncaught TypeError: Cannot delete property 'prop' of object

In non-strict mode, duplicate parameter names in function declarations are allowed,
but it can lead to confusion and bugs. In strict mode, duplicate parameter names are considered mistakes and result in a SyntaxError.
'use strict';
function myFunction(x, x) { // Error: Uncaught SyntaxError: Duplicate parameter name not allowed in this context
    return x + x;
}

Failing to assign to object properties
"use strict";

// Assignment to a non-writable global
undefined = 5; // TypeError
Infinity = 5; // TypeError

// Assignment to a non-writable property
const obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // TypeError

// Assignment to a getter-only property
const obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // TypeError

// Assignment to a new property on a non-extensible object
const fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // TypeError


Failing to delete object properties
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError

"use strict";
var x;
delete x; // syntax error

"use strict";

If the name is a configurable global property, prefix it with globalThis to delete it.
delete globalThis.x;

Legacy octal literals
Strict mode forbids a 0-prefixed octal literal or octal escape sequence.
In sloppy mode, a number beginning with a 0, such as 0644, is interpreted as an octal number (0644 === 420),
if all digits are smaller than 8. Novice developers sometimes believe a leading-zero prefix has no semantic meaning,
so they might use it as an alignment device — but this changes the number's meaning!
A leading-zero syntax for the octal is rarely useful and can be mistakenly used, so strict mode makes it a syntax error:
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;


  Setting properties on primitive values
  Strict mode forbids setting properties on primitive values. Accessing a property on a primitive implicitly creates
  a wrapper object that's unobservable, so in sloppy mode, setting properties is ignored (no-op). In strict mode, a TypeError is thrown.
  "use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError


Duplicate property names
Duplicate property names used to be considered a SyntaxError in strict mode.
 With the introduction of computed property names, making duplication possible at runtime, this restriction was removed in ES2015.
 "use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015


//OPTIONAL
Non-leaking eval
In strict mode, eval does not introduce new variables into the surrounding scope.
In sloppy mode, eval("var x;") introduces a variable x into the surrounding function or the global scope.
This means that, in general, in a function containing a call to eval, every name not referring to an argument or
local variable must be mapped to a particular definition at runtime (because that eval might have introduced
a new variable that would hide the outer variable). In strict mode, eval creates variables only for the code being evaluated,
so eval can't affect whether a name refers to an outer variable or some local variable:

var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);


//No syncing between parameters and arguments indices

Future-proofing JavaScript
Extra reserved words
Reserved words are identifiers that can't be used as variable names.
Strict mode reserves some more names than sloppy mode, some of which are already used in the language,
 and some of which are reserved for the future to make future syntax extensions easier to implement.

implements
interface
let
package
private
protected
public
static
yield



Transitioning to strict mode
Strict mode has been designed so that the transition to it can be made gradually.
It is possible to change each file individually and even to transition code to strict mode down to the function granularity.

You can migrate a codebase to strict mode by first adding "use strict" to a piece of source code,
and then fixing all execution errors, while watching out for semantic differences.

Syntax errors
When adding 'use strict';, the following cases will throw a SyntaxError before the script is executing:

Octal syntax const n = 023;
with statement
Using delete on a variable name delete myVariable;
Using eval or arguments as variable or function argument name
Using one of the newly reserved keywords (in prevision for future language features):
implements, interface, let, package, private, protected, public, static, and yield
Declaring two function parameters with the same name function f(a, b, b) {}
Declaring the same property name twice in an object literal {a: 1, b: 3, a: 7}. This constraint was later removed (bug 1041128).
These errors are good, because they reveal plain errors or bad practices. They occur before the code is running,
 so they are easily discoverable as long as the code gets parsed by the runtime.

New runtime errors
JavaScript used to silently fail in contexts where what was done should be an error. Strict mode throws in such cases.
 If your code base contains such cases, testing will be necessary to be sure nothing is broken.
 You can screen for such errors at the function granularity level.

Assigning to an undeclared variable throws a ReferenceError. This used to set a property on the global object,
which is rarely the expected effect. If you really want to set a value to the global object,
explicitly assign it as a property on globalThis.

Failing to assign to an object's property (e.g. it's read-only) throws a TypeError. In sloppy mode, this would silently fail.

Deleting a non-deletable property throws a TypeError. In sloppy mode, this would silently fail.

Accessing arguments.callee, strictFunction.caller, or strictFunction.arguments throws a TypeError
if the function is in strict mode. If you are using arguments.callee to call the function recursively,
you can use a named function expression instead.
Semantic differences
These differences are very subtle differences. It's possible that a test suite doesn't catch this kind
of subtle difference. Careful review of your code base will probably be necessary to be sure
these differences don't affect the semantics of your code. Fortunately, this careful review can
 be done gradually down the function granularity.

this
In sloppy mode, function calls like f() would pass the global object as the this value.
 In strict mode, it is now undefined. When a function was called with call or apply, if the value was a primitive value,
  this one was boxed into an object (or the global object for undefined and null). In strict mode,
   the value is passed directly without conversion or replacement.

arguments
In sloppy mode, modifying a value in the arguments object modifies the corresponding named argument.
This made optimizations complicated for JavaScript engine and made code harder to read/understand.
In strict mode, the arguments object is created and initialized with the same values than the named arguments,
but changes to either the arguments object or the named arguments aren't reflected in one another.

eval
In strict mode code, eval doesn't create a new variable in the scope from which it was called.
Also, of course, in strict mode, the string is evaluated with strict mode rules.
Thorough testing will need to be performed to make sure nothing breaks. Not using eval if you don't
really need it may be another pragmatic solution.

Block-scoped function declarations
In sloppy mode, a function declaration inside a block may be visible outside the block and even callable.
In strict mode, a function declaration inside a block is only visible inside the block.


*/
function divideByZero(a,b){
  return a/b;
}

console.log(divideByZero(50,0));

function divideByZeroInStrict(a,b){
  'use strict';
  return a/b;
}
console.log(divideByZeroInStrict(40,0));
// Strict mode
'use strict';

function divide(a, b) {
  return a / b;
}

console.log(divide(10, 0));  // Output: Uncaught TypeError: Cannot divide by zero


let public = 54;
console.log(public);
