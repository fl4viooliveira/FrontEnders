import React from "react";
import "../styles/homepage.css"
import "../styles/footer.css"
import { Card } from "react-bootstrap";
import Wrapper from "../components/Wrapper";
import NavBar from "../components/Navbar";
import Header from "../components/Header"
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
  return (
    <Wrapper>
    <NavBar />
    
    <Header></Header>
    <Card />  
    <Footer />
    </Wrapper>
  );
}
