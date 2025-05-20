//!............first part........

document.getElementById('donateBtn1').addEventListener('click',()=>{
 const donateAmountInput= getValueInput('donateInput1')
 const donateAmount=getInputText('donation1')
 const mainAmount=getInputText('mainAmount')

 if(!isNaN(donateAmountInput)&& donateAmountInput<=mainAmount && donateAmountInput>0){
    document.getElementById('donation1').innerText=donateAmountInput+donateAmount;
    document.getElementById('mainAmount').innerText=mainAmount-donateAmountInput

    fieldclear('donateInput1')

 
    const createHistoryDiv=document.createElement('div')
//createHistoryDiv.classList.add('bg-gray-100')
//createHistoryDiv.classList.add('text-center')
createHistoryDiv.classList.add('w-6/12')
createHistoryDiv.classList.add('mx-auto')
createHistoryDiv.classList.add('mt-5')
createHistoryDiv.classList.add('p-5')
createHistoryDiv.classList.add('border')
createHistoryDiv.classList.add('rounded-lg')
createHistoryDiv.innerHTML=`
<h1 class='Text-2xl font-semibold'>Donate</h1>
<p> ${donateAmountInput} Taka is Donated for famine-2024 at Feni,Bangladesh

`
 document.getElementById('historySection').appendChild(createHistoryDiv)

 document.getElementById('toast').classList.remove('hidden')
 document.getElementById('mainSection').classList.add('hidden')
 
    
}
else{
    alert('invalid taka')
}

})

document.getElementById('closeBtn').addEventListener('click',()=>{

    document.getElementById('mainSection').classList.remove('hidden')
    document.getElementById('toast').classList.add('hidden')
})



