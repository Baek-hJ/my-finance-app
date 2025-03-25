
const CreateExpense = () => {
  return (
    <form className="bg-cyan-500">
      <div>
        <p>날짜</p>
        <input className="" type="date" />
      </div>

      <div>
        <p>항목</p>
        <input className="" type="text" />
      </div>

      <div>
        <p>금액</p>
        <input className="" type="number" />
      </div>

      <div>
        <p>내용</p>
        <input className="" type="text" />
      </div>

      <button>저장</button>
    </form>
  );
};

export default CreateExpense;
