import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Home />
      <Contact />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
