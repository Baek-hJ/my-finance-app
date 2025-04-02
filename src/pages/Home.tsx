import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import MonthNavigation from "../components/MonthNavigation";

const Home = () => {
  return <div className="min-w-screen min-h-screen md:w-screen md:h-screen bg-[#DBE9E9] flex flex-col items-center justify-center">
    <MonthNavigation/>
    <CreateExpense/>
    <ExpenseList/>
  </div>;
};

export default Home;
