const ExpenseList = () => {
  return (
    <div className="flex flex-row bg-white p-4 rounded-xl shadow-md">
      <ul>
        <li>
          <button>수정</button>
          <button>삭제</button>
        </li>
      </ul>
    </div>
  );
};

export default ExpenseList;
