import React from "react";
import MainCard from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Wrapper from "../components/Wrapper";

import "../styles/footer.css"
import "bootstrap/dist/css/bootstrap.min.css";

import { Card } from "react-bootstrap";

export default function Home() {
  return (
    <Wrapper>
      <NavBar />
      <Card />  
      <MainCard />
      <Footer />
    </Wrapper>
  );
}

