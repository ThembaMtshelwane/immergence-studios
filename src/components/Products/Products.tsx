import { useState } from "react";
import { EmblaCarousel } from "../EmblaCarousel";
import AnimatorAvatar from "../AnimatorCard/AnimatorAvatar";
import { AnimatorIcon } from "../../definitions";

const projects1 = ["1.mp4", "1.mp4", "1.mp4", "1.mp4"];
const projects2 = ["2.mp4", "2.mp4", "2.mp4", "2.mp4"];
const projects3 = ["3.mp4", "3.mp4", "3.mp4", "3.mp4"];
const projects4 = ["1.mp4", "2.mp4", "3.mp4", "2.mp4"];

const data: AnimatorIcon[] = [
  {
    avatar: "about.jpg",
    projects: projects1,
  },
  {
    avatar: "about.jpg",
    projects: projects2,
  },
  {
    avatar: "about.jpg",
    projects: projects3,
  },
  {
    avatar: "about.jpg",
    projects: projects4,
  },
];
const Products = () => {
  const [projects, setProjects] = useState<string[]>(projects1);

  return (
    <section className="relative min-h-screen  grid grid-rows-[1fr_5fr] sm:grid-rows-[2fr_5fr]  z-10">
      <div className="absolute top-0 h-full w-full backdrop-blur-md -z-10"></div>
      <h2 className=" flex justify-self-center my-auto">Products</h2>
      <section className=" sm:flex">
        <section className="sm:w-[70%]">
          <EmblaCarousel projects={projects} />
        </section>
        <section className="grid grid-cols-flow grid-rows-flow gap-4 p-3 justify-center sm:w-[30%]">
          {data.map((avatar: AnimatorIcon) => (
            <AnimatorAvatar data={avatar} setProjects={setProjects} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default Products;
