/*In computer science, a data structure is a format to organize, manage and store data in a way that allows efficient access and modification.*/

//ARRAYS
//An array is a collection of items stored at contiguous memory locations.
/*Arrays are useful when we have to store individual values
and add/delete values from the end of the data structure. But
when we need to add/delete from any part of it, there are other data structures that perform more efficiently */


//OBJECTS
/*In JavaScript, an object is a collection of key-value pairs. This data structure is also called map,
 dictionary or hash-table in other programming languages.*/

 /*Objects are a good way to group together data that have something in common or are somehow related.
  Also, thanks to the fact that property names are unique, objects come in handy when we have to
  separate data based on a unique condition.*/


  /*Stacks
Stacks are a data structure that store information in the form of a list. They allow only adding and removing elements under
a LIFO pattern (last in, first out). In stacks, elements can't be added or removed out of order,
they always have to follow the LIFO pattern.*/

/*There's more than one way to implement a stack, but probably the simplest is using an array with its
push and pop methods. If we only use pop and push for adding and deleting elements, we'll always follow
the LIFO pattern and so operate over it like a stack.*/

/*The big O of stack methods is the following:

Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)*/


/*Queues
Queues work in a very similar way to stacks, but elements follow a different pattern for add and removal. Queues allow
 only a FIFO pattern (first in, first out). In queues, elements can't be added or removed out of order,
 they always have to follow the FIFO pattern.*/

 /*If we only use push and shift for adding and deleting elements, we'll always follow the FIFO pattern and so operate over it like a queue.*/

 /*The big O of queue methods is the following:

Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)*/



/*Linked lists
Linked lists are a type of data structure that store values in the form of a list. Within the list, each value is considered a node,
and each node is connected with the following value in the list (or null in case the element is the last in the list) through a pointer.*/

/*Since lists don't have indexes, we can't access values randomly. When we want to access a value,
 we always have to look for it by iterating through the list starting from its head or tail.
The good thing of not having indexes, is that insertion/deletion in any part of the list is more efficient than with arrays. */

/*Like any data structure, different methods are implemented in order to operate over the data. The most common ones
include: push, pop, unshift, shift, get, set, insert, remove, and reverse.*/

/*Singly linked lists methods have the following complexities:

Insertion - O(1)
Removal - O(n)
Search - O(n)
Access - O(n)*/

/*The big O of doubly linked lists methods is the following:

Insertion - O(1)
Removal - O(1)
Search - O(n)
Access - O(n)*/



/*Indexed Collections
Javascript Indexed Collections are collections that have numeric indices i.e. the collections of data that are ordered by an index value.
 In JavaScript, an array is an indexed collection. An array is an ordered set of values that has a numeric index.*/
 //Creating an ARRAYS
 let student = new Array('aravind',33,'computer science');
 let employee = Array('aravind',77326,'deloitte');
 let det = ['name',56.33,'another string'];
console.log(student,employee,det);
student[3] = true;
console.log(student);

//foreach in ARRAYS
employee.forEach((value) => {
  console.log(value);
});



//Array methods
student.push('maths is intresting subject');
console.log(student);
student.pop();
console.log(student);
student = student.concat('23','34');
console.log(student);
student = student.join('-');
console.log(student);
let sortingArray = ['east','west','south','north'];
console.log(sortingArray.sort(),sortingArray.indexOf('south'));
//student.shift();
//console.log(student);



/*These three tips can help you to decide whether to use a Map or an Object:

Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.
Use maps if there is a need to store primitive values as keys because object treats each key as a string whether it's a
number value, boolean value or any other primitive value.
Use objects when there is logic that operates on individual elements.*/




//STRUCTURED DATA
/*Adding structured data can enable search results that are more engaging to
users and might encourage them to interact more with your website, which are called rich results.*/

/*Google uses structured data that it finds on the web to understand the content of the page, as well as to gather information about
the web and the world in general, such as information about the people, books, or companies that are included in the markup.*/

/*Be sure to check your structured data using the Rich Results Test during development, and the Rich result status reports after deployment,
to monitor the validity of your pages, which might break after deployment due to templating or serving issues. */


/*JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on
JavaScript object syntax. It is commonly used for transmitting data in web applications*/
/* Converting a string to a native object is called deserialization, while converting a native
object to a string so it can be transmitted across the network is called serialization.*/

let jsonObject = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
};

console.log(jsonObject.members[1].powers[2]);
//console.log(jsonObject["members"][1]["powers"][2]);
//console.log(jsonObject.members);
//Converting json object into arrays
const arrayFromJSONObject = jsonObject.members[2];
console.log(arrayFromJSONObject);
/*JSON is purely a string with a specified data format — it contains only properties, no methods.
JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.
Unlike in JavaScript code in which object properties may be unquoted, in JSON only quoted strings may be used as properties.
*/

/*Truthy
In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
 All values are truthy unless they are defined as falsy.
 That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.
*/
console.log((true));
 console.log(({}));
console.log(([]));
console.log((42));
console.log(("0"));
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

//Object.is
console.log(Object.is(1,'1'));
const obj = {};
console.log(Object.is(obj, {}));
console.log(obj == {},obj,false==false,{} === {});
/*Object.is() is not equivalent to the == operator. The == operator applies various coercions to both sides
(if they are not the same type) before testing for equality (resulting in such behavior as "" == false being true),
 but Object.is() doesn't coerce either value.

Object.is() is also not equivalent to the === operator. The only difference between Object.is()
 and === is in their treatment of signed zeros and NaN values. The === operator (and the == operator)
  treats the number values -0 and +0 as equal, but treats NaN as not equal to each other.

*/

console.log(NaN == NaN,NaN === NaN,Object.is(NaN,NaN));
console.log(-0==0,-0===0,Object.is(-0,0));

//comparision with type conversion
"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true, look at Logical NOT operator
0 == !!undefined; // true, look at Logical NOT operator
null == undefined; // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3; // true
number1 == number2; // false

//comparision of OBJECTS
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 == object2); // false. This behavior is because objects are compared by reference, not by their contents.
console.log(object1 == object1); // true

//Comparing strings and string objects
const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true

console.log(NaN == NaN);
