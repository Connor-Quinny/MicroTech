import Hero from "./Components/Hero";
import { homeObjOne, homeObjTwo } from "./Components/InfoSection/Data";
import InfoSection from "./Components/InfoSection/Index";
// import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar/Index";
import { BrowserRouter as Router } from "react-router-dom"
import Sidebar from "./Components/Sidebar";
import { useState } from "react";
import Home from "./Pages/Index";
import HeroSection from "./Components/Hero/Index";
import Services from "./Components/Services/Index";

function App() {
  //font
  
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
