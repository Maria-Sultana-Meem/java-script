document.getElementById('loginBtn').addEventListener('click',()=>{

    const accountNo=getInputValue('accountNumber')
    const pinNo=getInputValue('pinNumber')

    if(accountNo===1521777639  && pinNo===1234){
        window.location.href='./home.html'

    }
    else{
        alert('invalid pin or number')
    }
})