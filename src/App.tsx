import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";
import { useExpense } from "./hooks/useExpense";

function App() {
  // TODO: add handleAddExpense and handleDeleteExpense
  const { expenses, handleAddExpense, handleDeleteExpense } = useExpense();

  return (
    <div className="app-layout">
      <aside>
        <h1>Expense Manager</h1>
        <ExpenseForm onAddExpense={handleAddExpense} />
      </aside>
      <main>
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={handleDeleteExpense}
        />
      </main>
    </div>
  );
}

export default App;
