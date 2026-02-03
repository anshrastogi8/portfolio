import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";

export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
