# SpendWise Dashboard Shell

Welcome to the SpendWise Dashboard Shell, the foundational front-end layer for the SpendWise capstone project. This project builds a clean, modern, and fully responsive financial dashboard interface using standard CSS Grid and Flexbox layouts.

What Was Built

The dashboard shell consists of three primary structural components:

Sidebar Navigation: A dedicated structural column containing brand identity and navigation links, built with Flexbox.

Top Header: A horizontal header area featuring the current page title and user profile section, aligned using Flexbox.

Category Cards Section: Six distinct financial category cards (Food & Transport, Rent, Entertainment, Savings, and Utilities) displaying realistic static financial summaries using CSS Grid and responsive column wrapping.

Technical Implementation & Features

Layout Structure:

CSS Grid is used for the overall application layout (dividing the screen between the sidebar and main content area) and for structuring the category cards grid.

Flexbox handles alignment and spacing inside the header, sidebar navigation items, and individual metric cards.

Design System & Custom Properties:

All colors, surfaces, and shadows are driven by CSS Custom Properties (:root), ensuring consistent styling across the entire interface.

Responsive Design:

Includes media queries that automatically adapt the layout for smaller viewports (collapsing gracefully below 768px). Verified using browser DevTools.

Card Micro-interactions:

Subtle hover and keyboard focus animations (transform and box-shadow) execute in 200ms, improving tactile feedback and accessibility.

Stretch Goal (Dark Theme):

Fully implements a dark theme by overriding core :root custom properties inside a prefers-color-scheme: dark media query.

File Structure

index.html # Main HTML markup containing semantic dashboard elements
style.css # Stylesheet featuring CSS variables, grid, flexbox, and micro-interactions
README.md # Project documentation and feature breakdown

How to Run Locally

Clone or download this repository to your local machine.

Open index.html in any modern web browser (or use the Live Server extension in VS Code).

Test responsiveness by resizing your browser window below 768px or by toggling device emulation in browser developer tools
