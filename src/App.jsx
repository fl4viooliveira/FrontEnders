import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/contactpage.jsx';
import Team from './pages/teampage.jsx';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
