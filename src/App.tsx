import { BrowserRouter } from "react-router-dom";

import {
  About,
  Experience,
  Organization,
  Certificate,
  Hero,
  Navbar,
  Tech,
  Works,
  Capstone,
  MP,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Capstone />
        <MP />
        <Certificate />
        <Organization />
      </div>
    </BrowserRouter>
  );
};

export default App;
