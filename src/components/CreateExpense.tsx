
const CreateExpense = () => {
  return (
    <form className="flex items-center flex-row bg-white p-4 gap-10 rounded-xl shadow-md">
      <div className="basis-auto">
        <p className="text-sm font-medium">날짜</p>
        <input className="w-30 h-7 text-sm placeholder:text-[12px] border-1 border-slate-300 rounded-md" type="text" placeholder="YYYY-MM-DD"/>
      </div>

      <div className="basis-auto">
        <p className="text-sm font-medium">항목</p>
        <input className="w-30 h-7 text-sm placeholder:text-[12px] border-1 border-slate-300 rounded-md" type="text" placeholder="지출 항목" />
      </div>

      <div className="basis-auto">
        <p className="text-sm font-medium">금액</p>
        <input className="w-30 h-7 text-sm placeholder:text-[12px] border-1 border-slate-300 rounded-md" type="number" placeholder="지출 금액"/>
      </div>

      <div className="basis-auto">
        <p className="text-sm font-medium">내용</p>
        <input className="w-30 h-7 text-sm placeholder:text-[12px] border-1 border-slate-300 rounded-md" type="text " placeholder="지출 내용" />
      </div>

      <button className="hover:cursor-pointer font-medium bg-indigo-200 border-1 border-indigo-300 hover:bg-indigo-400 hover:border-2 border-indigo-500 w-20 h-9 rounded-lg">저장</button>
    </form>
  );
};

export default CreateExpense;
