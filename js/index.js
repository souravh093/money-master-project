let balanceNumber;
document.getElementById("calculateBtn").addEventListener("click", function(){
    const incomeInput = document.getElementById("inputIncome").value;
    const foodInput = document.getElementById("foodInput").value;
    const rentInput = document.getElementById("rentInput").value;
    const clouthsInput = document.getElementById("clouthsInput").value;
    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clouthsInput);

    
    
    if (parseFloat(incomeInput) < parseFloat(foodInput) || parseFloat(incomeInput) < parseFloat(rentInput) || parseFloat(incomeInput) < parseFloat(clouthsInput) || parseFloat(incomeInput) < totalExpenses){
        const calculateBtn = document.getElementById("calculateBtn");
        calculateBtn.setAttribute("for", "my-modal-3");
        return;  
    }

    if(incomeInput < 0){
        const calculateBtn = document.getElementById("calculateBtn");
        calculateBtn.setAttribute("for", "my-modal-3");
        return; 
    }

    if (isNaN(incomeInput) || isNaN(foodInput) || isNaN(rentInput) ||  isNaN(clouthsInput)){
        const calculateBtn = document.getElementById("calculateBtn");
        calculateBtn.setAttribute("for", "my-modal-3");
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
        const saveBtn = document.getElementById("saveBtn");
        saveBtn.setAttribute("for", "my-modal-4");
        return;
    }

    const showAmount = document.getElementById("savingAmount");
    showAmount.innerText = savingAmount;

    const remainingBalance = balanceNumber - savingAmount;
    const showRemainingBalance = document.getElementById("remainingBalance")
    showRemainingBalance.innerText = remainingBalance;
});


document.getElementById("closeBtn1").addEventListener("click", function() {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.removeAttribute("for", true);
})
document.getElementById("closeBtn2").addEventListener("click", function() {
    const saveBtn = document.getElementById("saveBtn");
    saveBtn.removeAttribute("for", true);
})