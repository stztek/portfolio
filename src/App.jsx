import { useState, useRef, Suspense, lazy } from "react";
import "./css/App.css";
import Main from "./mainContainer.jsx";
import Nav from "./nav.jsx";
import Footer from "./footer";


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
