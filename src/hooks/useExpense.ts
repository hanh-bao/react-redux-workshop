import { useCallback, useState } from "react";
import type { Expense } from "../types/expense";

export function useExpense() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = useCallback((newExpense: Expense) => {
    setExpenses((prev) => [newExpense, ...prev]);
  }, []);

  const handleDeleteExpense = useCallback((id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  }, []);

  return {
    expenses,
    handleAddExpense,
    handleDeleteExpense,
  };
}
