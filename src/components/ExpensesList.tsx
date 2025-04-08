import { useEffect } from "react";

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
      (expenses.)
    </div>
  );
};

export default ExpensesList;
