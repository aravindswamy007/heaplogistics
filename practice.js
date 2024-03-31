// try{
//   let x = 10;
//   console.log(x);
//   throw new Error("this is a custom error");
// }catch(e){
//   console.log(e);
//   console.log(typeof e,e.message,e.name);
// }finally{
//   console.log('this block is executed in the finally block');
// }
//
//
// try{
//   console.log('inside try block...');
//   throw new Error('new error message')
//   return console.log('1st return statement');
// }catch(e){
//   console.log('inside catch block',e.message);
// }finally{
//   console.log('inside finally block');
//   return console.log('2nd return statemets');
// }

console.log('testing messge');


function map(f,a){
  const arr = new Array(a.length);
  for(let i =0; i<arr.length;i++){
    arr[i] = f(a[i]);
  }
  return arr;
}

const cube = x => x*x*x;

const mapArray = [1,2,3,4,5];
console.log('the result is:',map(cube,mapArray));
console.log(cube(3));


function map2(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const cube2 = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map2(cube2, numbers)); // [0, 1, 8, 125, 1000]


 function practiceRecursion(value){
   if(value > 10){
     return value;
   }
   value++;
   return 1+practiceRecursion(value);
 }

 console.log('the value of the funcion practiceRecursion is :',practiceRecursion(0));

 function f(a, b = () => console.log(a)) {
  var i = 1;
  b();
}

f(); // undefined
f(5); // 5
// console.log(f());
// console.log(f(5));

function testingArray([x=10,...args]=[]){
  console.log(x,args);
}

const testArray = [1,2,3,4,5];

testingArray(testArray);
testingArray([]);


const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // logs undefined
obj.c(); // logs 10, Object

const testingAF = () => console.log(this,x,y);
const x = 4,y=6;
console.log(testingAF(3,4));

console.log(testingHoisting());
function testingHoisting(){
  return 'testing successful';
}

const testArrayReduce = [1,2,3,4,5];
const sum = testArrayReduce.reduce((a,b)=>{
  return a+b;
});
console.log(sum);

const fetchAPI = async function(){
    try{
        const res = await fetch('https://cat-fact.herokuapp.com/facts')
        if(!res.ok){
            throw new Error("Custom Error")
        }
        const data = await res.json()
        console.log(data);
        return "Done with fetchAPI"
    } catch(err){
        console.log(err);
        throw new Error("Custom Error")
    }
}

// fetchAPI().then((msg) =>{
//     console.log(msg);
// }).catch((err) =>{
//     console.log(err);
// })

const resultset  = async function(){
  try{
    const result = await fetchAPI();
    console.log(result);
  }catch(err){
    console.log(err);
  }
}

resultset();

let promise1 = new Promise((resolve) =>{
    setTimeout(() =>{
       resolve("First Promise")
    }, 2000)
})

let promise2 = Promise.resolve("Second Promise")

async function pp(){
  let returnedPromises = await Promise.all([promise1,promise2]).then((res) =>{
    console.log(res);
})
}
pp();
