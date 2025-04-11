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
      <ul className="list-disc list-outside pl-6">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <div className="grid grid-cols-[7rem_6rem_5rem] gap-x-4">
              <p>{expense.date}</p>
              <p>
                {expense.item} - {expense.description}
              </p>
              <p>{expense.amount}원</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
