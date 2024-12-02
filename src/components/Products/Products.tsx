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
    <section className="relative min-h-screen z-10 " id="products">
      <div
        className="absolute top-0 h-full w-full backdrop-blur-md -z-10"
        id="team"
      ></div>
      <h2 className=" flex justify-self-center my-10 lmd:hidden ">Products</h2>

      <section className=" sm:flex ">
        <section className="sm:w-[50%] lg: flex-1 " id="services">
          <EmblaCarousel projects={projects} />
        </section>
        <section className="sm:w-[30%] lmd:w-[50%] flex flex-col sm:h-screen">
          <section className="grid grid-cols-4 gap-4 py-3 sm:py-0 sm:h-full lmd:h-fit sm:grid-cols-1 lmd:grid-rows-flow lmd:grid-cols-flow w-[100%] lmd:w-[90%]  max-w-[650px] mx-auto lmd:justify-center lg:justify-start">
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
