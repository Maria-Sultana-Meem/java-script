document.getElementById('cashBtn').addEventListener('click',()=>{
const cashoutAmount=parseFloat(document.getElementById('cashoutAmount').value) 
const pin=document.getElementById('cashoutPin').value;
const balance=document.getElementById('balance')
const updateBalance=parseFloat(balance.innerText)


if (pin==='77639' && cashoutAmount<=updateBalance) {
const newBalance=updateBalance-cashoutAmount
balance.innerText=newBalance
    
} else {
    alert('invalid amount or pin') 
}
})