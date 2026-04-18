function WarningBanner({ monthExpenses, budget }) {

  // ---------- DONT SHOW IF NO BUDGET OR NO EXPENSES ----------
  if (!budget || monthExpenses.length === 0) return null;

  // ---------- GROUP BY CATEGORY ----------
  const totals = monthExpenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});

  const totalSpent = monthExpenses.reduce((sum, e) => sum + e.amount, 0);

  // ---------- FIND HIGHEST CATEGORY ----------
  let highestCategory = "";
  let highestPercent = 0;

  for (const [cat, amt] of Object.entries(totals)) {
    const percent = (amt / totalSpent) * 100;
    if (percent > highestPercent) {
      highestPercent = percent;
      highestCategory = cat;
    }
  }

  return (
    <div className="warning-banner">
      ⚠ Highest spending category: {highestCategory} ({highestPercent.toFixed(0)}%)
    </div>
  );
}

export default WarningBanner;