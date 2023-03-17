import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navibar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/home.jsx';
import Contact from './pages/contactpage.jsx';
import TeamList from "./pages/team"
import Developer from './pages/team/slug.jsx';
import About from './pages/aboutus.jsx'

function App() {
  return (
    <Router basename="/">
      <div>
      <Navibar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<TeamList />} />
      <Route path="/team/:slug" element={<Developer/>} />

      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
