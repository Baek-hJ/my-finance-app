import { createContext, useContext } from "react";
import { Expense } from "../../database.types";

export const ExpensesContext = createContext<Expense[]>([]);

export const useExpenses = () => useContext(ExpensesContext);
