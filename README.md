# SpendWise - Personal Finance Dashboard

SpendWise is an interactive, responsive personal finance tracking web application built to help users monitor their income, log expenses, and instantly visualize their overall budget status in real time.


## 🔗 Project Links

* **Public GitHub Repository:** [https://github.com/Henry-benjamin/spendWise_dashboard](https://github.com/Henry-benjamin/spendWise_dashboard)
* **Live Netlify Application:** [https://dashboard-spendwise.netlify.app](https://dashboard-spendwise.netlify.app)

## 🛠️ Technologies Used

* **HTML5:** Semantic structure for financial metric cards, expense forms, and dynamic data tables.
* **CSS3:** Custom layout system utilizing Flexbox and Grid, dark mode UI styling, and responsive media queries for mobile accessibility.
* **JavaScript (Vanilla ES6):** Event listeners, array management (`push`, `reduce`), conditional logic, and dynamic DOM manipulation for real-time calculations.
* **Git & GitHub:** Version control system and remote repository hosting.
* **Netlify:** Cloud platform for automated Continuous Deployment (CI/CD) integrated with GitHub.

## 📁 GitHub Repository Information

* **Repository Name:** `spendWise_dashboard`
* **Branch:** `main`
* **File Structure:**
  index.html        # Main dashboard markup and content
  style.css         # Visual styles, variables, and responsive layout
  script.js         # Core application logic and DOM updating algorithms
  README.md         # Comprehensive project documentation


## 🚀 Deployment Process Summary

1. **Version Control Initialization:** Initialized a local Git repository, committed `index.html`, `style.css`, and `script.js`, and established the `main` branch.
2. **GitHub Remote Linkage:** Created a public repository (`spendWise_dashboard`) under `Henry-benjamin` and pushed local commits upstream.
3. **Netlify Integration:** Authenticated Netlify with GitHub and imported `spendWise_dashboard` with default root build settings.
4. **Subdomain Customization:** Updated the generated default Netlify name to a clean project URL: `https://dashboard-spendwise.netlify.app`.
5. **Continuous Deployment Verification:** Made code edits locally, committed and pushed to GitHub `main`, and confirmed that Netlify automatically built and updated the live production site without manual intervention.


## 💡 Challenges Encountered

* **State Synchronization:** Ensuring that adding a new expense simultaneously updated total expenses, subtracted from remaining balance, updated the budget status alert badge, and appended a new record row without reloading the page.
* **Responsive Layout Shifts:** Designing financial metric cards that remain easily scannable on narrow mobile screens without truncating text or breaking container alignments.
* **Deployment Workflow:** Managing initial Git push errors and configuring custom Netlify subdomains while removing build default overlays.


## 🎓 Lessons Learned

* **Modular JavaScript:** Separating input gathering, calculation logic, and DOM rendering functions makes front-end applications cleaner and easier to debug.
* **Power of CI/CD:** Integrating GitHub with automated deployment platforms like Netlify streamlines product delivery—saving time and eliminating manual file transfer steps.
* **Documentation Value:** Maintaining clear project documentation is as essential as writing clean code when demonstrating technical workflows to reviewers and teams.
