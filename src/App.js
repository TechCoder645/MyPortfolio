import "./App.scss";

// Importing components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import About from "./components/About/About";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/About/RouteComponents/Intro";
import Experience from "./components/About/RouteComponents/Experience";
import Internships from "./components/About/RouteComponents/Internships";
import PostGraduation from "./components/About/RouteComponents/Post-graduation"; // Corrected import path
import Skill from "./components/Skill/Skill";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header /> <Hero /> <Works /> <About /> <Skill /> <Contact />
                <Footer />
              </>
            }
          />
          <Route exact path="/about/intro" element={<Intro />} />
          <Route exact path="/about/experience" element={<Experience />} />
          <Route exact path="/about/internships" element={<Internships />} />
          <Route exact path="/about/post-graduation" element={<PostGraduation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;