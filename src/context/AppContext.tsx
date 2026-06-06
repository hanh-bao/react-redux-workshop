import { createContext } from "react";

type Currency = "USD" | "VND";
type Theme = "light" | "dark";

export interface AppContextType {
  currency: Currency;
  setCurrency: React.Dispatch<React.SetStateAction<Currency>>;

  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;

  total: number;

  currencySymbol: string;
}

export const AppContext = createContext<AppContextType | null>(null);
