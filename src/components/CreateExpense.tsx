
const CreateExpense = () => {
  return (
    <form className="flex flex-row bg-white p-4 rounded-lg shadow-md">
      <div className="basis-auto">
        <p>날짜</p>
        <input className="" type="text" placeholder="YYYY-MM-DD"/>
      </div>

      <div className="basis-auto">
        <p>항목</p>
        <input className="" type="text" placeholder="지출 항목" />
      </div>

      <div className="basis-auto">
        <p>금액</p>
        <input className="" type="number" placeholder="지출 금액"/>
      </div>

      <div className="basis-auto">
        <p>내용</p>
        <input className="" type="text" placeholder="지출 내용" />
      </div>

      <button className="basis-auto">저장</button>
    </form>
  );
};

export default CreateExpense;
