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
      <h2>ExpensesList</h2>
      {expenses.map((expense) => (
        <div key={expense.id}>
          <h3>{expense.item}</h3>
          <p>Amount: {expense.amount}</p>
          <p>Date: {expense.date}</p>
          <p>Description: {expense.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpensesList;
