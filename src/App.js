import React from "react";
import "./App.css";
import resumeData from "./resumeData";
import Portfolio from "./Portfolio/Portfolio";
import Header from "./Header/Header";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Contact resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
