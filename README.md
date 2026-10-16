# SpendWise Dashboard - Interactive Application

SpendWise is a personal finance dashboard application designed to help users track expenses, monitor budgets, and evaluate financial health in real time. This version introduces core interactive JavaScript features, transforming the static UI into a fully responsive, dynamic application.

## Key Features & JavaScript Implementation

This release satisfies all interactive application requirements through modern vanilla JavaScript:

1. **Event Listeners & User Interactions:**
   - Listens for form submission events on the user interface (`expense-form`) to capture expense names and amounts dynamically.
   - Prevents default form submission behavior (`event.preventDefault()`) to keep the application running smoothly in a single-page view.

2. **Data Management with Arrays:**
   - Utilizes `expensesArray` to store multiple expense records as JavaScript objects, containing unique IDs, names, and numeric amounts.

3. **Data Processing with Loops:**
   - Employs a standard `for` loop to iterate through the `expensesArray`, accumulating total expenses and rendering individual transaction items on the webpage efficiently.

4. **Dynamic DOM Manipulation:**
   - Dynamically creates HTML elements (`document.createElement`) to display new expense entries in real time.
   - Updates metric cards (Income, Expenses, Remaining Balance, and Status) instantly whenever a new transaction is added.

5. **Conditional Decision Making:**
   - Evaluates the user's remaining balance using conditional statements (`if`, `else if`, `else`) to categorize the budget into distinct states: _Healthy Savings_, _Low Balance Warning_, or _Deficit (Over Budget!)_.
   - Dynamically changes the visual color and status label to provide immediate feedback to the user.
