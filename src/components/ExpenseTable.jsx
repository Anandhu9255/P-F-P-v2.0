function ExpenseTable({ monthExpenses, deleteExpense, editExpense, clearAll }) {
  return (
    <div className="expense-table-card">
      <div className="expense-table-header">
        <h2>Recent Expenses</h2>
        <button className="btn-clear" onClick={clearAll}>Clear All</button>
      </div>

      {/* ---------- HEADINGS ---------- */}
      <div className="expense-headings">
        <span>Date</span>
        <span>Category</span>
        <span>Note</span>
        <span>Amount</span>
        <span>Actions</span>
      </div>

      {/* ---------- ROWS ---------- */}
      {monthExpenses.length === 0 ? (
        <p className="expense-empty">No expenses added yet.</p>
      ) : (
        monthExpenses
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((expense) => (
            <div className="expense-row" key={expense.id}>
              <span>{expense.date}</span>
              <span className="expense-category">{expense.category}</span>
              <span>{expense.note || "-"}</span>
              <span className="expense-amount">₹{expense.amount.toFixed(2)}</span>
              <div className="action-buttons">
                <button onClick={() => editExpense(expense.id)}>✏️</button>
                <button onClick={() => deleteExpense(expense.id)}>🗑️</button>
              </div>
            </div>
          ))
      )}
    </div>
  );
}

export default ExpenseTable;