import { useState, useRef, Suspense, lazy } from "react";
import "./css/App.css";
import Main from "./mainContainer.jsx";
import Nav from "./nav.jsx";
import Footer from "./footer";
import AdminPanel from "./components/admincont";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const About = lazy(() => import("./about.jsx"));
const Contact = lazy(() => import("./contact.jsx"));
function App() {
  return (
    <div>
      <Nav/>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Main/>} />
          <Route path="/admin-panel-portfolio" element={<AdminPanel/>} />

   
        </Routes>

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

      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
