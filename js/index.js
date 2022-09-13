document.getElementById('calculate').addEventListener('click',function()
{
    const food=document.getElementById('food').value
    const rent=document.getElementById('rent').value
    const clothes=document.getElementById('clothes').value
    const totalExpenseDisplay=document.getElementById('total-expense')
    const banalce =document.getElementById('banalce')
    const income=document.getElementById('income').value

    const totalExpense= parseInt(food) + parseInt(rent) + parseInt(clothes) 
    let remainBalance = 0;
    if(isNaN(totalExpense)==false)
    {
       if(totalExpense>income)
       {
        alert('your income is less than your expense')
       }
       else{
       remainBalance = income -totalExpense
        totalExpenseDisplay.innerText=totalExpense;
       }
        
    }
    if(isNaN(remainBalance)==false)
    {
        banalce.innerText=remainBalance
    }
})

document.getElementById('save-btn').addEventListener('click',function()
{
    const income=document.getElementById('income').value
    const saveInput=document.getElementById('save-input').value
    const saveAmount=document.getElementById('saving-amount')
    const remainBalanceDisplay=document.getElementById('remain-balance')
    const banalce =document.getElementById('banalce')
    const save= (parseInt(income)*parseInt(saveInput))/100;
    let remain=0
    if(parseInt(banalce.innerText)==0)
    {
        remain = income - save
    }
    else if(parseInt(banalce.innerText)<save)
    {
        alert('your balance is less than your saving')
    }
    else{
        remain = parseInt(banalce.innerText) - save 
    }
    
    
    if(isNaN(save)==false && isNaN(remain)==false)
    {
        saveAmount.innerText=save;
        if(banalce.innerText)
        remainBalanceDisplay.innerText=remain

    }


})