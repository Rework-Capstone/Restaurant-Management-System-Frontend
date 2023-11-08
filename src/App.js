import "./App.css";
import DataProvoder from "./components/Context/context";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <DataProvoder>
    <BrowserRouter>
      <Routes>
        <Route path="/auth/signup" element={<SignUp/>} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
    </DataProvoder>

  );
}

export default App;
