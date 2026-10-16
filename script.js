/**
 * SpendWise - Interactive Dashboard Logic
 * Handles arrays, loops, event listeners, and DOM updates.
 */

// Application State Data
let totalIncome = 3000.00; // Default base income
let expensesArray = [];    // 2. WORK WITH MULTIPLE RECORDS (Arrays)

// Select DOM Elements
const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseListEl = document.getElementById("expense-list");

const displayIncomeEl = document.getElementById("display-income");
const displayExpensesEl = document.getElementById("display-expenses");
const displayBalanceEl = document.getElementById("display-balance");
const displayStatusEl = document.getElementById("display-status");

// 5. HANDLE USER INTERACTIONS (Event Listener on Form Submit)
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Collect values from form inputs
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (name && !isNaN(amount) && amount > 0) {
        // Create an expense object and add to array
        const newExpense = {
            id: Date.now(),
            name: name,
            amount: amount
        };

        expensesArray.push(newExpense);

        // Reset form fields
        expenseNameInput.value = "";
        expenseAmountInput.value = "";

        // Update application calculations and display
        updateDashboard();
    }
});

/**
 * Recalculates totals using loops and updates the UI dynamically.
 */
function updateDashboard() {
    let totalExpenses = 0;

    // Clear current visual list before re-rendering
    expenseListEl.innerHTML = "";

    if (expensesArray.length === 0) {
        expenseListEl.innerHTML = `<li class="empty-state">No expenses added yet.</li>`;
    } else {
        // 3. PROCESS DATA WITH LOOPS (Looping through expenses array)
        for (let i = 0; i < expensesArray.length; i++) {
            const item = expensesArray[i];
            totalExpenses += item.amount;

            // 4. UPDATE THE DASHBOARD DYNAMICALLY (DOM Manipulation)
            const listItem = document.createElement("li");
            listItem.innerHTML = `<span>${item.name}</span> <strong>$${item.amount.toFixed(2)}</strong>`;
            expenseListEl.appendChild(listItem);
        }
    }

    // Calculate remaining balance
    const remainingBalance = totalIncome - totalExpenses;

    // 1. IMPLEMENT DECISION MAKING (Conditional Statements)
    let statusMessage = "Balanced";
    let statusColor = "var(--accent-color)";

    if (remainingBalance < 0) {
        statusMessage = "Deficit (Over Budget!)";
        statusColor = "var(--danger-color)";
    } else if (remainingBalance < 500) {
        statusMessage = "Low Balance Warning";
        statusColor = "orange";
    } else {
        statusMessage = "Healthy Savings";
        statusColor = "var(--accent-color)";
    }

    // Update Text Content on Cards
    displayIncomeEl.textContent = `$${totalIncome.toFixed(2)}`;
    displayExpensesEl.textContent = `$${totalExpenses.toFixed(2)}`;
    displayBalanceEl.textContent = `$${remainingBalance.toFixed(2)}`;
    displayStatusEl.textContent = statusMessage;
    displayStatusEl.style.color = statusColor;
}