import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/home.jsx';
import Contact from './pages/contactpage.jsx';
import TeamList from "./pages/teampage.jsx";
import Developer from './pages/team/slug.jsx';
import Wrapper from "./components/Wrapper.jsx"



function App() {
  return (
    <Wrapper>
    <Router basename="/">
      
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<TeamList />} />
      <Route path="/team/:slug" element={<Developer/>} />

      </Routes>
      <Footer />
      
    </Router>
    </Wrapper>
  );
}

export default App;
