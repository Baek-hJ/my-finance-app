import { useParams } from "react-router-dom";
import { useExpenses } from "../context/ExpensesContext";
import CreateExpenses from "../components/CreateExpenses";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const { expenses } = useExpenses();

  const expense = expenses.find((e) => e.id === id);

  if (!expense) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <img src="/err.jpg" alt="에러 아이콘" className="w-60 mb-4" />
        <h1 className="text-3xl font-semibold">지출 정보를 찾을 수 없습니다.</h1>
        <button
          className="mt-4 px-4 py-2 bg-[#A4C8C8] font-bold rounded-md"
          onClick={() => window.history.back()}>
            돌아가기
        </button> 
      </div>
    );
  }
  
  
  return (
<div className="min-w-screen min-h-screen md:w-screen md:h-screen bg-[#DBE9E9] flex flex-col items-center justify-center">
      <div className=" p-[1rem] border-2 bg-[#CFDCDC] size-40 w-[80%] md:w-[70%] md:h-[85%]">
        <div className="mb-[4px] mt-[-5px] flex items-center justify-between w-full">
          <h1 className="font-semibold">my-finace-app/{expense.item} - {expense.description} </h1>
          <svg
            className="w-5 h-5"
            width="20"
            height="45"
            viewBox="0 0 49 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="47"
              height="43"
              fill="#F1F1F1"
              stroke="black"
              strokeWidth="2"
            />
            <line
              y1="-1.5"
              x2="44.3521"
              y2="-1.5"
              transform="matrix(-0.73653 0.676405 -0.73653 -0.676405 40.353 7.05884)"
              stroke="black"
              strokeWidth="3"
            />
            <line
              y1="-1.5"
              x2="44.3521"
              y2="-1.5"
              transform="matrix(-0.73653 -0.676405 0.73653 -0.676405 41.3137 37.0588)"
              stroke="black"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div className=" p-[1rem] border md:h-[70%] md:w-full bg-white overflow-y-scroll border ">
          <div className="text-2xl ml-10 mt-10 grid gap-10">
            <p>날짜: {expense.date} </p>
            <p>항목: {expense.item} </p>
            <p>내용: {expense.description} </p>
            <p>가격: {expense.amount}원 </p>
          </div>
        </div>
        <CreateExpenses />
      </div>
    </div>
  )
};

export default Detail;
