import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
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
      </>}/>
      <Route path="/project/:id" element={<ProjectDetails/>}/>

      </Routes>
      <div id="contact">
        <Contact/>
      </div>
    </BrowserRouter>
  )
}