document.getElementById('cashOutBtn').addEventListener('click',()=>{

const cashOutAmount=getInputValue('inputCashAmount')
const cashOutPin=getInputValue('inputCashpinNumber')
const balance=getInnerText('balance')

if(cashOutPin===1234 && cashOutAmount<=balance && !isNaN(cashOutAmount)){
    const totalBalance=balance-cashOutAmount
    document.getElementById('balance').innerText=totalBalance
    fieldClear('inputCashAmount')
    fieldClear('inputCashpinNumber')

    const createDiv=document.createElement('div')
    createDiv.classList.add('bg-green-300')
    createDiv.innerHTML=`
    <h1 class='Text-2xl font-semibold'>Withdraw</h1>
    <p>Taka ${cashOutAmount} has been debited </p>
    <p> Total Balance ${totalBalance} </p>
    `
    document.getElementById('transactionSection').appendChild(createDiv)
}
else{
    alert('invalid')
}


})

