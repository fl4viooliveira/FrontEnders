import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Contact from "./pages/contactpage.jsx";
import TeamList from "./pages/team";
import Developer from "./pages/team/slug.jsx";
import About from "./pages/aboutus.jsx";
import ServiceList from "./pages/services/index.jsx";
import Service from "./pages/services/slug.jsx";
import Admin from "./pages/admin.jsx";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamList />} />
        <Route path="/team/:slug" element={<Developer />} />
        <Route path="/services" element={<ServiceList />} />
        <Route path="/services/:slug" element={<Service />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
