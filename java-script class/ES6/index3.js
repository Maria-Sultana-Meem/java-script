//!....................Asychronus.............
/*console.log('A');

setTimeout(() => {
  console.log('B');
}, 1000);

console.log('C');


//!......................promise............

const myPromise = new Promise((ressolve, reject)=>{
const proposal= true;
if (proposal) {
    // console.log('yes ami dite perechi');
ressolve('yes ami dite perechi')

}   else {
       // console.log('a jibon ami rak bo na ');
        reject('a jibon ami rakbo na ')
}
})

myPromise.then((message)=>{
   console.log('yes ami dite perechi', message);
}).catch((error)=>{
    console.log(error.message)
})
    */




//!..........asycn/await...........

// const dataAnbo = ()=>{
//     try {
//         console.log('Data paisi');
        
//    } catch (error) {
//         console.log('data ase na');
//     }
//  }

//  dataAnbo()
//!...........first..........
/*
const dataAnbo = async()=>{

    try {
        const data= await fetch('https://jsonplaceholder.typicode.com/posts')
        // console.log(data);
        const getData= await data.json()
        console.log(getData);
        
    } catch (error) {
        console.log(error.message);
    }

}

dataAnbo()
*/

//!............second...........
/*
const otherData=async()=>{

try {

  const data= await fetch('https://jsonplaceholder.typicode.com/users')
  const newData=await data.json()
  console.log(newData);
  
  
} catch (error) {
  console.log(error.message);
  
}

}
otherData()
*/

//!.........third............
/*
const getData=async()=>{

try {
  const data=await fetch('https://jsonplaceholder.typicode.com/albums')
  const newData=await data.json()
  console.log(newData);
  
  
} catch (error) {
  console.log(error.message);
  
}
  

}

getData()
*/

//!............fourth.............
/*
const getData=async()=>{

  try {
    const data=await fetch('https://jsonplaceholder.typicode.com/todos')
    const newData=await data.json()
    console.log(newData);
    
    
  } catch (error) {
    console.log(error.message);
    
    
  }
}
getData()

*/


//!.............fifth...........
/*
const getData=async()=>{
  try {
    const data=await fetch('https://jsonplaceholder.typicode.com/photos')
    const newData= await data.json()
    console.log(newData);
    
    
  } catch (error) {
    console.log(error.message);
    
  }
}
getData()
*/

const num=[1,2]
num.push(3)
console.log(num);









