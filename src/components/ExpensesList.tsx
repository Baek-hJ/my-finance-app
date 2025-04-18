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
            <div className="grid grid-cols-[7rem_1fr_5rem] gap-x-4 items-center">
              <p>{expense.date}</p>
              <div className="overflow-hidden">
                <p className="text-mbold font-bold truncate">
                  {expense.item} - {expense.description}
                </p>
              </div>
              <p className="text-mbold font-bold text-[#179494]">
                {expense.amount}원
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
