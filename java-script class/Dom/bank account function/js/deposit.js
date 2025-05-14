document.getElementById('depositBtn').addEventListener('click',()=>{


const depositAmount=getInputValue('inputDepositAmount')
const depositPin=getInputValue('inputDepositpinNumber')
const balance=getInnerText('balance')
if(depositPin===1234){
 const totalBalance=depositAmount+balance
 document.getElementById('balance').innerText=totalBalance
 
 fieldClear('inputDepositAmount')
 fieldClear('inputDepositpinNumber')

 const createDiv=document.createElement('div')
    createDiv.classList.add('bg-green-300')
    createDiv.innerHTML=`
    <h1 class='Text-2xl font-semibold'>Deposit</h1>
    <p>Taka ${depositAmount} has been debited </p>
    <p> Total Balance ${totalBalance} </p>
    `
    document.getElementById('transactionSection').appendChild(createDiv)
}
else{
    alert('invalid')
}
})

