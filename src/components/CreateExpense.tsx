
const CreateExpense = () => {
  return (
    <form className="flex flex-row bg-white p-4 gap-10 rounded-xl shadow-md">
      <div className="basis-auto">
        <p>날짜</p>
        <input className="w-20 placeholder:text-[12px]" type="text" placeholder="YYYY-MM-DD"/>
      </div>

      <div className="basis-auto">
        <p>항목</p>
        <input className="w-20 placeholder:text-[12px]" type="text" placeholder="지출 항목" />
      </div>

      <div className="basis-auto">
        <p>금액</p>
        <input className="w-20 placeholder:text-[12px]" type="number" placeholder="지출 금액"/>
      </div>

      <div className="basis-auto">
        <p>내용</p>
        <input className="w-20 placeholder:text-[12px]" type="text" placeholder="지출 내용" />
      </div>

      <button className="basis-auto">저장</button>
    </form>
  );
};

export default CreateExpense;
