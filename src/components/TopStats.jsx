function TopStats({ monthExpenses, budget, setBudget }) {

  const totalSpent = monthExpenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = budget - totalSpent;

  return (
    <div className="top-stats-row">

      {/* ---------- BUDGET ---------- */}
      <div className="stat-card">
        <label>Budget Amount</label>
        <input
          type="number"
          placeholder="₹0.00"
          value={budget || ""}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
      </div>

      {/* ---------- TOTAL SPENT ---------- */}
      <div className="stat-card">
        <label>Total Spent</label>
        <p className="stat-amount spent">₹{totalSpent.toFixed(2)}</p>
      </div>

      {/* ---------- REMAINING ---------- */}
      <div className="stat-card">
        <label>Remaining Balance</label>
        <p className="stat-amount remaining">₹{remaining.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default TopStats;