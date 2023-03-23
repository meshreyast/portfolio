import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from 'react-router-dom'
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from './Components/Contact'
import About from "./Components/About";
import Footer from "./Components/Footer";
import Backtotop from "./Components/Backtotop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Backtotop />
      </BrowserRouter>
    </>
  );
}

export default App;
