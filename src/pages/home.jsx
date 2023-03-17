import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import "../styles/homepage.css"
import "../styles/footer.css"

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <Wrapper>
      <NavBar></NavBar>
    
      <Card></Card>

      <Footer></Footer>
    </Wrapper>
  );
}
