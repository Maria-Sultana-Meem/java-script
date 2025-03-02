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


  
  function findLongestWord(sentence) {
    let words = sentence.split(' '); // স্ট্রিংকে ভেঙে শব্দগুলোর অ্যারে বানাই
    let longestWord = ' '; // এখানে সবচেয়ে বড় শব্দ রাখা হবে
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word; // যদি নতুন শব্দ বড় হয়, তাহলে সেটাই রাখি
        }
    }
    return longestWord;
}

let sentence = "we  are learning JavaScript enthusiastically!";
console.log(findLongestWord(sentence));
 // Output: "enthusiastically!"


let rupakAge = 40;
let sazidAge= 47;


if (rupakAge>sazidAge){
console.log(`${rupakAge} is large`);
}else {
    console.log(`${sazidAge} is large`);
}







let simaAge = 35;
let jeriAge = 28;
 let sumayaAge = 22;
 if(simaAge>jeriAge && simaAge > sumayaAge){
    console.log('Sima is elder than others');
}else if (jeriAge>simaAge && jeriAge > sumayaAge){
    console.log('Jeri is elder than others');
}else{
    console.log('Sumaya is elder than others');
}



let simuAge= 45;
let sultanaMariaAge = 48;
let SalmaAge = 82;
function elder(num1, num2, num3){
if(num1>num2 && num1>num3){
    return `${num1} is elder`
}else if (num2>num1&& num2>num3){
    return `${num2} is elder than others`
}else{
    return `${num3} is most most most buri than others`
}
  }


console.log(elder(simuAge, sultanaMariaAge, SalmaAge));




let studentsAge = [20,25, 35, 40, 85, 45, 60,51]//এখানে studentsAge নামের একটি অ্যারে তৈরি করা হয়েছে, যাতে ৮টি বয়সের মান রয়েছে।
//এখানে highestAge নামক একটি ফাংশন ঘোষণা করা হয়েছে যা একটি প্যারামিটার age নেবে।
//এই age প্যারামিটারটি অ্যারে হবে এবং ফাংশনটির কাজ হবে এই অ্যারের মধ্যে সবচেয়ে বড় সংখ্যা বের করা।
function highestAge(age){
let murubbi = Math.max(...age);
return murubbi
}


console.log(highestAge(studentsAge));

  











