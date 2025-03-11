/*
let today = new Date();
console.log(today);*/


let today = new Date ('2025-03-05')
console.log(today.getDate());

let setDate = new Date ();
console.log(setDate.toLocaleString('en-gb'));
console.log(setDate.toLocaleString('bn-gb'));



let options = { weekday: "long", // short / narrow
    year: "numeric", 
    month: "long", 
    day: "numeric" 
    };
    let formattedDate = new Date().toLocaleDateString("bn-BD", options);
    console.log(formattedDate);
    