import { useState, useEffect } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseChart from "./components/ExpenseChart";
import ExpenseTable from "./components/ExpenseTable";
import Header from "./components/Header";
import SpendingBreakdown from "./components/SpendingBreakdown";
import TopStats from "./components/TopStats";
import WarningBanner from "./components/WarningBanner";
import Toast from "./components/Toast";
import { useToast } from "./hooks/useToast";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [budgets, setBudgets] = useState(() => {
    const saved = localStorage.getItem("budgets");
    return saved ? JSON.parse(saved) : {};
  });

  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  });

  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const { toasts, showToast } = useToast();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(budgets));
  }, [budgets]);

  const monthExpenses = expenses.filter((e) => e.month === selectedMonth);

  function addExpense(newExpense) {
    if (editId !== null) {
      setExpenses(expenses.map((e) => e.id === editId ? { ...newExpense, id: editId, month: selectedMonth } : e));
      setEditId(null);
      showToast("Expense updated successfully", "success");
    } else {
      setExpenses([...expenses, { ...newExpense, id: Date.now(), month: selectedMonth }]);
      showToast("Expense added!", "success");
    }
  }

  function deleteExpense(id) {
    if (!confirm("Delete this expense?")) return;
    setExpenses(expenses.filter((e) => e.id !== id));
    showToast("Expense deleted", "error");
  }

  function editExpense(id) {
    setEditId(id);
    showToast("Editing expense...", "warning");
  }

  function clearAll() {
    if (!confirm("Delete all expenses?")) return;
    setExpenses([]);
    showToast("All expenses cleared", "error");
  }

  function setBudget(value) {
    setBudgets({ ...budgets, [selectedMonth]: value });
  }

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div>
      <Header
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="main-layout">
        <TopStats
          monthExpenses={monthExpenses}
          budget={budgets[selectedMonth] || 0}
          setBudget={setBudget}
        />
        <div className="two-col-row">
          <SpendingBreakdown monthExpenses={monthExpenses} />
          <ExpenseChart monthExpenses={monthExpenses} />
        </div>
        <WarningBanner
          monthExpenses={monthExpenses}
          budget={budgets[selectedMonth] || 0}
        />
        <AddExpenseForm
          addExpense={addExpense}
          editId={editId}
          setEditId={setEditId}
          expenses={expenses}
          showToast={showToast}
        />
        <ExpenseTable
          monthExpenses={monthExpenses}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
          clearAll={clearAll}
        />
      </div>
      <Toast toasts={toasts} />
    </div>
  );
}

export default App;