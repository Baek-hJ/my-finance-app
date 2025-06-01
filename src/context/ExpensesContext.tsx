import { createContext, useContext } from "react";
import { Expense } from "../../database.types";
import { Dispatch, SetStateAction } from "react";

type ExpensesContextType = {
  expenses: Expense[];
  setExpenses: Dispatch<SetStateAction<Expense[]>>;
};

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  setExpenses: () => {},
});

export const useExpenses = () => useContext(ExpensesContext);
