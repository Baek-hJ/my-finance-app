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
      <ul className="text-xl list-disc list-outside ml-10 mt-5 grid gap-5">
        {filteredExpenses.map((expense) => (
          <li
            key={expense.id}
            onClick={() => navigate(`/expenses/${expense.id}`)}
            className="cursor-pointer hover:bg-[#A4C8C8] p-2 rounded-md"
          >
            <div className="grid grid-cols-[9rem_15rem_10rem] gap-10">
              <p>{expense.date}</p>
              <p className="text-mbold font-bold">
                {expense.item} - {expense.description}
              </p>
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
