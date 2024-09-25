import { AnimatorIcon } from "./definitions";

const projects1 = ["artists/1/1.mp4", "artists/1/2.mp4", "artists/1/3.mp4"];
const projects2 = [
  "artists/pixel/1.mp4",
  "artists/pixel/2.mp4",
  "artists/pixel/3.mp4",
];
const projects3 = ["artists/2d/1.mp4", "artists/2d/2.mp4", "artists/2d/3.mp4"];
const projects4 = ["artists/3d/1.mp4", "artists/3d/2.mp4", "artists/3d/3.mp4"];

export const data: AnimatorIcon[] = [
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
