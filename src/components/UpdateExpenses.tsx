import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router-dom";


const UpdateExpenses = ({id}:{id:string}) => {
  const [updateDate, setUpdateDate] = useState("");
  const [updateAmount, setUpdateAmount] = useState("");
  const [updateItem, setUpdateItem] = useState<string | null>("");
  const [updateDescription, setUpdateDescription] = useState<string | null>("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpense = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from("expenses")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("데이터 불러오기 실패:", error);
      } else {
        setUpdateDate(data.date);
        setUpdateAmount(String(data.amount));
        setUpdateItem(data.item);
        setUpdateDescription(data.description);
      }
    };
    fetchExpense();
  }, [id]);

  const handleDelete = async () => {
    const { error } = await supabase
    .from('expenses')
    .delete()
    .eq("id", id)
    
    if (error) {
      console.error("데이터 불러오기 실패:", error)
    } else {
        alert("삭제되었습니다.");
        navigate("/home")
    }
  };

  const handleUpdate = async () => {
    const numberAmount = Number(updateAmount) || 0;
    const { error } = await supabase
      .from("expenses")
      .update({
        date: updateDate,
        amount: numberAmount,
        item: updateItem,
        description: updateDescription,
      })
      .eq("id", id);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      setUpdateDate("");
      setUpdateAmount("");
      setUpdateItem("");
      setUpdateDescription("");
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}
      className="grid grid-cols-[auto_1fr_auto_1fr_auto] gap-3 items-center p-5"
    >
      <h1 className="text-right ">날짜</h1>
      <input
        value={updateDate}
        onChange={(e) => setUpdateDate(e.target.value)}
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="YYYY-MM-DD"
        type="text"
      />
      <h1 className="text-right">가격</h1>
      <input
        value={updateAmount ?? ""}
        onChange={(e) => setUpdateAmount(e.target.value)}
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="0"
        type="number"
      />
      <button type="submit" className="border bg-[#F1F1F1] w-[5rem] h-[1.7rem]">
        수정
      </button>

      <h1 className="text-right">항목</h1>
      <input
        value={updateItem ?? ""}
        onChange={(e) => setUpdateItem(e.target.value)}
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="지출 항목"
        type="text"
      />
      <h1 className="text-right">내용</h1>
      <input
        value={updateDescription ?? ""}
        onChange={(e) => setUpdateDescription(e.target.value)}
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="지출 내용"
        type="text"
      />
      <button
        type="button"
        onClick={(e) => handleDelete()}
        className="border bg-[#F1F1F1] w-[5rem] h-[1.7rem]"
      >
        삭제
      </button>
    </form>
  );
};

export default UpdateExpenses;
