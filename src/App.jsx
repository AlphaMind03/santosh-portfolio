import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseGlow from "./components/MouseGlow";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark text-white">
      {/* Background mouse glow effect */}
      <MouseGlow />

      {/* Noise texture overlay */}
      <div className="noise" />

      {/* Main website content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}