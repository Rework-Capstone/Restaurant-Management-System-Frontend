import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DataProvoder from "./components/Context/context";
// import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MenuPage from "./pages/MenuPage";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import BookATable from "./pages/BookATable";
import ContactUsPage from "./pages/ContactUsPage";
import SingleFoodModal from "./pages/SingleFoodModal";
import CheckOutPage from "./pages/CheckOutPage";
import MealCategory from "./pages/MealCategoryPage";
import SingleMeal from "./pages/SingleMealPage";
import ShoppingBag from "./pages/ShoppingBag";

function App() {
  return (
    <DataProvoder>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogd/:id" element={<BlogDetails />} />
          <Route path="/book" element={<BookATable />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/Single" element={<SingleFoodModal />} />
          <Route path="/MealCategory" element={<MealCategory/>} />
          <Route path="/SingleMeal" element={<SingleMeal />} />
          <Route path="/CheckOutPage" element={<CheckOutPage />} />
          <Route path="/ShoppingBag" element={<ShoppingBag />} />
        </Routes>
      </BrowserRouter>
    </DataProvoder>

  );
}

export default App;
