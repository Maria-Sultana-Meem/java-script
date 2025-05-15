//!................2nd part..........

document.getElementById('donateBtn2').addEventListener('click',()=>{
 const donateAmountInput2= getValueInput('donateInput2')
 const donateAmount2=getInputText('donation2')
 const mainAmount=getInputText('mainAmount')

 if(donateAmountInput2<=mainAmount){
    document.getElementById('donation2').innerText=donateAmountInput2+donateAmount2;
    document.getElementById('mainAmount').innerText=mainAmount-donateAmountInput2;

    fieldclear('donateInput2')
 
    
    const createHistoryDiv=document.createElement('div')
createHistoryDiv.classList.add('bg-gray-200')
createHistoryDiv.classList.add('text-center')
//createHistoryDiv.classList.add('w-6/12 mx-auto')
createHistoryDiv.classList.add('w-6/12')
createHistoryDiv.classList.add('mx-auto')
createHistoryDiv.classList.add('mt-10')
createHistoryDiv.innerHTML=`
<h1 class='Text-2xl font-semibold'>Donate</h1>
<p> ${donateAmountInput2} Taka is Donated for flood relief in Feni,Bangladesh

`
 document.getElementById('historySection').appendChild(createHistoryDiv)
    
}
else{
    alert('invalid taka')
}

})
