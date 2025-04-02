import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/expenses/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
