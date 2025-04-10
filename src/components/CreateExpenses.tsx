import { useState } from "react";

const CreateExpenses = () => {
  const [addDate, setAddDate] = useState("");
  const [addAmount, setAddAmount] = useState<number | null>(0);
  const [addItem, setAddItem] = useState<string | null>("");
  const [addDescription, setAddDescription] = useState<string | null>("");

  return (
    <form className="grid grid-cols-[auto_1fr_auto_1fr_auto] gap-3 items-center p-5">
      <h1 className="text-right ">날짜</h1>
      <input
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="YYYY-MM-DD"
        type="text"
      />
      <h1 className="text-right">가격</h1>
      <input
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="0"
        type="number"
      />
      <button type="submit" className="border bg-[#F1F1F1] w-[5rem] h-[1.7rem]">
        저장
      </button>

      <h1 className="text-right">항목</h1>
      <input
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="지출 항목"
        type="text"
      />
      <h1 className="text-right">내용</h1>
      <input
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="지출 내용"
        type="text"
      />
      <button className="border bg-[#F1F1F1] w-[5rem] h-[1.7rem]">취소</button>
    </form>
  );
};

export default CreateExpenses;
