import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function AppHeader() {
  // TODO: consume from context instead of props
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppHeader must be used within AppContext.Provider");
  }

  const { currency, theme, setCurrency, setTheme } = context;

  return (
    <div className="app-header">
      <div className="app-header-row">
        <span className="app-header-label">Currency</span>
        <button
          className="app-header-btn"
          onClick={() => setCurrency(currency === "USD" ? "VND" : "USD")}
        >
          {currency === "USD" ? "$ USD" : "₫ VND"}
        </button>
      </div>
      <div className="app-header-row">
        <span className="app-header-label">Theme</span>
        <button
          className="app-header-btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "\u2600 Light" : "\uD83C\uDF19 Dark"}
        </button>
      </div>
    </div>
  );
}

export default AppHeader;
