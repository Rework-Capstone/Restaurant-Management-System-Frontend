import "./App.css";
import DataProvoder from "./components/Context/context";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MenuPage from "./pages/MenuPage";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import BookATable from "./pages/BookATable";
import ContactUsPage from "./pages/ContactUsPage";
import TableSetting from "./pages/Table";

function App() {
  return (
    <DataProvoder>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/menu" element={<MenuPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/blogd/:id" element={<BlogDetails/>} />
        <Route path="/book" element={<BookATable/>} />
        <Route path="/contact" element={<ContactUsPage/>} />
        <Route path='/table' element={<TableSetting/>}/>
      </Routes>
    </BrowserRouter>
    </DataProvoder>
  );
}

export default App;
