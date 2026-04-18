function SpendingBreakdown({ monthExpenses }) {

  // ---------- GROUP BY CATEGORY ----------
  const breakdown = monthExpenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});

  const totalSpent = monthExpenses.reduce((sum, e) => sum + e.amount, 0);

  const categories = Object.entries(breakdown);

  return (
    <div className="breakdown-card">
      <h3>Spending Breakdown</h3>

      {categories.length === 0 ? (
        <p className="breakdown-empty">No expenses yet.</p>
      ) : (
        categories.map(([cat, amt], index) => {
          const percent =
            index === categories.length - 1
              ? 100 - categories.slice(0, -1).reduce((sum, [, a]) => sum + Math.floor((a / totalSpent) * 100), 0)
              : Math.floor((amt / totalSpent) * 100);

          return (
            <div className="breakdown-item" key={cat}>
              <span className="breakdown-cat">{cat}</span>
              <div className="breakdown-bar-wrap">
                <div className="breakdown-bar" style={{ width: `${percent}%` }} />
              </div>
              <div className="breakdown-right">
                <span className="breakdown-percent">{percent}%</span>
                <span className="breakdown-amt">₹{amt.toFixed(2)}</span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default SpendingBreakdown;