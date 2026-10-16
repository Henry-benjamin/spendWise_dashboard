/**
 * SpendWise - JavaScript Foundation
 * Week 6 Capstone Module
 */

// 1. STORE APPLICATION DATA (Variables & Data Types)
let totalIncome = 0;
let totalExpenses = 0;
let savingsGoal = 0;
let remainingBalance = 0;

// 2. REUSABLE FUNCTIONS
/**
 * Calculates the remaining budget balance.
 * @param {number} income - The total monthly income
 * @param {number} expenses - The total monthly expenses
 * @returns {number} The remaining balance
 */
function calculateRemainingBalance(income, expenses) {
  return income - expenses;
}

/**
 * Calculates the percentage of income saved or spent.
 * @param {number} amount - The expense or savings amount
 * @param {number} income - Total income
 * @returns {number} Percentage formatted to 2 decimal places
 */
function calculatePercentage(amount, income) {
  if (income <= 0) return 0;
  return ((amount / income) * 100).toFixed(2);
}

/**
 * Collects user inputs using browser prompts and processes data.
 */
function collectUserData() {
  console.log("=== SpendWise Budget Processing Started ===");

  // 3. COLLECT USER INPUT & CONVERT TO NUMBERS
  const rawIncome = prompt("Enter your total monthly income ($):");
  const rawExpenses = prompt("Enter your total monthly expenses ($):");
  const rawSavingsGoal = prompt("Enter your target monthly savings goal ($):");

  // Convert strings from prompt() into numeric floats
  totalIncome = parseFloat(rawIncome) || 0;
  totalExpenses = parseFloat(rawExpenses) || 0;
  savingsGoal = parseFloat(rawSavingsGoal) || 0;

  // 4. PERFORM CALCULATIONS USING FUNCTIONS
  remainingBalance = calculateRemainingBalance(totalIncome, totalExpenses);
  const expenseRatio = calculatePercentage(totalExpenses, totalIncome);
  const savingsRatio = calculatePercentage(savingsGoal, totalIncome);

  // 6. DISPLAY RESULTS IN THE BROWSER CONSOLE
  displayConsoleSummary(
    totalIncome,
    totalExpenses,
    remainingBalance,
    savingsGoal,
    expenseRatio,
    savingsRatio,
  );

  // Optional UI Update helper
  updateUI();
}

/**
 * Outputs clearly labeled budget metrics to the console.
 */
function displayConsoleSummary(
  income,
  expenses,
  balance,
  targetSavings,
  expPct,
  savPct,
) {
  console.log("-----------------------------------------");
  console.log(`Total Monthly Income:     $${income.toFixed(2)}`);
  console.log(
    `Total Monthly Expenses:   $${expenses.toFixed(2)} (${expPct}% of income)`,
  );
  console.log(`Remaining Balance:        $${balance.toFixed(2)}`);
  console.log(
    `Target Savings Goal:      $${targetSavings.toFixed(2)} (${savPct}% of income)`,
  );

  if (balance >= targetSavings) {
    console.log("Status: 🎉 Great job! You are meeting your savings goal.");
  } else if (balance > 0) {
    console.log(
      "Status: ⚠️ Warning: You have a positive balance, but it falls short of your savings goal.",
    );
  } else {
    console.log("Status: 🚨 Alert: Your expenses exceed your income!");
  }
  console.log("-----------------------------------------");
}

/**
 * Updates DOM cards if available.
 */
function updateUI() {
  const incomeEl = document.getElementById("display-income");
  const expensesEl = document.getElementById("display-expenses");
  const balanceEl = document.getElementById("display-balance");
  const savingsEl = document.getElementById("display-savings");

  if (incomeEl) incomeEl.textContent = `$${totalIncome.toFixed(2)}`;
  if (expensesEl) expensesEl.textContent = `$${totalExpenses.toFixed(2)}`;
  if (balanceEl) balanceEl.textContent = `$${remainingBalance.toFixed(2)}`;
  if (savingsEl) savingsEl.textContent = `$${savingsGoal.toFixed(2)}`;
}

// Automatically trigger data collection on page load
window.addEventListener("DOMContentLoaded", () => {
  collectUserData();
});
