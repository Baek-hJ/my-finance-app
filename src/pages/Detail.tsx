import { useParams } from "react-router-dom";
import { Expense } from "../../database.types";
import { useExpenses } from "../context/ExpensesContext";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const { expenses } = useExpenses();

  const expense = expenses.find((e) => e.id === id);

  if (!expense) {
    return <div>지출 정보를 찾을 수 없습니다.</div>;
  }
  return <div>
    <h1>
      지출 상세 페이지
    </h1>
    <p>낳짜: {expense.date} </p>
    <p>항목: {expense.item} </p>
    <p>내용: {expense.description} </p>
    <p>가격: {expense.amount} </p>
  </div>;
};

export default Detail;
