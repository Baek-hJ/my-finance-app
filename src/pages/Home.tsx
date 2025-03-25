import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import MonthNavigation from "../components/MonthNavigation";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { Expense } from "../../database.types";

const Home = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<number>(3);

  useEffect(() => {
    const fetchExpenses = async () => {
      //현재 연도
      const year = new Date().getFullYear();
      // 선택한 달의 1일부터
      const startDate = `${year}${String(selectedMonth).padStart(2,"0")}-01`;

      // 다음 달의 1일까지
      const endMonth = selectedMonth === 12 ? 1 : selectedMonth + 1;
      const endYear = selectedMonth === 12 ? year + 1 : year;
      const endDate = `${endYear}${String(endMonth).padStart(2,"0")}-01`;

      // supabase에서 데이터 가져오기
      const { data, error } = await supabase
      .from("expenses")
      .select("*")
      .gte("data", startDate)
      .lte("column", endDate)
      .order("date", {ascending: false}); // 날짜 내림차순순

      if (error) {
        console.error("Error fetching expenses:", error.message);
        return;
      }

      // 데이터가 있으면 화면에 렌더링을 해주기 위해 저장
      if (data) {
        setExpenses(data);
      }
    };

    fetchExpenses();
  }, [selectedMonth]);

  return (
    <div className="min-w-screen min-h-screen md:w-screen md:h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#3c1053] bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-move flex flex-col items-center justify-center space-y-4">
      <h1 className="font-sans md:font-sans text-[4rem] text-start font-semibold text-white/60 ">
        Todo List
      </h1>
      <div className="grid gap-4 m-10 justify-center md:object-top">
        <MonthNavigation />
        <CreateExpense />
        <ExpenseList />
      </div>
    </div>
  );
};

export default Home;
