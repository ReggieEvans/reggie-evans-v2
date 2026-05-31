import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import BearCreek from "./components/BearCreek";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="divider container-section" />
        <About />
        <div className="divider container-section" />
        <BearCreek />
        <div className="divider container-section" />
        <Projects />
        <div className="divider container-section" />
        <Skills />
        <div className="divider container-section" />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
