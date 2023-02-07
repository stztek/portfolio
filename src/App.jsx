import { useState,useRef } from "react";
import About from "./about";

import "./css/App.css";
import Main from "./mainContainer.jsx";
import Nav from "./nav.jsx";

function App() {
  
  return (

    <div>
    <Nav />
    <Main />
    <About/>
  </div>
  )

}

export default App;
