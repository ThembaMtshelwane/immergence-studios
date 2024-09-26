import { AnimatorIcon } from "../../definitions";

type Props = {
  animator: AnimatorIcon;
  setProjects: (projectsn: string[]) => void;
  setAnimator: (animator: AnimatorIcon) => void;
  id: string;
};

const Thumbnail = ({ animator, setProjects, setAnimator, id }: Props) => {
  return (
    <a
      href={`#${id}`}
      className="relative h-[23.5vh] lmd:h-full cursor-pointer hover:scale-105 flex items-center justify-center"
      onClick={() => {
        setProjects(animator.projects);
        setAnimator(animator);
      }}
    >
      <img
        src={animator.avatar}
        alt=""
        className="h-full w-full object-cover object-center"
      />
      <h3 className="absolute text-lg skew-y-[17deg]  ">{animator.service}</h3>
    </a>
  );
};

export default Thumbnail;
