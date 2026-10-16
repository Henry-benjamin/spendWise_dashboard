# SpendWise Dashboard - JavaScript Foundation

SpendWise is a personal finance dashboard application designed to help users manage, track, and optimize their monthly budgets. In Week 6, SpendWise was updated with JavaScript functionality to collect financial input from users, calculate key budget metrics, and output the financial breakdown.

## Features & JavaScript Implementation

This release adds core JavaScript concepts to power the application logic:

1. **Variables & Application Data:**
   - Uses `let` and `const` variables to track core financial data including `totalIncome`, `totalExpenses`, `savingsGoal`, and `remainingBalance`.
   - Ensures data integrity by casting string inputs to numeric types (`Number` / `parseFloat`).

2. **User Input Collection:**
   - Prompts users on page load using browser `prompt()` dialogs to enter their income, expenses, and savings target.

3. **Budget Calculations:**
   - Performs arithmetic calculations to derive the remaining balance (`Income - Expenses`).
   - Calculates percentage ratios for spending and savings relative to total income.

4. **Reusable Functions:**
   - `calculateRemainingBalance(income, expenses)`: Encapsulates remaining budget arithmetic.
   - `calculatePercentage(amount, income)`: Computes percentage allocations.
   - `displayConsoleSummary(...)`: Formats and logs clean, readable output to the browser console with budget status alerts.

5. **Console Output:**
   - Displays all outputs clearly labeled in the Developer Tools Console (`F12`).
