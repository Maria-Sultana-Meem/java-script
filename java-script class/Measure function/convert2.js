 /*
function isLeapYear(year) {
    if((year%4===0 && year%100!==0)||(year%400===0)){
        return `${year} is Leap Year`

    }
    else{
        return `${year} is Not Leap Year`
    }

}
console.log(isLeapYear(2027));
console.log(isLeapYear(2000));
console.log(isLeapYear(2026));
*/


function math(num){
const result = Math.abs(num)
return result

};
console.log(math(-50));

function math(num,num1){
const result = Math.pow(num,num1)
return result

};
console.log(math(5,3));

function math(num){
const result = Math.round(num)
return result

};
console.log(math(5.5));




/*
!...........Sum of Odd numbers.............
const numbers=[5,10,23,56,78,34,45,57,44,33,11,22,55,88,90];
function avgOfOdd(array){
         
    let oddNum =[];
    let sumOfodd=0;
    for (const oddNumber of array) {
         if(oddNumber%2 !==0){
            oddNum.push(oddNumber)
         
         }
         
    }

   
    for (const element of oddNum) {
        sumOfodd += element;
           
    }
   
    const sumOfAvg = sumOfodd/oddNum.length;
    return sumOfAvg

}
console.log(avgOfOdd(numbers));
*/





