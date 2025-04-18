import { Expense } from "../../database.types";
import getMonthFilter from "../utils/getMonthFilter";

const ExpensesList = ({
  expenses,
  selectedMonth,
}: {
  expenses: Expense[];
  selectedMonth: number;
}) => {
  const filteredExpenses = getMonthFilter(expenses, selectedMonth);
  return (
    <div>
      <ul className="list-disc list-outside pl-6">
        {filteredExpenses.map((expense) => (
          <li key={expense.id}>
            <div className="flex items-center gap-3 text-xl">
              <p className="mr-5 shrink-0">{expense.date}</p>
              <p className="mr-5 shrink-0 text-mbold font-bold">{expense.item} - {expense.description}</p>
              <p className="shrink-0 text-mbold font-bold text-[#179494]">{expense.amount}원</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
