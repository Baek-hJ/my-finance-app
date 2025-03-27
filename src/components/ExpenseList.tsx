import { Expense } from "../../database.types";

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: ExpenseListProps) => {
  return (
    <div className="flex flex-row bg-white p-4 rounded-xl shadow-md">
      <ul className="divide-y divide-gray-200">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <div className="flex justify-between items-center">
              <span className="font-medium">
                {expense.item} - {expense.description}
              </span>
              <span className="text-sm text-gray-500">{expense.date}</span>
              <span className="font-semibold text-indigo-700">
                {expense.amount}원
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
