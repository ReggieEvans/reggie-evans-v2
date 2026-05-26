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
        <div className="divider" style={{ maxWidth: "900px", margin: "0 auto" }} />
        <About />
        <div className="divider" style={{ maxWidth: "900px", margin: "0 auto" }} />
        <BearCreek />
        <div className="divider" style={{ maxWidth: "900px", margin: "0 auto" }} />
        <Projects />
        <div className="divider" style={{ maxWidth: "900px", margin: "0 auto" }} />
        <Skills />
        <div className="divider" style={{ maxWidth: "900px", margin: "0 auto" }} />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
