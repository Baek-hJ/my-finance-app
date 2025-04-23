import { useEffect, useState } from "react";
import CreateExpenses from "../components/CreateExpenses";
import ExpensesList from "../components/ExpensesList";
import { supabase } from "../utils/supabase";
import { MonthNavigation } from "../components/MonthNavigation";
import { useExpenses } from "../context/ExpensesContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {expenses, setExpenses} = useExpenses();
  const [selectedMonth, setSelectedMonth] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpenses = async () => {
      const { data, error } = await supabase.from("expenses").select("*");

      if (error) {
        console.error("Error fetching expenses:", error);
      } else {
        setExpenses(data);
      }
    };

    fetchExpenses();
  }, [setExpenses]);

  return (
    <div className="min-w-screen min-h-screen md:w-screen md:h-screen bg-[#DBE9E9] flex flex-col items-center justify-center">
      <div className=" p-[1rem] border-2 bg-[#CFDCDC] size-40 w-[80%] md:w-[70%] md:h-[85%]">
        <div className="mb-[4px] mt-[-5px] flex items-center justify-between w-full">
          <h1 className="font-semibold">my-finace-app / {selectedMonth}</h1>
          <svg
            className="w-5 h-5 cursor-pointer"
            viewBox="0 0 49 45"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => navigate("/")}
            
          >
            <rect
              x="1"
              y="1"
              width="47"
              height="43"
              fill="#F1F1F1"
              stroke="black"
              strokeWidth="2"
            />
            <line
              y1="-1.5"
              x2="44.3521"
              y2="-1.5"
              transform="matrix(-0.73653 0.676405 -0.73653 -0.676405 40.353 7.05884)"
              stroke="black"
              strokeWidth="3"
            />
            <line
              y1="-1.5"
              x2="44.3521"
              y2="-1.5"
              transform="matrix(-0.73653 -0.676405 0.73653 -0.676405 41.3137 37.0588)"
              stroke="black"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div className="bg-[#F1F1F1] border md:h-[2.3rem] md:w-full">
          <MonthNavigation
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
        </div>

        <div className="p-[1rem] border md:h-[70%] md:w-full bg-white overflow-y-scroll border ">
          <ExpensesList expenses={expenses} selectedMonth={selectedMonth} />
        </div>

        <CreateExpenses />
      </div>
    </div>
  );
};

export default Home;
