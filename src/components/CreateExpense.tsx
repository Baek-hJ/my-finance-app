import { Database } from "../../database.types";

const CreateExpense = () => {
  const mutation = useMutation({
    mutationFn: addData,
    onSuccess: () => {
      alert("저장되었습니다.");
    },
    onError: () => {
      alert("저장에 실패했습니다.");
    },
  });

  const onSubmit: SubmitHandler<Database> = (data) => {
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-[auto_1fr_auto_1fr_auto] gap-3 items-center p-5"
    >
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

export default CreateExpense;
