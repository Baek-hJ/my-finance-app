import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";
import { ExpensesContext } from "./context/ExpensesContext";
import { Expense } from "../database.types";
import { AudioProvider } from "./context/AudioContext";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <AudioProvider>
      <ExpensesContext.Provider value={{ expenses, setExpenses }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={<Home />} />
            <Route path="/expenses/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </ExpensesContext.Provider>
    </AudioProvider>
  );
}

export default App;
