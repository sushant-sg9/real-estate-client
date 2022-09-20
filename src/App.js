import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import Login from './components/login/login.js'
import Register from './components/register/register';
import './App.css';
import PropertiesList from "./components/PropertiesList/propertiesList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/properties" element={<LandingPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/add-properties" element={< />} /> */}
      </Routes>
    </BrowserRouter>
  );
}



export default App;
