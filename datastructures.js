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
