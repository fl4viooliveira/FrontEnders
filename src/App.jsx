import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/contactpage.jsx';
import TeamList from './pages/team';

function App() {
  return (
    <Router basename="/">
      <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<TeamList />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
