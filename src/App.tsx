import { useState } from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Team from "./components/Team/Team";
import { data } from "./data";

export default function App() {
  const [projects, setProjects] = useState<string[]>(data[0].projects);

  return (
    <section className=" bg-background min-h-screen bg-no-repeat z-10 bg-center bg-cover ">
      <Hero />
      <About />
      <Products projects={projects} setProjects={setProjects} />
      <Team setProjects={setProjects} />
      <Footer />
    </section>
  );
}
