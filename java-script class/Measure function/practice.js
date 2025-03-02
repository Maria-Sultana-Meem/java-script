
let sentence = "we  are learning JavaScript enthusiastically!";
function findLongestWord(sentence){
    let words = sentence.split(' ');
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


