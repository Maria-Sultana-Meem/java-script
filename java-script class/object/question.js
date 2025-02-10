//!Answer to the question number -01
  /*  
!part-A

    let numbers = [10,5,20,3]
    numbers.sort((a,b)=>(a-b));
    console.log(numbers);
 !part-B
    let numbers = [10,5,20,3]
    numbers.sort((a,b)=>(b-a));
    console.log(numbers);*/
//!Answer to the question number-02
/*?part-A
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
newRev = [];
for(let i = num.length-1;i>=0;i--){
    const getData=num[i];
    newRev.push(getData)
}
//?part-B
 console.log(newRev)*/


 //!Answer to the question number-03
 /*
 ?part-01
 let touristDestination = ['Sundarbans',' Srimangal',' Rangamati','Sylhet','Kuakata']
 ?part-02
 touristDestination.push('Mainamati');
 console.log(touristDestination);
 ?part-03
 touristDestination.push('Bandarban');
 touristDestination.push('Sajek Valley');
 console.log(touristDestination);
 
 ?part-04
  touristDestination.pop();
  part-05
  console.log(touristDestination); */

//!Answer to the question number-04
//part-01




 let marks = 10;

 
switch(true){

   case marks>=90 && marks<=100:
     console.log('A')

   break;

   case marks>=80 && marks<90:
     console.log('B')

   break;

   case marks>=70 && marks<80 :
     console.log('C')

   break;

   case marks>=60 && marks<70 :
     console.log('D')

     break;
     case marks<60 :
     console.log('F')

     break;
   
   default:
    console.log('invalid')};
    

    //!Answer to the question number-05
        
    /*
      
    function calculate(num1, num2, operation)  {
      if (operation === "add") {
          return num1 + num2;
      } 
      else if (operation === "subtract") {
          return num1 - num2;
      } 
      else if (operation === "multiply") {
          return num1 * num2;
      } 
      else if (operation === "divide") {
                if (num2 !== 0) {
                 return num1 / num2;
          } 
  else {
              return "Error"
            }
      } 
      else {
          return "Error"
      }
  }
   
   console.log(calculate(10, 5, "add"));       // 15
console.log(calculate(20, 8, "subtract"));  // 12
console.log(calculate(6, 7, "multiply"));   // 42
console.log(calculate(30, 5, "divide"));    // 6
console.log(calculate(10, 0, "divide"));    // "Error: 0 দিয়ে ভাগ করা যায় না!"
console.log(calculate(10, 2, "modulus"));   // "Error: ভুল অপারেশন দিয়েছেন!"



  */