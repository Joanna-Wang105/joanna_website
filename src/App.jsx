import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/experiences", text: "Experiences" },
    { path: "/certificates", text: "Certificates" },
  ];

  return (
    <Router>
      <div>
        <Header navLinks={navLinks} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/about' element={<About />} />
              <Route path='/experiences' element={<Experiences />} />
              <Route path='/certificates' element={<Certificates />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
