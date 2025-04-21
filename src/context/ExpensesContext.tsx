import { createContext, useContext } from "react";
import { Expense } from "../../database.types";

type ExpensesContextType = {
  expenses: Expense[];
  setExpenses: (e: Expense[]) => void;
};

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  setExpenses: () => {},
});

export const useExpenses = () => useContext(ExpensesContext);
