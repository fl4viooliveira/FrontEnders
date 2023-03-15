import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Navibar from './components/navbar.js';
import Footer from './components/footer.js';
import Homepage from './pages/homepage.js';
import Contact from './pages/contactpage.js';
import Team from './pages/teampage.js';

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