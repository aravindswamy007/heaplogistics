setTimeout(hi,4000);
console.log('Hello');
function hi(){
  console.log('hi');
}

const cleartieoutid = setTimeout(()=>{
  console.log('hello world');
},10000);

console.log(cleartieoutid);
clearTimeout(cleartieoutid);
console.log(`Timeout ID ${cleartieoutid} has been cleared`);


/*
The setTimeout() method syntax is as follows:
setTimeout(function, milliseconds, parameter1, parameter2, ...);


If you omit the second parameter, then setTimeout() will immediately execute the passed function without waiting at all.

Finally, you can also pass additional parameters to the setTimeout() method that you can use inside the function as follows:
function greeting(name, role){
  console.log(`Hello, my name is ${name}`);
  console.log(`I'm a ${role}`);
}

setTimeout(greeting, 3000, "Nathan", "Software developer");

Now you may be thinking, "why not just pass the parameters directly to the function?"

This is because if you pass the parameters directly like this:
setTimeout(greeting("Nathan", "Software developer"), 3000);
Then JavaScript will immediately execute the function without waiting,
because you're passing a function call and not a function reference as the first parameter.

---------------
How to Cancel the setTimeout Method
You can also prevent the setTimeout() method from executing the function by using the clearTimeout() method.

The clearTimeout() method requires the id returned by setTimeout() to know which setTimeout() method to cancel:

const timeoutId = setTimeout(function(){
    console.log("Hello World");
}, 2000);

clearTimeout(timeoutId);
console.log(`Timeout ID ${timeoutId} has been cleared`);
*/
// setInterval(()=>{
//   console.log('hey there');
// },5000);

/*
Note: The setInterval() method is useful when you want to repeat a block of code multiple times.
For example, showing a message at a fixed interval.
*/
let count = 0;
let clearIntervalID = setInterval(()=>{
  count++;
  if(count === 5){
    clearInterval(clearIntervalID);
  }
  let datetime = new Date();
  let time = datetime.toLocaleTimeString();
  console.log(time);
},5000);

let greet_one = "Hello"
let greet_two = "World!!!"
console.log(greet_one)
for(let i=0;i<1000000000;i++){
}
console.log(greet_two);

/*
The benefit of using a callback function is that you can wait for the result
of a previous function call and then execute another function call.

In this example, we are going to use the setTimeout() method to mimic the program that takes time
to execute, such as data coming from the server.*/

/*
----------------------------
Welcome to Callback Hell
Callbacks are great, but you don't want to use them excessively. If you do, you'll get something called "callback hell".
This happens when you nest callbacks within callbacks many levels deep.
The shape of callback hell is like a pyramid and is also called the “pyramid of doom”.
It makes the code very difficult to maintain and understand. Here's an example of callback hell:

setTimeout(() =>{
    console.log("One Second");
    setTimeout(() =>{
        console.log("Two Seconds");
        setTimeout(() =>{
            console.log("Three Seconds");
            setTimeout(() =>{
                console.log("Four Seconds");
                setTimeout(() =>{
                    console.log("Five Seconds");
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

When one second has passed, the code logs "one seconds".
Then there's another call which runs after one more second and logs "two seconds" and it goes on and on.

We can escape this callback hell using something call Promises in asynchronous JavaScript.

*/


/*
-------------------------------------------
How Promises Work in JavaScript
A promise is placeholder for the future result of an asynchronous operation.
In simple words, we can say it is a container for a future value.
*/

const request = fetch('https://course-api.com/react-store-products').then((response) =>{
    console.log(response.status);
    return response.json()
}).then((data) =>{
    console.log(data[0]);
})


//Promises
let lottery = new Promise((resolve,reject)=>{
  console.log('Lottery is happening');

  setTimeout(()=>{
    if(Math.random() >=0.5){
      resolve('You Won!!!')
    }else{
      reject(new Error('Better luck next time!'));
    }
  },5000)
})

lottery.then((response)=>{
  console.log(response);
}).catch((err)=>{
  console.log(err);
})

/*
What is Asynchronous Code?
With asynchronous code, multiple tasks can execute at the same time while tasks in the background finish.
This is what we call non-blocking code.
The execution of other code won't stop while an asynchronous task finishes its work.

let greet_one = "Hello"
let greet_two = "World!!!"
console.log(greet_one)
setTimeout(function(){
    console.log("Asynchronous");
}, 10000)
console.log(greet_two);


How to Consume Promises
We can consume a promise using the then() method on the promise.
Producing code is code that can take some time to complete. Consuming code is code that must wait for the result.
So if we consume a promise, this means that when we make a request, we wait for the result.
Then after result arrives, we perform some operation on those results.
const request = fetch('https://course-api.com/react-store-products').then((response) =>{
    console.log(response);
    return response.json()
}).then((data) =>{
    console.log(data);
})


How to Handle Rejected Promises
How to Create a Promise
We know how to consume promises, but what about creating your own promises? You can do that using new Promise().

You might wonder - why do we need our own promises? Firstly, promises are asynchronous in nature.
We can create any task to be asynchronous by creating our own promises.
Wecan handle them using the then() and catch() methods that we learned in the above section.


Once you know how to create promises, you can make any piece of code asynchronous.
Then it will not block code execution if the other code running is taking a long time to complete.



How to Consume Promises using Async/await
Consuming promises using the then() method can become messy sometimes.
So we have an alternative method to consume promises called async/await.

Just keep in mind that async/await will be using the then() method behind the scenes to consume promises.





How to Run Promises in Parallel
Let's say we want to make three requests for three different country capitals.
We can do three different fetch calls, each of which will wait for the one above to complete.

const fetchAPI = async function(country1,country2,country3){
    try{
        const res1 = await fetch(`https://restcountries.com/v3.1/name/${country1}`)
        const res2 = await fetch(`https://restcountries.com/v3.1/name/${country2}`)
        const res3 = await fetch(`https://restcountries.com/v3.1/name/${country3}`)


        const data1 = await res1.json()
        const data2 = await res2.json()
        const data3 = await res3.json()
        console.log(data1[0].capital[0]);
        console.log(data2[0].capital[0]);
        console.log(data3[0].capital[0]);
        return "Done with fetchAPI"
    } catch(err){
        console.log(err);
        throw new Error("Custom Error")
    }
}


fetchAPI("canada", "germany", "russia")

Promise.all . It will call three fetch requests simultaneously,
which in return will reduce our fetching time and improve our application's performance.

let promise1 = new Promise((resolve) =>{
    setTimeout(() =>{
       resolve("First Promise")
    }, 2000)
})

let promise2 = Promise.resolve("Second Promise")

let returnedPromises = Promise.all([promise1,promise2]).then((res) =>{
    console.log(res);
})


*/

function call(){
  const request = fetch('https://course-api.com/react-store-products').then((response)=>{
    console.log(response);
    return response.json();
  }).then((data)=>{
    console.log(data);
  }).cathc((err)=>{
    console.log(err);
  })
}

const btn = document.querySelector('button');
btn.addEventListener('click',call());

/*
Async and await
const fetchAPI = async function(){
  const res = await fetch('https://cat-fact.herokuapp.com/facts');
  const data = await res.json();
  console.log(data);
}

fetchAPI();
console.log('first');
