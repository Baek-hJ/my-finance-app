import { Expense } from "../../database.types";

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList = ({expenses}:ExpenseListProps) => {
  return (
    <div className="flex flex-row bg-white p-4 rounded-xl shadow-md">
      <ul>
        <li>

        </li>
      </ul>
    </div>
  );
};

export default ExpenseList;
