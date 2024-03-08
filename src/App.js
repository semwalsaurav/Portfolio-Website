import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { BackgroundApp } from "./components/ParticalBackground";
import { useEffect, useState } from "react";
function App() {
  const [background, setBackground] = useState(true);
  console.log(background)
  useEffect(()=>{
    console.log("background useeffect called ",background)
  },[background])
  return (
    <div>
      {background&&<BackgroundApp/>}
      <Navbar background setBackground={setBackground} />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;