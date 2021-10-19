import React from "react";
import './App.css'
import About from "./components/About"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

export default function App() {
  return (
    <main>
      <Navbar />    
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
