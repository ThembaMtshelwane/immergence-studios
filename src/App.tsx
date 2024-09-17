import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";

export default function App() {
  return (
    <section className=" bg-background min-h-screen bg-no-repeat z-10 bg-center bg-cover ">
      <Hero />
      <About />
      <Products />
    </section>
  );
}
