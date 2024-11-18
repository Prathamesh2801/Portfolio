import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Header/>
      <div id="home">
        <Home/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="portfolio">
        <Projects/>
      </div>
      <div id="experience">
        <Experience/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </>
  )
}