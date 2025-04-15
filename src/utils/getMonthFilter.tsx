import { Expense } from "../../database.types";

function getMonth(dateString: string): number {
  const date = new Date(dateString);
  return date.getMonth() + 1;
}
const getMonthFilter = (expenses: Expense[], selectedMonth: number) => {
  return expenses.filter((expense) => {
    const month = getMonth(expense.date);
    return month === selectedMonth;
  });
};

export default getMonthFilter;
