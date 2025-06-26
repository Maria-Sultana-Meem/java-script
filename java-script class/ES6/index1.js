//!..................spread operator............

//&.........Array.........

const nums = [1, 2, 3];
console.log(...nums); 

//&..........array copy........

const a = [10, 20, 30];
const b = [...a];                                   
b.push(40);

console.log(a); 
console.log(b); 

//&.........array merge..........

const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged);  

//&............array Max........

const numbers = [10, 50, 30];
const max = Math.max(...numbers);  
console.log(max);

//&.........array destructing............

 
const fruits = ["Apple", "Banana", "Mango"];
Const [first, second, third]= fruits;
console.log(first);  
console.log(second); 
console.log(third);  

//&..........object destructing..........

const bag = {
          Pen    : "Blue Pen",
          Book  : "English Book",
        Scale  : "Steel Scale"
};

const { pen, book } = bag;

console.log(pen);  
console.log(book)


//name change....

const { pen: myPen, book: myBook } = bag;

console.log(myPen);  
console.log(myBook); 

//!..........function declaration.........


function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Meem'))

//!..........function expression..........

const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet('Adiyat'));


//!............arrow function..........

const greet = (name) => {
  					 return `Hello, ${name}!`;
};

// 1-liner shortcut (implicit return)

const greetShort = name => `Hello, ${name}!`;

console.log(greet('Jawad'));
console.log(greetShort('Abid'));





