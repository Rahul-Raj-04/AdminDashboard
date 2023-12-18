import "./App.css";
import Banner from "./Comonent/Banner";
import DashBoard from "./Comonent/DashBoard";
import { Outlet } from "react-router-dom";
import LoginForm from "./Comonent/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from "./Comonent/Order";
import Navbar from "./Comonent/DashBoard/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>

        <Route
          element={
            <>
              <Outlet />
              <Navbar />
            </>
          }
        >
          <Route path="/DashBoard" element={<DashBoard />}></Route>
          <Route path="/Banner" element={<Banner />}></Route>
          <Route path="/Order" element={<Order />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
