import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import Login from "./components/login/login.js";
import Register from "./components/register/register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
