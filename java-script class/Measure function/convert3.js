//!................Remove Element................
/*
const students = ['Sima', 'Jeri', 'Kakoly', 'Simu', 'Jeri', 'Sumaya', 'Jeri', 'habiba', 'Kakoly'];  

function withoutDuplicate(array){
     let mainStudent =[];
    for (const student of array){ 
        if(mainStudent.includes(student)===false){
         mainStudent.push(student);
        }
        
    };
    return mainStudent

};
console.log(withoutDuplicate(students));
*/

/*
const numbers = [45,45,12,14,27,27,51,51,54,46];
function singleNumberAvg(array){

  let  singleNum= [];
 let sumSingleNumber = 0;

  for (const single of array) {
       if(singleNum.includes(single)===false){
        singleNum.push(single)
       }
       
  }
  
  for (const number of singleNum) {
       sumSingleNumber+=number
  }
   return sumSingleNumber/singleNum.length
   
}
console.log(singleNumberAvg(numbers));
*/

/*

const students = ['Sima', 'Jeri', 'Kakoly', 'Simu', 'Jeri', 'Sumaya', 'Jeri', 'habiba', 'Kakoly'];  

function noDupli(singles){
    const singleNames=[...new Set(singles)];
    return singleNames


};
console.log(noDupli(students));
*/

//!.......swap............
/*
let DB= 'chocolate';
let Meem='Flower';
let Maria = DB
  DB=Meem;
  Meem=Maria;
  console.log(DB,Meem);*/

//! shorthand......
let DB= 'chocolate';
let Meem='Flower';
[DB,Meem]=[Meem,DB]
console.log(DB,Meem);



  

 