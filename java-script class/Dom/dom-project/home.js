document.getElementById('cashoutBtn').addEventListener('click',()=>{

   document.getElementById('cashOutSection').classList.remove('hidden') 
   document.getElementById('depositSection').classList.add('hidden')
})

document.getElementById('depositBtn').addEventListener('click',()=>{

   document.getElementById('cashOutSection').classList.add('hidden') 
   document.getElementById('depositSection').classList.remove('hidden')
})