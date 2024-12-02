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
      {animator && (
        <section
          className="lmd:hidden min-h-screen md:h-screen grid items-center grid-rows-[1fr_4fr_1fr] xsm:grid-rows-[1fr_2fr_1fr] md:grid-rows-[1fr_2.5fr_1fr] "
          id="teamSection"
        >
          <h2 className="text-center" id="team">
            Meet the team
          </h2>

          <section
            id="teamMember"
            className="px-4 grid   xms:grid-rows-4 xsm:grid-cols-4 xsm:w-[80%] justify-self-center"
          >
            <section className="xsm:col-span-2 xsm:row-span-2 h-[250px]  w-full">
              <img
                src={animator.imageURL || "/artists/placeholder.png"}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </section>

            <section className="my-3 xsm:col-span-2 xsm:row-span-2 xsm:mx-4">
              <h3 className="text-2xl">{animator.name}</h3>
              <h4 className="text-xl"> {animator.role}</h4>
            </section>

            <section className="xsm:col-span-4 xsm:row-span-2 xsm:my-4 h-[460px] xsm:h-[230px]">
              <p className="text-center xsm:text-justify text-xl">
                {animator.description}
              </p>
            </section>
          </section>

          <section className="grid grid-cols-4 gap-4 p-3">
            {data.map((avatar: AnimatorIcon) => (
              <Thumbnail
                key={avatar.service}
                animator={avatar}
                setProjects={setProjects}
                setAnimator={setAnimator}
                id={"team"}
              />
            ))}
          </section>
        </section>
      )}
    </>
  );
};

export default Team;
