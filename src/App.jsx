import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import { Project } from "./components/Project";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/experiences", text: "Experiences" },
    { path: "/projects", text: "Projects" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <Router>
      <div>
        <Header navLinks={navLinks} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/projects" element={<Project />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
