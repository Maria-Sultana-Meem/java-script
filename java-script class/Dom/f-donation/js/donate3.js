
//!........3rd part.............

document.getElementById('donateBtn3').addEventListener('click',()=>{
 const donateAmountInput3= getValueInput('donateInput3')
 const donateAmount3=getInputText('donation3')
 const mainAmount=getInputText('mainAmount')

 if(donateAmountInput3<=mainAmount){
    document.getElementById('donation3').innerText=donateAmountInput3+donateAmount3;
    document.getElementById('mainAmount').innerText=mainAmount-donateAmountInput3;

    fieldclear('donateInput3')

    document.getElementById('toast').classList.remove('hidden')
 document.getElementById('mainSection').classList.add('hidden')
 
    
    const createHistoryDiv=document.createElement('div')
createHistoryDiv.classList.add('w-6/12')
createHistoryDiv.classList.add('mx-auto')
createHistoryDiv.classList.add('mt-5')
createHistoryDiv.classList.add('p-5')
createHistoryDiv.classList.add('border')
createHistoryDiv.classList.add('rounded-lg')
createHistoryDiv.innerHTML=`
<h1 class='Text-2xl font-semibold'>Donate</h1>
<p> ${donateAmountInput3} Taka is Donated for Aid for Injured in the Quota Movement,Bangladesh

`
 document.getElementById('historySection').appendChild(createHistoryDiv)
    
}
else{
    alert('invalid taka')
}

})

document.getElementById('closeBtn').addEventListener('click',()=>{

    document.getElementById('mainSection').classList.remove('hidden')
    document.getElementById('toast').classList.add('hidden')
})