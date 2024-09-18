import { useState } from "react";
import { EmblaCarousel } from "../EmblaCarousel";
import AnimatorAvatar from "../AnimatorCard/AnimatorAvatar";
import { AnimatorIcon } from "../../definitions";

const projects1 = ["artists/1/1.mp4", "artists/1/2.mp4", "artists/1/3.mp4"];
const projects2 = [
  "artists/pixel/1.mp4",
  "artists/pixel/2.mp4",
  "artists/pixel/3.mp4",
];
const projects3 = ["artists/2d/1.mp4", "artists/2d/2.mp4", "artists/2d/3.mp4"];
const projects4 = ["artists/3d/1.mp4", "artists/3d/2.mp4", "artists/3d/3.mp4"];

const data: AnimatorIcon[] = [
  {
    avatar: "about.jpg",
    projects: projects1,
    service: "surrel",
  },
  {
    avatar: "about.jpg",
    projects: projects2,
    service: "pixel",
  },
  {
    avatar: "about.jpg",
    projects: projects3,
    service: "2D",
  },
  {
    avatar: "about.jpg",
    projects: projects4,
    service: "3D",
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
