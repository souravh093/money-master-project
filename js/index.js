let balanceNumber;
document.getElementById("calculateBtn").addEventListener("click", function(){
    const incomeInput = document.getElementById("inputIncome").value;
    const foodInput = document.getElementById("foodInput").value;
    const rentInput = document.getElementById("rentInput").value;
    const clouthsInput = document.getElementById("clouthsInput").value;
    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clouthsInput);

    
    
    if (parseFloat(incomeInput) < parseFloat(foodInput) || parseFloat(incomeInput) < parseFloat(rentInput) || parseFloat(incomeInput) < parseFloat(clouthsInput) || parseFloat(incomeInput) < totalExpenses){
        alert(`Your Income is ${incomeInput} and Your Expenses is ${totalExpenses} So Input Lower Expenses`);
        return;
    }
    if (isNaN(incomeInput) || isNaN(foodInput) || isNaN(rentInput) ||  isNaN(clouthsInput)){
        alert("Please enter valid input value");    
        return;
    }
    
    const totalExpense = document.getElementById("totalExpenses");
    totalExpense.innerText = totalExpenses;

    const afterBalance = parseFloat(incomeInput) - totalExpenses;
    balanceNumber = afterBalance;
    const balance = document.getElementById("balance");
    balance.innerText = afterBalance;
})


document.getElementById("saveBtn").addEventListener("click", function(){
    const incomeInput = document.getElementById("inputIncome").value;
    const saveInput = document.getElementById("saveInput").value;

    const savingAmount = (saveInput/100) * parseFloat(incomeInput);

    if(balanceNumber < savingAmount) {
        alert(`Your don't save higher than balance please inter again low save amount`)
        return;
    }

    const showAmount = document.getElementById("savingAmount");
    showAmount.innerText = savingAmount;

    const remainingBalance = balanceNumber - savingAmount;
    const showRemainingBalance = document.getElementById("remainingBalance")
    showRemainingBalance.innerText = remainingBalance;
})