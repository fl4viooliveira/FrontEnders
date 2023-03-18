import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout(props) {
  return (
    <div className="container-fluid">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
