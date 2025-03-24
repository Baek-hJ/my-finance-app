
const CreateExpense = () => {
  return (
    <form className="flex flex-row bg-white p-4 rounded-lg shadow-md">
      <div className="basis-auto">
        <p>날짜</p>
        <input className="" type="date" />
      </div>

      <div className="basis-auto">
        <p>항목</p>
        <input className="" type="text" />
      </div>

      <div className="basis-auto">
        <p>금액</p>
        <input className="" type="number" />
      </div>

      <div className="basis-auto">
        <p>내용</p>
        <input className="" type="text" />
      </div>

      <button className="basis-auto">저장</button>
    </form>
  );
};

export default CreateExpense;
