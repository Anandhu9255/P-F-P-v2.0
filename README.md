# P-F-P v2.0 (Personal Finance Planner)

A streamlined, client-side Personal Finance Planner designed for speed and privacy. This application allows users to manage their budgets directly in the browser, using LocalStorage for persistent data tracking without the need for an external database.

## 🚀 Overview

**P-F-P v2.0** is a lightweight tool for tracking daily income and expenses. By leveraging browser storage, it provides a fast, "zero-setup" experience for users who want to manage their finances privately on their own device.

### **The Benefit of v2.0**
- **Instant Speed:** No waiting for API calls or database queries.
- **Privacy First:** Your financial data stays on your machine; it is never sent to a server.
- **Offline Ready:** Since there is no backend, the app is fully functional without an internet connection.

---

## ✨ Key Features

- **Real-time Balance Tracking:** Automatically calculates your current balance as you add transactions.
- **LocalStorage Persistence:** Your data is saved automatically in your browser and remains there even after a page refresh.
- **Visual Analytics:** Interactive charts provide a breakdown of spending habits and income sources.
- **Transaction Management:** Add, view, and delete entries with a clean, logical interface.
- **Responsive UI:** Fully optimized for mobile and desktop browsers.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React.js
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Data Persistence:** Web Storage API (LocalStorage)
- **Styling:** CSS3 / Tailwind CSS
- **Data Visualization:** Chart.js / Recharts

---

## ⚙️ How It Works



1.  **State Initialization:** When the app loads, it checks `localStorage` for any existing transaction data.
2.  **User Input:** The user enters an amount, category, and type (Income/Expense). 
3.  **Logic Layer:** The app validates the input and updates the local state.
4.  **Persistence:** Every time the state changes, a `useEffect` hook syncs the updated list back to `localStorage` as a JSON string.
5.  **UI Update:** The dashboard and charts re-render instantly to reflect the new financial totals.

---

## 🚀 Getting Started

To run this project locally, you don't need to set up a database or server.

### **1. Clone the repository**
```bash
git clone [https://github.com/Anandhu9255/P-F-P-v2.0.git](https://github.com/Anandhu9255/P-F-P-v2.0.git)
cd P-F-P-v2.0
