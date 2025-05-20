const page=(page)=>{
 window.location.href=`../${page}`

}

const getValueInput=(id)=>{
return parseFloat(document.getElementById(id).value)

}

const getInputText=(id)=>{
    return parseFloat(document.getElementById(id).innerText)
}

//fieldclear..............

const fieldclear=(id)=>{
document.getElementById(id).value=''
}



document.getElementById('donationBtn').addEventListener('click',()=>{
    document.getElementById('mainSection').classList.remove('hidden')
    document.getElementById('historySection').classList.add('hidden')

    document.getElementById('donationBtn').classList.add('bg-red-700')    
    document.getElementById('historyBtn').classList.remove('bg-red-700')    
})




document.getElementById('historyBtn').addEventListener('click',()=>{
    document.getElementById('mainSection').classList.add('hidden')
    document.getElementById('historySection').classList.remove('hidden')
     document.getElementById('toast').classList.add('hidden')

    
    document.getElementById('historyBtn').classList.add('bg-red-700')
    document.getElementById('donationBtn').classList.remove('bg-red-700')
})
