//!.........input field.........
const getInputValue=(id)=>{
const inputValue=document.getElementById(id).value
const getInputNumber=parseFloat(inputValue)
return getInputNumber

}

//!innertext..........

const getInnerText=(id)=>{
const innertext=document.getElementById(id).innerText
const getConvertedNumber=parseFloat(innertext)
return getConvertedNumber

}

//!field clear...........
const fieldClear=(id)=>{
    document.getElementById(id).value=''
}


