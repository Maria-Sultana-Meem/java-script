// !...........for loop..........
/*
const number=[10,11,12,13,14,15]
for (let i = 0; i < number.length; i++) {
    // const newNumber = number[i];
    // console.log(newNumber);
    
    
    if (i===3) {
        console.log(number[i]);
    }
       
}
    */

//! .........forof loop...... 
/*
const numbers=[10,11,12,13,14,15]
let i=0;
 for (const num of numbers) {
   if (i===3) {
     break
   }
    console.log(num);
    i++
    
 }
    */

 //!...............each loop..........
/*
const number=[10,11,12,13,14,15]
const numbers=number.forEach(i=> console.log(i));
*/

//!.............map............
/*
const number=[10,11,12,13,14,15]
const newNumber=number.map((num)=>num*2)
newNumber[3]=40;
console.log(newNumber);
*/

//!............filter...........
/*
const number=[10,11,12,13,14,15]
const newNumber=number.filter((num)=>num%2===0)
console.log(newNumber);

const students=['meem','sultana','maria','sabiha','sharmin']
const newStudent=students.filter(i=>i[1]==='a')
console.log(newStudent);
*/

//!..................find..........
/*
const student=['meem','sultana','maria','sabiha','sharmin']
const newStudent=student.find(i=>i[0]==='s')
console.log(newStudent);

const students=[
    {name:'maria',Age:20},
    {name:'sultana',Age:25},
    {name:'meem',Age:50},
]

const marriage=students.find((std)=>std.Age<30)
console.log(marriage);
*/

//!...........reduce............
/*
const number=[10,11,12,13,14,15]
const result=number.reduce((acumulate,initial)=>acumulate + initial,0)
console.log(result);


const phones=[
    {name:'Oppo',price:20000},
    {name:'Vivo',price:25000},
    {name:'Samsung',price:14000},
    {name:'Iphone',price:150000},
]

const totalPrice=phones.reduce((acu,ini)=>acu[1].price+ini[2].price,0)
console.log(totalPrice);
*/


// const products=[
//     {name:'alo',qnty:5,price:100},
//     {name:'mango',qnty:4,price:150},
//     {name:'potol',qnty:5,price:70},
    
// ]
//  const results=products.reduce((product,item)=>product+item.price +item.qnty,1);
//  //console.log(results);

//  //const results= products.some(item=>item.price>100);
//  //console.log(results);

// console.log(JSON.stringify(products));


//!............json........

const studentInfo={
    name:'Maria Sultana',
    Age:20,
    IsReading:true,
    hobbies:['nothing']
}

const convertToJson=JSON.stringify(studentInfo)
console.log(convertToJson);
const convertToObject=JSON.parse(convertToJson)
console.log(convertToObject);













