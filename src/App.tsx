import { useState } from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Team from "./components/Team/Team";
import { data } from "./data";
import { AnimatorIcon } from "./definitions";
import BackgroundMusic from "./BackgroundMusic";
import Contact from "./components/Contact/Contact";

export default function App() {
  const [projects, setProjects] = useState<string[]>(data[0].projects);
  const [animator, setAnimator] = useState<AnimatorIcon | undefined>(data[0]);

  return (
    // <section
    //   className="h-screen overflow-y-scroll bg-background bg-no-repeat bg-center bg-cover snap-y snap-mandatory scroll-smooth"
    // >
    <section className="bg-background bg-no-repeat bg-center bg-cover scroll-smooth">
      <BackgroundMusic />
      <div className="snap-center min-h-screen">
        <Hero />
      </div>
      <div className="snap-center min-h-screen">
        <About />
      </div>
      <div className="snap-center min-h-screen">
        <Products
          projects={projects}
          setProjects={setProjects}
          animator={animator}
          setAnimator={setAnimator}
        />
      </div>
      <div className="snap-center min-h-screen lmd:hidden">
        <Team
          setProjects={setProjects}
          setAnimator={setAnimator}
          animator={animator}
        />
      </div>
      <div className="snap-center min-h-screen">
        <Contact />
      </div>

      <div className="snap-center ">
        <Footer />
      </div>
    </section>
  );
}
