import React from "react";
import './App.css'
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

export default function App() {
  return (
    <main>
      <div className='navbar'>
        <Navbar />
      </div>
      
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
