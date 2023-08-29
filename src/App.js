import Footer from "./Footer";
import Greeting from "./Greeting";
import NavBar from "./Navigation/NavBar.js";
import "animate.css";
import { Routes, Route } from "react-router-dom";
import About from "./About.js";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <div className="routes">
        <Routes className="route-items">
          <Route path="/" element={<Greeting />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

      <NavBar />
      <Footer />

      <div className="noise"></div>
    </div>
  );
}

export default App;
