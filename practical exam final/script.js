document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addExpenseBtn").addEventListener("click", addExpense);
    displayExpenses(); 
});

function addExpense() {
    const name = document.getElementById("expenseName").value.trim();
    const amount = document.getElementById("expenseAmount").value.trim();
    const date = document.getElementById("expenseDate").value;
    const category = document.getElementById("expenseCategory").value;
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        alert("No user logged in. Please log in first.");
        return;
    }

    if (!name || !amount || !date || !category) {
        alert("Please fill in all fields.");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

   
    const expense = {
        id: Date.now(),
        user: loggedInUser, 
        name,
        amount: parseFloat(amount).toFixed(2),
        date,
        category
    };

    
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(expense);

    
    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses(); 
    document.getElementById("expenseForm").reset(); 
}

function displayExpenses() {
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = ""; 
    const loggedInUser = localStorage.getItem("loggedInUser"); 

    if (!loggedInUser) {
        expenseList.innerHTML = "<li>No user logged in. Please log in first.</li>";
        return;
    }

    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const userExpenses = expenses.filter(expense => expense.user === loggedInUser);

    if (userExpenses.length === 0) {
        expenseList.innerHTML = "<li>No expenses recorded yet.</li>";
        return;
    }

   
    userExpenses.forEach(expense => {
        const item = document.createElement("li");
        item.textContent = `${expense.name} - $${expense.amount} (${expense.category}) on ${expense.date}`;
        expenseList.appendChild(item);
    });
}

