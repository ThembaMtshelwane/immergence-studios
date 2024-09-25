import { data } from "../../data";
import { AnimatorIcon } from "../../definitions";
import Thumbnail from "../Thumbnail/Thumbnail";

type TeamProps = {
  setProjects: (projectsn: string[]) => void;
  setAnimator: (animator: AnimatorIcon) => void;
  animator: AnimatorIcon | undefined;
};

const Team = ({ setProjects, setAnimator, animator }: TeamProps) => {
  return (
    <>
      {" "}
      {animator && (
        <section className="lmd:hidden min-h-screen border-2 grid items-center grid-rows-[1fr_2fr_1fr]">
          <h2 className="text-center">Meet the team</h2>

          <section className="border-2 px-4 grid  xms:grid-rows-4 xsm:grid-cols-4 xsm:w-[80%] justify-self-center">
            <section className="border-2 border-red-400 xsm:col-span-2 xsm:row-span-2 h-[250px]  w-full">
              <img
                src="/artists/placeholder.png"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </section>

            <section className="my-3 xsm:col-span-2 xsm:row-span-2 xsm:mx-4">
              <h3 className="text-2xl">{animator.name}</h3>
              <h4 className="text-lg"> {animator.role}</h4>
            </section>

            <section className="xsm:col-span-4 xsm:row-span-2 xsm:my-4">
              <p className="text-justify w-[90%]">{animator.description}</p>
            </section>
          </section>

          <section className="grid grid-cols-4 gap-4 p-3 xsm:w-[80%] border-2 justify-self-center">
            {data.map((avatar: AnimatorIcon) => (
              <Thumbnail
                key={avatar.service}
                animator={avatar}
                setProjects={setProjects}
                setAnimator={setAnimator}
              />
            ))}
          </section>
        </section>
      )}
    </>
  );
};

export default Team;
