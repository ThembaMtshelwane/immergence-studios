import { EmblaCarousel } from "../EmblaCarousel";
import { AnimatorIcon } from "../../definitions";
import Thumbnail from "../Thumbnail/Thumbnail";
import Team2 from "../Team/Team2";
import { data } from "../../data";

type ProductsProps = {
  projects: string[];
  setProjects: (projectsn: string[]) => void;
  animator: AnimatorIcon | undefined;
  setAnimator: (animator: AnimatorIcon) => void;
};
const Products = ({
  projects,
  setProjects,
  animator,
  setAnimator,
}: ProductsProps) => {
  return (
    <section
      className="relative min-h-screen  grid grid-rows-[2fr_5fr] sm:grid-rows-[2fr_5fr]  z-10 "
      id="products"
    >
      <div className="absolute top-0 h-full w-full backdrop-blur-md -z-10"></div>
      <h2 className=" flex justify-self-center my-auto">Products</h2>
      <section className=" sm:flex">
        <section className="sm:w-[70%] flex-1" id="services">
          <EmblaCarousel projects={projects} />
        </section>
        <section className="sm:w-[30%]  lmd:w-[45%] flex flex-col">
          <section className="grid grid-cols-4 gap-4 p-3 justify-center sm:h-full lmd:h-fit sm:grid-cols-1 lmd:grid-rows-flow lmd:grid-cols-flow">
            {data.map((animator: AnimatorIcon) => (
              <Thumbnail
                key={animator.service}
                animator={animator}
                setProjects={setProjects}
                setAnimator={setAnimator}
                id={"services"}
              />
            ))}
          </section>
          <section className="hidden flex-1 lmd:flex">
            <Team2 animator={animator} />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Products;
