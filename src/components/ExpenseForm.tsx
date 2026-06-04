import { useState } from "react";
import { CATEGORIES } from "../constants";
import type { Expense } from "../types/expense";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: create a new expense and add it to the list
    const newExpense: Expense = {
      id: crypto.randomUUID(),
      description: name,
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleDateString(),
    };
    onAddExpense(newExpense);
    setName("");
    setAmount("");
    setCategory("");
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add Expense</h2>
      <label>
        Name
        <input
          name="description"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Lunch"
          required
        />
      </label>
      <label>
        Amount ($)
        <input
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="0.00"
          min={0}
          step="0.01"
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select category</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
