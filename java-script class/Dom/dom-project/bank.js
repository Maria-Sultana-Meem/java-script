document.getElementById('btn').addEventListener('click',()=>{
   const accountNo= document.getElementById('account').value
   const pinNo= document.getElementById('pin').value

   if(accountNo==='01521777639' && pinNo==='77639') {
     window.location.href='./home.html'
    
    
   }
   else{
    alert('invalid account or pin')
   }
})