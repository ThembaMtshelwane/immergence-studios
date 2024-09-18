import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";

export default function App() {
  return (
    <section className=" bg-background min-h-screen bg-no-repeat z-10 bg-center bg-cover ">
      <Hero />
      <About />
      <Products />
      <Footer />
    </section>
  );
}
