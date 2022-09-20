import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import PropertiesList from "./components/PropertiesList/propertiesList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/properties" element={<LandingPage />} />
        {/* <Route path="/add-properties" element={< />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
