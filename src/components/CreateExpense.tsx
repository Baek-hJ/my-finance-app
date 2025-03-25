import { useState } from "react";
import { supabase } from "../utils/supabase";

interface CreateExpenseProps {
  onExpenseAdded: () => void;
}

const CreateExpense = ({ onExpenseAdded }: CreateExpenseProps) => {
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>("");

  const handleSubmit = async () => {
    const { error } = await supabase
      .from("expenses")
      .insert([
        {
          id: crypto.randomUUID(),
          date,
          item,
          amount,
          description,
        },
      ])
      .select();

    if (error) {
      console.error("Error adding expense:", error.message);
    } else {
      // 폼 초기화 및 새로고침침
      onExpenseAdded();
      setDate("");
      setItem("");
      setAmount(0);
      setDescription("");
    }
  };

  return (
    <form className="flex flex-wrap items-center flex-row bg-white p-4 gap-10 rounded-xl shadow-md">
      <div className="basis-auto">
        <p className="text-sm font-medium">날짜</p>
        <input
          className="w-30 h-7 text-sm placeholder:text-[12px] border-1 border-slate-300 rounded-md"
          type="text"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          placeholder="YYYY-MM-DD"
        />
      </div>

      <div className="basis-auto">
        <p className="text-sm font-medium">항목</p>
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="w-30 h-7 text-sm placeholder:text-[12px] border-1 border-slate-300 rounded-md"
          type="text"
          placeholder="지출 항목"
        />
      </div>

      <div className="basis-auto">
        <p className="text-sm font-medium">금액</p>
        <input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-30 h-7 text-sm placeholder:text-[12px] border-1 border-slate-300 rounded-md"
          type="number"
          placeholder="지출 금액"
        />
      </div>

      <div className="basis-auto">
        <p className="text-sm font-medium">내용</p>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-30 h-7 text-sm placeholder:text-[12px] border-1 border-slate-300 rounded-md"
          type="text "
          placeholder="지출 내용"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="hover:cursor-pointer font-medium bg-indigo-200 border-1 border-indigo-300 hover:bg-indigo-400 hover:border-2 border-indigo-500 w-20 h-9 rounded-lg"
      >
        저장
      </button>
    </form>
  );
};

export default CreateExpense;
