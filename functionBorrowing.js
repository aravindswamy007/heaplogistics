class Dog{
  constructor(name,age,breed){
    this.age = age;
    this.name = name;
    this.breed = breed;
  }

  tellUsAboutYourself(){
    console.log(`My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old`);
  }

  woof(){
    console.log('Woof..');
  }
}

let fido = new Dog('Fido',3,'daschchund');
fido.tellUsAboutYourself();

class Cat{
  constructor(name,age,breed){
    this.age = age;
    this.name = name;
    this.breed = breed;
  }

  meow(){
    console.log('Meow...');
  }
}

let sparkles = new Cat('sparkles',4,'Siamese');
fido.tellUsAboutYourself.call(sparkles);
fido.tellUsAboutYourself.apply(sparkles);
fido.tellUsAboutYourself.bind(sparkles).describeSparkles();

/*
What’s the point?
The central benefit of function borrowing is that it allows you to forego inheritance.
There’s no reason for you to force a class to inherit from another if you’re only doing so in order to grant instances
of the child class access to a single method. And as I mentioned above, function borrowing keeps you from having to write
the same function twice and maintain it in two places, which reduces the risk of bugs.

The most important practical application of function borrowing pertains to native methods, and specifically,
to Array.prototype.slice. There are several list-like data structures that aren’t arrays, and it’s useful
to be able to treat them as arrays and operate on them as such. One of the most prevalent list-like data structures
that isn’t an array is arguments. The arguments object represents all the parameters passed in to a given (non-arrow) function.

Take, for example, the below function:


In the above example, findO is a variadic function, which means it takes a variable number of arguments.
We’ve passed it four strings, and we’d like to see which of those strings contain the letter ‘o’.
The arguments object holds those four strings, but we can’t simply call .filter() on arguments because it is not an array.
We’re able to convert it into an array, however, by borrowing the .slice method from Array.
prototype, and setting this to equal the arguments object. Once it has been converted to an array,
 we have access to all of the built-in methods on Array.

 */








 console.log('----------------------------');

 /*
 Most of the JS developers out there might have come across one of JavaScript’s most confusing topic: THIS

So, who the hell is this? 🤔

Technically, JavaScript this refers to the object that the function belongs to.
And the value of this depends on how the function is called, something known as runtime binding.

In layman’s terms, this points to the owner of the function call, I repeat, the function call,
and NOT the function itself. The same function can have different owners in different scenarios.

4 rules decide the value of this

1. Default binding | Direct invocation
this in Default Binding points to the global object. Default binding is applied for standalone functions
and is the fallback option for all other types.

function myFunction() {
    console.log(this)
}
myFunction();           // Window {}

2. Implicit binding | Method invocation
Implicit Binding is applied when you invoke a function in an Object using the dot notation. this in such scenarios will
point to the object using which the function was invoked. Or simply the object on the left side of the dot.


function myFunction() {
    console.log(this)
  }

const obj = {
  someKey: 1,
  myFunction: myFunction,
}

obj.myFunction();
// {someKey: 1, myFunction: ƒ}. ie. obj


2.a Nested Function
When a function is nested inside a method of an object, the context of the inner
function depends only on its invocation type and not on the outer function’s context.

const obj = {
  someKey: 1,
  outer: function() {
    function inner(){
       console.log(this);
    }
    inner();
  },
}

obj.outer();      // Window {}
In this example, even though outer was called using implicit binding, inner was called using default binding.
Hence, this points to the Window Object.

2.b Method separated from the object
When we copy an object method to a new variable, we are creating a reference to the function.

function myFunction() {
  console.log(this);
}

const obj = {
  someKey: 1,
  myFunction: myFunction,
}

const newFunction = obj.myFunction;
newFunction();    // Window {}
In this example, newFunction directly refers to myFunction.

3. Explicit binding | Indirect invocation
In this method, you can force a function to use a certain object as its this.
Explicit Binding can be applied using call(), apply(), and bind().

call(): Pass in the required object as the first parameter during the function call.
The actual parameters are passed after the object.

apply(): Similar to call() with a difference in the way the actual arguments are passed.
Here, the actual arguments are passed as an array.

function myFunction(param1, param2) {
    console.log(this)
  }

const obj = {
  someKey: 1,
}

const param1 = 1, param2 = 2;
myFunction.call(obj, param1, param2)       // {someKey: 1}
myFunction.apply(obj, [param1, param2])    // {someKey: 1}

bind(): In this method, you create a new function with a fixed this.
These types of functions created using bind() are commonly known as bound functions.

function myFunction() {
    console.log(this)
  }

const obj = {
  someKey: 1,
}

const boundFunction = myFunction.bind(obj)
boundFunction();      // {someKey: 1}


4. New binding | Constructor invocation
New binding is applied when we create an object using Function Constructors.

4.a Function without Return
When we invoke a function using the new operator, internally the following steps are done:

The constructor function is invoked and an object is internally created, inheriting the prototype of the constructor function used.
The properties and functions are added to this object as per the function definition.
This newly created object is returned and is assigned to the LHS variable at the functional call.

function myFunction(){
  // JS internally creates an object and refers it as this

  // User explicitly adds required properties and methods to the object
  this.someKey = 1;
  this.inner = function(){
    console.log(this);
  }

  // JS internally returns the object
}

const obj = new myFunction();
obj.inner()           // {someKey: 1, inner: ƒ} with myFunction prototype



-----------------------------------------------------------------------
Arrow Functions
Normal functions in JS abide by the 4 rules mentioned above.
But ES6 introduces a special kind of function that does not use these rules, known as arrow functions.

Arrow functions use “lexical scoping” to figure out what the value of this should be.
Lexical scoping is a fancy way of saying it uses “this” from the outer function in which it is defined.

Simply put, when an arrow function is invoked, JS literally takes the this value from the outer function
where the arrow function is declared. I repeat, the outer function, NOT the outer object in which it is defined.

a. If the outer function is a normal function, this depends upon the type of binding of the outer function.

b. If the outer function is an arrow function, JS again checks for the next outer function and this
process continues till the global object.

function outer(){
    let inner = () => {
      console.log(this);
    };
    inner()
  }

const objA = {
  someKey: 1,
  outer : outer,
};
const objB = {
  someKey: 2,
}

// In this example, each time when inner function is called,
// JS simply takes the this value from outer function
outer();            // Window {}
objA.outer();       // {someKey: 1, outer: ƒ} --> objA
outer.call(objB)    // {someKey: 2} --> objB

const myFunction = () => {
  console.log(this);
}

const objA = {
  myFunction: myFunction,
  inner: () => {
    console.log(this);
  }
}

const objB = {}

myFunction();                   // Window {}
objA.myFunction()               // Window {}
objA.inner()                    // Window {}
myFunction.call(objB);          // Window {}
const objC = new myFunction()   // myFunction is not a constructor


*/
