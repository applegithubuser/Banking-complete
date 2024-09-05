// Get elements from the DOM
const depositButton = document.getElementById('deposit-button');
const withdrawButton = document.getElementById('withdraw-button');
const depositInput = document.getElementById('deposit-input');
const withdrawInput = document.getElementById('withdraw-input');
const depositTotalElement = document.getElementById('deposit-total');
const withdrawTotalElement = document.getElementById('withdraw-total');
const balanceTotalElement = document.getElementById('balance-total');
const LogoutButton = document.getElementById ("logout-buttton");



// Function to parse and validate input
function parseInput(input) {
    const value = parseFloat(input.value);
    if (isNaN(value) || value <= 0) {
        alert("Please enter a valid amount.");
        return null;
    }
    return value;
}

// Function to update deposit
function updateDeposit() {
    const depositAmount = parseInput(depositInput);
    if (depositAmount !== null) {
        const currentDepositTotal = parseFloat(depositTotalElement.innerText);
        const currentBalanceTotal = parseFloat(balanceTotalElement.innerText);
        depositTotalElement.innerText = (currentDepositTotal + depositAmount).toFixed(2);
        balanceTotalElement.innerText = (currentBalanceTotal + depositAmount).toFixed(2);
        
        // Clear input field
        depositInput.value = '';  
    }
}

// Function to update withdrawal
function updateWithdraw() {
    const withdrawAmount = parseInput(withdrawInput);
    const currentBalanceTotal = parseFloat(balanceTotalElement.innerText);

    if (withdrawAmount !== null) {
        if (withdrawAmount > currentBalanceTotal) {
            alert("Insufficient balance for this withdrawal.");
            return;
        }
        const currentWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
        withdrawTotalElement.innerText = (currentWithdrawTotal + withdrawAmount).toFixed(2);
        balanceTotalElement.innerText = (currentBalanceTotal - withdrawAmount).toFixed(2);
        
        // Clear input field
        withdrawInput.value = '';  
    }
}

// Event listeners for deposit
depositButton.addEventListener('click', updateDeposit);
depositInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        updateDeposit();
    }
});

// Event listeners for withdraw
withdrawButton.addEventListener('click', updateWithdraw);
withdrawInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        updateWithdraw();
    }
});

// Event listner for Logout Button 
LogoutButton.addEventListener ("click", () => {
    window.location.href = 'index.html'
})

