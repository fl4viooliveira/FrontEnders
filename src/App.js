import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Navibar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/homepage';
import Contact from './pages/contact';
import Team from './pages/team';

function App() {
  return (
    <Router>
      <div>
      <Navibar />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;