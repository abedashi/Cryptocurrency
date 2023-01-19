import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Coin from "./components/Coin";
import { ToastContainer } from "react-toastify";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import Settings from "./components/Settings";
import Home from "./components/Home";
import { useState, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const onToggleHandler = () => {
    setTheme(theme === "Dark" ? "Light" : "Dark");
  };
  useEffect(() => {
    switch (theme) {
      case "Dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "Dark");
        break;
      case "Light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "Light");
        break;

      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  return (
    <div className="bg-[#EDF0F4] dark:bg-gray-800">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={<Home theme={theme} toggle={onToggleHandler} />}
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/:id" element={<Coin />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
