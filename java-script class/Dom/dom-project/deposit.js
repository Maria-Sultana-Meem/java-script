document.getElementById('depoBtn').addEventListener('click',()=>{
    const deposiAmount=parseFloat(document.getElementById('depositAmount').value) 
    const depositPin=document.getElementById('depositPin').value
    const balance=document.getElementById('balance')
    const updateBalance=parseFloat(balance.innerText)
  if(depositPin==='77639'){
 const newBalance=deposiAmount+updateBalance
    balance.innerText=newBalance
  }
  else{
    alert('Invalid pin or Amount')
  }
})