import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { Expense } from "../../database.types";

const ExpensesList = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const { data, error } = await supabase.from("expenses").select("*");

      if (error) {
        console.error("Error fetching expenses:", error);
      } else {
        setExpenses(data);
      }
    };

    fetchExpenses();
  }, []);
  return (
    <div>
      <ul className="list-disc list-inside flex flex-col gap-3 p-5">
        {expenses.map((expense) => (
          <li className="flex-1" key={expense.id}>
            <p>{expense.date}</p>
            <p className="flex-1">
              {expense.item} - {expense.description}
            </p>
            <p className="flex-1">{expense.amount}원</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
