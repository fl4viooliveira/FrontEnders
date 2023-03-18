import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout(props) {
  return (
    <div className="container">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
