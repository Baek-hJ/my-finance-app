const CreateExpense = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-[1.5%]">
      <div className="flex flex-wrap justify-start gap-7">
        <h1>날짜</h1>
        <input
          className="border bg-white w-[15rem] h-[1.5rem] placeholder:p-4 placeholder:text-[15px] placeholder: "
          placeholder="YYYY-MM-DD"
          type="text"
        />
      </div>
      <div className="flex flex-wrap justify-start gap-7">
        {" "}
        <h1>항목</h1>
        <input
          className="border bg-white w-[15rem] h-[1.5rem] placeholder:p-4 placeholder:text-[15px] placeholder: "
          placeholder="지출 항목"
          type="text"
        />
      </div>
      <div className="flex flex-wrap justify-start gap-7">
        {" "}
        <h1>가격</h1>
        <input
          className="border bg-white w-[15rem] h-[1.5rem] placeholder:p-4 placeholder:text-[15px] placeholder: "
          placeholder="0"
          type="number"
        />
      </div>
      <div className="flex flex-wrap justify-start gap-7">
        {" "}
        <h1>내용</h1>
        <input
          className="border bg-white w-[15rem] h-[1.5rem] placeholder:p-4 placeholder:text-[15px] placeholder: "
          placeholder="지출 내용"
          type="text"
        />
      </div>
    </div>
  );
};

export default CreateExpense;
