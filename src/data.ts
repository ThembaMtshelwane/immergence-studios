import { AnimatorIcon } from "./definitions";

const projects1 = [
  "artists/surreal/1.mp4",
  "artists/surreal/2.mp4",
  "artists/surreal/3.mp4",
];
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
    service: "surreal",
    name: "Luthando Nkomo",
    role: "Founder & Creative Director",
    imageURL: "placeholder.png",
    description:
      " As the founder of Immergence Studios, Luthando drives the overall creative vision of the company. Specializing in surreal animation, he’s known for bringing a unique, otherworldly spin to everyday scenes. His leadership and innovative storytelling have established the studio as a powerhouse in the animation industry. Luthando oversees all creative projects, ensuring they align with the studio's groundbreaking standards.",
  },
  {
    avatar: "about.jpg",
    projects: projects2,
    service: "pixel",
    name: "Naledi Khumal",
    role: "Pixel Art Animation Lead",
    imageURL: "placeholder.png",
    description:
      " Naledi is the studio's Pixel Art Animation Lead, known for her mastery of retro-inspired visuals. Her attention to detail in pixel-perfect designs has made her a standout in the animation industry. Naledi leads all pixel art and retro-styled projects, bringing a unique and nostalgic charm to Immergence’s portfolio",
  },
  {
    avatar: "about.jpg",
    projects: projects3,
    service: "2D",
    name: "Thandi Mokoena",
    role: "Head of 2D Animation",
    imageURL: "placeholder.png",
    description:
      "Thandi is the studio's Head of 2D Animation, excelling in hand-drawn animation and storytelling. Her expertise in traditional animation techniques brings characters and stories to life with vivid emotion and detail. Thandi leads the 2D animation team, overseeing all projects in this domain and ensuring the highest quality in visual and narrative expression.",
  },
  {
    avatar: "about.jpg",
    projects: projects4,
    service: "3D",
    name: "Sipho Dlamini",
    role: "Lead 3D Animator",
    imageURL: "placeholder.png",
    description:
      " As the Lead 3D Animator, Sipho specializes in crafting detailed, immersive 3D environments and characters. His technical skill and creative approach help bring realism and depth to the studio’s animated projects. Sipho is responsible for managing the 3D animation pipeline and ensuring that all 3D projects meet the studio's high standards of excellence.",
  },
];
