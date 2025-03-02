
//!..........inch to feet..........
/*
function inchToFeet (){
    const inch = 500;
     const feet =12;
     const result = inch/feet;
     console.log(result.toFixed(2));
     

};
inchToFeet();
*/

function kmTo(km){
    const kmeter=1000;
    const meter=km*kmeter;
    return meter
}
console.log(kmTo(6));

function meterTo(km){
    const meter=1000;
    const kilometer=meter/km;
    return kilometer
}
console.log(meterTo(50));

function inchToFeet(inch){
    const feet = parseInt(inch/12);
    const inches =inch%12;
    return `${feet} feet ${inches}inch`
    
};
console.log(inchToFeet(68));


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return `${year} is a Leap Year`;
    } else {
      return `${year} is NOT a Leap Year`;
    }
  };
  

console.log(isLeapYear(2024)); // 2024 is a Leap Year
console.log(isLeapYear(2023)); // 2023 is NOT a Leap Year
console.log(isLeapYear(1900)); // 1900 is NOT a Leap Year
console.log(isLeapYear(2000)); // 2000 is a Leap Year


let num = -25;
// ধনাত্মক মান
console.log(Math.abs(num)); // 25
// বর্গমূল
console.log(Math.sqrt(16)); // 4
// ঘাত
console.log(Math.pow(2, 4)); // 16
//র‍্যান্ডম সংখ্যা
console.log(Math.random()); // 0 থেকে 1 এর মধ্যে কোনো random সংখ্যা
// গোলাকার সংখ্যা
console.log(Math.round(3.7)); // 4
// বড় বা ছোট সংখ্যা
console.log(Math.max(5, 15, 25)); // 25
console.log(Math.min(5, 15, 25)); // 5



const numbers = [15, 16,17,18,19,20,21,22,23,24,25]
function oddAvg(arr){
  let sumOfOdd=0;
  let oddArray =[]
for (const element of arr) {
  if(element%2!==0){
    oddArray.push(element)
  }
}
for (const num of oddArray) {
 
  sumOfOdd= sumOfOdd + num
}
const avgofOddArray = sumOfOdd/ oddArray.length
return avgofOddArray
}
console.log( oddAvg(numbers));




const students = ['Sima', 'Jeri', 'Kakoly', 'Simu', 'Jeri', 'Sumaya', 'Jeri', 'habiba', 'Kakoly'];  

function examineOfDupli(polapan) { 
  const newArry = []; 


  for (const student of polapan) { 
    if (newArry.includes(student) === false) { 
      newArry.push(student); 
    }
  }
  return newArry;
}
console.log(examineOfDupli(students)); 










