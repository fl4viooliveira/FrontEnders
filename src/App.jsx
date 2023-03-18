import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Contact from './pages/contactpage.jsx';
import TeamList from "./pages/team"
import Developer from './pages/team/slug.jsx';
import About from './pages/aboutus.jsx'


function App() {
  return (
    <Router basename="/">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<TeamList />} />
      <Route path="/team/:slug" element={<Developer/>} />

      </Routes>
    </Router>
  );
}

export default App;
