/*
“this” in methods
It’s common that an object method needs to access the information stored in the object to do its job.

For instance, the code inside user.sayHi() may need the name of the user.

To access the object, a method can use the this keyword.

The value of this is the object “before dot”, the one used to call the method.

For instance:
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John
Here during the execution of user.sayHi(), the value of this will be user.
Technically, it’s also possible to access the object without this, by referencing it via the outer variable:

…But such code is unreliable. If we decide to copy user to another variable,
e.g. admin = user and overwrite user with something else, then it will access the wrong object.

That’s demonstrated below:
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name ); // leads to an error
  }

};


let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null

--------------------------------------
What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
---------------------------------------
//this in function context
// An object can be passed as the first argument to 'call'
// or 'apply' and 'this' will be bound to it.
const obj = { a: "Custom" };

// Variables declared with var become properties of 'globalThis'.
var a = "Global";

function whatsThis() {
  return this.a; // 'this' depends on how the function is called
}

whatsThis(); // 'Global'; the 'this' parameter defaults to 'globalThis' in non–strict mode
obj.whatsThis = whatsThis;
obj.whatsThis(); // 'Custom'; the 'this' parameter is bound to obj
function add(c, d) {
  return this.a + this.b + c + d;
}

const o = { a: 1, b: 3 };

// The first argument is bound to the implicit 'this' parameter; the remaining
// arguments are bound to the named parameters.
add.call(o, 5, 7); // 16

// The first argument is bound to the implicit 'this' parameter; the second
// argument is an array whose members are bound to the named parameters.
add.apply(o, [10, 20]); // 34

------------------
//W3Schools
In a function, the global object is the default binding for this.

In a browser window the global object is [object Window]:
function myFunction() {
  return this;
}
JavaScript strict mode does not allow default binding.

So, when used in a function, in strict mode, this is undefined.
"use strict";
function myFunction() {
  return this;
}
-------------------------------------

Function context
Inside a function, the value of this depends on how the function is called.
Think about this as a hidden parameter of a function — just like the parameters declared in the function definition,
this is a binding that the language creates for you when the function body is evaluated.

function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
Note how the function is the same, but based on how it's invoked, the value of this is different.
This is analogous to how function parameters work.

const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }

If a function is called with this set to undefined or null, this gets substituted with globalThis.
If the function is called with this set to a primitive value, this gets substituted with the primitive value's wrapper object.

-----------------------------------------------------------------
this Alone
When used alone, this refers to the global object.

Because this is running in the global scope.

In a browser window the global object is [object Window]:

Example
let x = this;
--------------------------------------------------------------------
this in Event Handlers
In HTML event handlers, this refers to the HTML element that received the event:

Example
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>

-------------------------------------------------------------------------
This keyword and arrow function
var greeting = 'hi';

const obj = {
  greeting: 'hey',

  fo() {
    const greeting = 'hola';

      const arrowFo = () => {
        console.log(this.greeting);
      };

      arrowFo();
  },
};

obj.fo(); //logs: hey


Arrow functions
In arrow functions, this retains the value of the enclosing lexical context's this.
In other words, when evaluating an arrow function's body, the language does not create a new this binding.

For example, in global code, this is always globalThis regardless of strictness, because of the global context binding:

const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true

Arrow functions create a closure over the this value of its surrounding scope,
which means arrow functions behave as if they are "auto-bound" — no matter how it's invoked,
this is bound to what it was when the function was created (in the example above, the global object).
The same applies to arrow functions created inside other functions: their this remains that of the enclosing lexical context.
See example below.

Furthermore, when invoking arrow functions using call(), bind(), or apply(), the thisArg parameter is ignored.
You can still pass other arguments using these methods, though.

const obj = { name: "obj" };

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true





*/
const user = {
  number: 55,
  printNum: function(){
    console.log(this.number);
    console.log(user.number);
  }
}

user.printNum();

// An object can be passed as the first argument to 'call'
// or 'apply' and 'this' will be bound to it.

function getThis() {
 return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThs = getThis;
obj2.getThs = getThis;
obj2.getthiss = this;

console.log(obj1.getThs()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThs()); // { name: 'obj2', getThis: [Function: getThis] }
console.log('gethis is equal to ',getThis());
console.log(this.getThis);
console.log(obj2['getthiss']);

var greeting = 'hi';

const obj = {
  greeting: 'hey',

  fo() {
    const greeting = 'hola';

      const arrowFo = () => {
        console.log(this.greeting);
      };

      arrowFo();
  },
};

obj.fo(); //logs: hey
console.log(obj.this,this.obj,obj,obj.fo);


const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis().getThis()); // { name: 'obj5', getThis: [Function: getThis] }
console.log(obj4.getThis());


obj6 ={
  name: 'aravind',
  age: 44,
  fun: function(){
    return this;
  }
}

console.log('obj6 is equal to ',obj6.fun().fun().fun());

obj7 = {
  greet: 'hi',
  sayHi() {
    return this;
  },
  sayHello: function(){
    const arrowFo = () => {
         return this;
       };
    arrowFo();
  }
}

console.log(obj7.sayHello());
