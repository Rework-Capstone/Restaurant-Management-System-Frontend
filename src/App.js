import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MenuPage from "./pages/MenuPage";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import BookATable from "./pages/BookATable";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/booktable" element={<BookATable />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
