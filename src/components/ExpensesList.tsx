import { useNavigate } from "react-router-dom";
import { Expense } from "../../database.types";
import getMonthFilter from "../utils/getMonthFilter";

const ExpensesList = ({
  expenses,
  selectedMonth,
}: {
  expenses: Expense[];
  selectedMonth: number;
}) => {
  const navigate = useNavigate();
  const filteredExpenses = getMonthFilter(expenses, selectedMonth);
  return (
    <div>
    </div>
  );
};


export default ExpensesList;
