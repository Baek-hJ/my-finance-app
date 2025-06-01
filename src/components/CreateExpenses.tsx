import { useState } from "react";
import { supabase } from "../utils/supabase";

const CreateExpenses = () => {
  const [addDate, setAddDate] = useState("");
  const [addAmount, setAddAmount] = useState("");
  const [addItem, setAddItem] = useState<string | null>("");
  const [addDescription, setAddDescription] = useState<string | null>("");

  const handleCancel = async () => {
    setAddDate("");
    setAddAmount("");
    setAddItem("");
    setAddDescription("");
  };

  const handleChange = async () => {
    const numberAmount = Number(addAmount) || 0;

    if (! addDate || numberAmount <= 0 || !addItem ) {
      alert("날짜, 가격, 항목은 필수 입력 사항입니다.");
    }

    // 데이터를 수파베이스에 추가
    const { error } = await supabase.from("expenses").insert([
      {
        id: crypto.randomUUID(),
        date: addDate,
        amount: numberAmount,
        item: addItem,
        description: addDescription,
      },
    ])
    .select();

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      // 비동기 작업 후 상태 초기화
      setAddDate("");
      setAddAmount("");
      setAddItem("");
      setAddDescription("");
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleChange();
      }}
      className="grid grid-cols-[auto_1fr_auto_1fr_auto] gap-3 items-center p-5"
    >
      <h1 className="text-right ">날짜</h1>
      <input
        value={addDate}
        onChange={(e) => setAddDate(e.target.value)}
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="YYYY-MM-DD"
        type="text"
      />
      <h1 className="text-right">가격</h1>
      <input
        value={addAmount ?? ""}
        onChange={(e) => setAddAmount(e.target.value)}
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="0"
        type="number"
      />
      <button type="submit" className="border bg-[#F1F1F1] w-[5rem] h-[1.7rem]">
        저장
      </button>

      <h1 className="text-right">항목</h1>
      <input
        value={addItem ?? ""}
        onChange={(e) => setAddItem(e.target.value)}
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="지출 항목"
        type="text"
      />
      <h1 className="text-right">내용</h1>
      <input
        value={addDescription ?? ""}
        onChange={(e) => setAddDescription(e.target.value)}
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="지출 내용"
        type="text"
      />
      <button
        type="button"
        onClick={handleCancel}
        className="border bg-[#F1F1F1] w-[5rem] h-[1.7rem]"
      >
        취소
      </button>
    </form>
  );
};

export default CreateExpenses;