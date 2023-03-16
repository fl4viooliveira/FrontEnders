import React from "react";
import Card from "../components/Card"
import Footer from "../components/Footer"
import NavBar from "../components/Navbar"
import Wrapper from "../components/Wrapper"

import "bootstrap/dist/css/bootstrap.min.css";




export default function Home(){
    return (
        <Wrapper>
        <NavBar></NavBar>
        <div>
        <h1>frontEnders</h1>
        </div>
        <Card></Card>
   
        <Footer></Footer>
        </Wrapper>
        
    );
}


