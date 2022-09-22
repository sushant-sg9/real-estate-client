import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import Login from "./components/login/login.js";
import Register from "./components/register/register";
import Basic from "./components/forms/Basicinfo";
import PropertyDetails from "./components/forms/PropertyDetails"
import GernalInfo from "./components/forms/GeneralInfo"
import Location from "./components/forms/Location"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/properties"
          element={<LandingPage getProperties={true} />}
        />
        <Route
          path="/add-properties"
          element={<LandingPage getProperties={false} />}
        />
       
        <Route path="/basicinfo" element={<Basic />} 
        />
        <Route path="/propertydetails" element={<PropertyDetails />} 
        />
        <Route path="/generalinfo" element={<GernalInfo />}
        />
        <Route path="/location" element={<Location />}
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
