import { useState, useEffect } from "react";

function AddExpenseForm({
  addExpense,
  editId,
  setEditId,
  expenses,
  showToast,
}) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  // ---------- FILL FORM WHEN EDITING ----------
  useEffect(() => {
    if (editId !== null) {
      const exp = expenses.find((e) => e.id === editId);
      if (exp) {
        setAmount(exp.amount);
        setCategory(exp.category);
        setDate(exp.date);
        setNote(exp.note);
      }
    }
  }, [editId]);

  // ---------- SUBMIT ----------
  function handleSubmit() {
    if (!amount || !category || !date) {
      showToast("Amount, Category and Date are required", "error");
      return;
    }

    addExpense({ amount: Number(amount), category, date, note });
    clearInputs();
  }

  // ---------- CANCEL EDIT ----------
  function handleCancel() {
    setEditId(null);
    clearInputs();
  }

  function clearInputs() {
    setAmount("");
    setCategory("");
    setDate("");
    setNote("");
  }

  return (
    <div className="add-expense-card">
      <h2>{editId !== null ? "Edit Expense" : "Add Expense"}</h2>

      <div className="input-row">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select</option>

          {/* Food & Home */}
          <option value="Food">Food / Eating Out</option>
          <option value="Groceries">Groceries</option>
          <option value="Household Supplies">Household Supplies</option>
          <option value="Electricity Bill">Electricity Bill</option>
          <option value="Water Bill">Water Bill</option>
          <option value="Gas / Cooking Gas">Gas / Cooking Gas</option>
          <option value="Rent">Rent</option>

          {/* Health */}
          <option value="Hospital">Hospital</option>
          <option value="Medicine">Medicine / Pharmacy</option>
          <option value="Gym / Fitness">Gym / Fitness</option>
          <option value="Salon / Haircut">Salon / Haircut</option>

          {/* Transport */}
          <option value="Petrol">Fuel</option>
          <option value="Auto / Cab">Auto / Cab</option>
          <option value="Travel">Travel</option>
          <option value="Vehicle Maintenance">Vehicle Maintenance</option>
          <option value="Parking / Toll">Parking / Toll</option>

          {/* Finance */}
          <option value="EMI / Loan">EMI / Loan Payment</option>
          <option value="Insurance">Insurance</option>
          <option value="Investment">Investment / Mutual Funds</option>
          <option value="Savings">Savings</option>

          {/* Digital & Work */}
          <option value="Recharge">Recharge</option>
          <option value="Subscriptions">Subscriptions</option>
          <option value="Online Shopping">Online Shopping</option>
          <option value="Work / Office">Work / Office Expenses</option>

          {/* Lifestyle */}
          <option value="Theatre / Cinema">Theatre / Cinema</option>
          <option value="Gifts / Donations">Gifts / Donations</option>
          <option value="Party / Events">Party / Events</option>

          {/* Education */}
          <option value="Education">Education</option>
          <option value="School Fees">School Fees</option>

          <option value="Others">Others</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div className="btn-row">
        <button
          className={`btn-primary ${editId !== null ? "editing" : ""}`}
          onClick={handleSubmit}
        >
          {editId !== null ? "Update Expense" : "+ Add Expense"}
        </button>

        {editId !== null && (
          <button className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

export default AddExpenseForm;
