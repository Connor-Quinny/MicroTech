import Hero from "./Components/Hero";
import { homeObjOne } from "./Components/InfoSection/Data";
import InfoSection from "./Components/InfoSection/Index";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <InfoSection {...homeObjOne}/>
    </div>
  );
}

export default App;
