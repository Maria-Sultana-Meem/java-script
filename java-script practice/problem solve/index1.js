// ----------------Problem -1 Write a loop 1 to 200. Use break to exit the loop once you find 100.


/*let i= 1;
for(i=1; i<=200; i++){
    if(i==101){
        break;
    }
    console.log(i);
}*/


// Problem-2 Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
/*let sum=0;
let i = 1;
while(i<=100){




    sum= sum + i


   
    if(sum >= 100){
        break;
    }
 
    console.log(sum);
    i++
}


console.log(`total result : ${sum}`);
*/
// Problem-3: Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.


/*for(i=1; i<=40; i++){
    if(i%2!== 0){
        continue;
    }


    console.log(i);
}*/


// Problem-5: display odd numbers from 55 to 85 and skip the numbers divisible by 5.


/*for(i=55; i<=85; i++){


    if(i%5==0 || i%2 ==0){
        continue;
    }


    console.log(i);
}
    */
//    Problem-6:’’ I will invest at least 6 hrs every single day :for :next 60 days!" this message 60 times. So display this.


/*let display = ` "I will invest at least 6 hrs every single day :for :next 60 days!"`
for(i=1; i<=60; i++){


    console.log(i + ' ' + display);
}*/


// Problem-7: Find all the odd numbers from 61 to 100.
//                   And Find all the even numbers from 78 to 98.
/*for (let i = 61; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(`Odd: ${i}`);
    }
}


for (let i = 78; i <= 98; i++) {
    if (i % 2 === 0) {
        console.log(`Even: ${i}`);
    }
}
*/


// Problem-8: Display sum of all the odd numbers from 91 to 129.




/*let sumOfOddNumber = 0;


for (let i = 91; i <= 129; i++) {
    if (i % 2 !== 0) {
        sumOfOddNumber += i; 
    }
}


console.log(`The sum of all odd numbers from 91 to 129 is: ${sumOfOddNumber}`);


*/


// Problem-9:Display sum of all the even numbers from 51 to 85.


/*let sumOfEvenNumber = 0;
for(i=51; i<= 85; i++){


    if (i%2 ==0){
        sumOfEvenNumber = sumOfEvenNumber+ i;
       
    }
}
console.log(sumOfEvenNumber);*/




// Problem -10 : Implement a countdown timer that counts down from 81 to 65.


/*for(let i=81; i>=65; i--){
    console.log(i);
}*/


// Problem-11: Generate a multiplication table for number 9


// let namota = 9;


// for(i=1; i<=10; i++){


    //     console.log(`${namota} x ${i} = ${namota * i}`);}

