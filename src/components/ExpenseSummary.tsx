import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ExpenseSummary() {
  // TODO: consume total and currencySymbol from context instead of props
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("ExpenseSummary must be used within AppContext.Provider");
  }

  const { currencySymbol, total } = context;

  return (
    <div className="expense-summary">
      <span className="expense-summary-label">Total</span>
      <span className="expense-summary-amount">
        {currencySymbol}
        {total.toFixed(2)}
      </span>
    </div>
  );
}

export default ExpenseSummary;
