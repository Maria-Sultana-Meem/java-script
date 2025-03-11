
let sentence = "we  are learning JavaScript enthusiastically!";
function findLongestWord(bigWord){
    let words = bigWord.split(' ');
    let longestWord = ' ';
    for (const word of words) {
        if(word.length>longestWord.length){
         longestWord=word
        }
        
    }
    return longestWord

  };
 console.log(findLongestWord(sentence));
 
 





 let rupakAge = 40;
let sazidAge= 47;
  if (rupakAge>sazidAge){
    console.log(`${rupakAge} is large`);
    
  }
    else {
       console.log(`${sazidAge} is large`);
       
    };


    let simaAge = 35;
let jeriAge = 28;
 let sumayaAge = 22;
 if(simaAge>jeriAge && simaAge>sumayaAge){
    console.log('sima is elder than others');
    
 }
 else if(jeriAge>simaAge && jeriAge>sumayaAge){
    console.log('jeri is elder than others');
    
 }
 else{'sumaya is elder than others'}


 let simuAge= 45;
let sultanaMariaAge = 48;
let SalmaAge = 82;

function elder(age1,age2,age3) {
    if (age1>age2 && age1>age3) {
        return `${age1} is elder`
        
    } else if(age2>age1 && age2>age3) {
        return `${age2} is elder`
        
    }
    else{ return `${age3} is elder`}
    
}
console.log(elder(simuAge,sultanaMariaAge,SalmaAge));


let studentsAge = [20,25, 35, 40, 85, 45, 60,51]
function highestAge (age){
    let bigger =Math.max(...age)
    return bigger

}
console.log(highestAge(studentsAge));

/*
&.......... Smallest word:...........

let sentence = "we are learning JavaScript enthusiastically!";
function smallWord(stng){
let newSentence = stng.split(' ')
let smallWord= newSentence[0]
for (const element of newSentence) {
    if(smallWord.length>element.length){
        smallWord= element
    }
}
return smallWord;
}
console.log(smallWord(sentence));
*/


/*
let simaAge =35;
let jeriAge = 38;
let sumayaAge=32;

function elder(){

    if(simaAge> jeriAge && simaAge> sumayaAge){
        return`${simaAge} is elder than others`
        
    }
    else if(jeriAge> simaAge && jeriAge>sumayaAge){
        return`${jeriAge} is elder than others`
        
    }
    else{
        return`${sumayaAge} is elder than others`
        
    }
}

console.log(elder(simaAge,jeriAge,sumayaAge));

*/

/*
let studentsAge = [20,25, 35, 40, 85, 45, 60,51]
function highestAge(ages) {

    let oldAge=0;
    for (const age of ages) {
        if(age>oldAge){
           oldAge=age
        }
        
    }
 return oldAge   
}

console.log(highestAge(studentsAge));
*/

/*
let studentsAge = [34,25, 35, 40, 85, 45, 60,51]
function smallest(ages) {

    let oldAge=ages[0];
    for (const age of ages) {
        if(age<oldAge){
           oldAge=age
        }
        
    }
 return oldAge   
}

console.log(smallest(studentsAge));

*/

/*
let studentsAge = [34,25, 35, 40, 85, 45, 60,51];

function bigNum(maximum) {
    let num = Math.max(...maximum)
    return num;
    //return Math.max(...maximum);
}
console.log(bigNum(studentsAge));
*/



