import Navigation from "./landingpage/Navigation";
import About from "./pages/About";
import Community from "./pages/Community";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Earn from "./pages/Earn";
function App() {
  return (
    <div className="h-screen bg-gray-50">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About/> } />
          <Route path="/community" element={ <Community/> } />
          <Route path="/refer&earn" element={ <Earn/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
