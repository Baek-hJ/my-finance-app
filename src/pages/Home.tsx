import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import MonthNavigation from "../components/MonthNavigation";

const Home = () => {
  return <div>
    <MonthNavigation/>
    <CreateExpense/>
    <ExpenseList/>
  </div>;
};

export default Home;
