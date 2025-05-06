document.getElementById('loginBtn').addEventListener('click',()=>{
   const accountNumber= document.getElementById('accountNumber').value
   const pinNumber= document.getElementById('pinNumber').value

   if(accountNumber==='01521777639' && pinNumber==='77639') {
     window.location.href='./home.html'
    
    
   }
   else{
    alert('invalid account or pin')
   }
})