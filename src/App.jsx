import { useState,useRef } from "react";
import About from "./about";

import "./css/App.css";
import Main from "./mainContainer.jsx";
import Nav from "./nav.jsx";
import Footer from "./footer";

function App() {
  
  return (

    <div>
    <Nav />
    <Main />
    <About/>
    <Footer/>
  </div>
  )

}

export default App;
