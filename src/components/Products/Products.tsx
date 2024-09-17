import { useState } from "react";
import { EmblaCarousel } from "../EmblaCarousel";

const projects1 = ["1.mp4", "1.mp4", "1.mp4", "1.mp4"];
const projects2 = ["2.mp4", "2.mp4", "2.mp4", "2.mp4"];
const projects3 = ["3.mp4", "3.mp4", "3.mp4", "3.mp4"];
const projects4 = ["1.mp4", "2.mp4", "3.mp4", "2.mp4"];
const Products = () => {
  const [projects, setProjects] = useState<string[]>(projects1);

  return (
    <section className="min-h-screen border-2 border-blue-400 grid grid-rows-[1fr_5fr]">
      <h2 className=" flex justify-self-center my-auto">Products</h2>
      <section className="border-2 border-green-400 sm:flex">
        <section className="sm:w-[70%]">
          <EmblaCarousel projects={projects} />
        </section>
        <section className="grid grid-cols-flow grid-rows-flow gap-4 p-3 justify-center border-[3px] border-yellow-400 sm:w-[30%]">
          <section
            className="  border-2 h-[100px]"
            onClick={() => setProjects(projects1)}
          >
            <img
              src="about.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </section>

          <section
            className="  border-2  h-[100px]"
            onClick={() => setProjects(projects2)}
          >
            <img
              src="about.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </section>

          <section
            className="  border-2  h-[100px]"
            onClick={() => setProjects(projects3)}
          >
            <img
              src="about.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </section>

          <section
            className="  border-2  h-[100px]"
            onClick={() => setProjects(projects4)}
          >
            <img
              src="about.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Products;
