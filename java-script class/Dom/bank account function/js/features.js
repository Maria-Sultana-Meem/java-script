document.getElementById('depo').addEventListener('click',()=>{
   document.getElementById('cashOutSection').classList.add('hidden')
    document.getElementById('depositSection').classList.remove('hidden') 
    document.getElementById('transactionSection').classList.add('hidden')

    document.getElementById('cash').classList.remove('bg-red-700')
document.getElementById('depo').classList.add('bg-red-700')
document.getElementById('trans').classList.remove('bg-red-700')
    
    
})

document.getElementById('cash').addEventListener('click',()=>{
document.getElementById('cashOutSection').classList.remove('hidden')
    document.getElementById('depositSection').classList.add('hidden')
    document.getElementById('transactionSection').classList.add('hidden')

    document.getElementById('cash').classList.add('bg-red-700')
document.getElementById('depo').classList.remove('bg-red-700')
document.getElementById('trans').classList.remove('bg-red-700')
    
})
    

document.getElementById('trans').addEventListener('click',()=>{
    document.getElementById('cashOutSection').classList.add('hidden')
    document.getElementById('depositSection').classList.add('hidden')
    document.getElementById('transactionSection').classList.remove('hidden')

    document.getElementById('cash').classList.remove('bg-red-700')
document.getElementById('depo').classList.remove('bg-red-700')
document.getElementById('trans').classList.add('bg-red-700')

})

