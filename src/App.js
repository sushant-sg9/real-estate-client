import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import Login from "./components/login/login.js";
import Register from "./components/register/register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/properties"
          element={<LandingPage getProperties={true} />}
        />
        <Route
          path="/add-properties"
          element={<LandingPage getProperties={false} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
