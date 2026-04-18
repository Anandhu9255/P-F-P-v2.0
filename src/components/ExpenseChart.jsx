import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// ---------- COLORS FOR EACH SLICE ----------
const COLORS = [
  "#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6",
  "#1abc9c", "#e67e22", "#34495e", "#e91e63", "#00bcd4",
  "#ff5722", "#8bc34a", "#607d8b", "#ff9800", "#673ab7"
];

function ExpenseChart({ monthExpenses }) {

  // ---------- GROUP BY CATEGORY ----------
  const breakdown = monthExpenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});

  const data = Object.entries(breakdown).map(([name, value]) => ({
    name,
    value,
  }));

  if (data.length === 0) return null;

  return (
    <div className="chart-card">
      <h3>Expense Chart</h3>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;