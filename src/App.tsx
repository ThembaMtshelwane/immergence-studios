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
    <section className=" bg-background min-h-screen bg-no-repeat z-10 bg-center bg-cover ">
      <BackgroundMusic />
      <Hero />
      <About />
      <Products
        projects={projects}
        setProjects={setProjects}
        animator={animator}
        setAnimator={setAnimator}
      />
      <Team
        setProjects={setProjects}
        setAnimator={setAnimator}
        animator={animator}
      />
      <Contact />
      <Footer />
    </section>
  );
}
