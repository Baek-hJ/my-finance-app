import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import MonthNavigation from "../components/MonthNavigation";


const Home = () => {
  return (
    <div className="min-w-screen min-h-screen  md:w-screen md:h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#3c1053] bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-move flex flex-col items-center justify-center space-y-4">
    <h1 className="font-sans md:font-sans text-[4rem] text-start font-semibold text-white/60 ">Todo List</h1>
    <div className="grid gap-4 justify-center md:object-top">
      <MonthNavigation />
      <CreateExpense />
      <ExpenseList />
    </div>
    </div>
  );
};

export default Home;
