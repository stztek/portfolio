import { useState, useRef, Suspense, lazy } from "react";
// import About from "./about";

import "./css/App.css";
import Main from "./mainContainer.jsx";
import Nav from "./nav.jsx";
import Footer from "./footer";
//import Contact from "./contact";

const About = lazy(() => import("./about.jsx"));
const Contact = lazy(() => import("./contact.jsx"));
function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Suspense
        fallback={
          <div className="loading-center">
            <div className="loading"></div>
          </div>
        }
      >
        <About />

        <Contact />
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
