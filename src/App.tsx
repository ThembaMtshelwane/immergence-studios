import About from "./components/About/About";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <section className="bg-background min-h-screen bg-no-repeat bg-center bg-cover ">
      <Hero />
      <About />
    </section>
  );
}
