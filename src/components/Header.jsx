function Header({ selectedMonth, setSelectedMonth, theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-dot" />
        <h1>Personal <span>Finance Planner</span></h1>
      </div>
      <div className="header-right">
        <div className="month-selector">
          <label htmlFor="mymonth">Month</label>
          <input
            type="month"
            id="mymonth"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}

export default Header;