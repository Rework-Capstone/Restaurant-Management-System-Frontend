import "./App.css";
import DataProvoder from "./components/Context/context";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./utils/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvoder>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
    </DataProvoder>

  );
}

export default App;
