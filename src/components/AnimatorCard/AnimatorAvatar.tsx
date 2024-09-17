import { AnimatorIcon } from "../../definitions";

type Props = {
  data: AnimatorIcon;
  setProjects: (projectsn: string[]) => void;
};

const AnimatorAvatar = ({ data, setProjects }: Props) => {
  return (
    <section className="h-[100px]" onClick={() => setProjects(data.projects)}>
      <img
        src={data.avatar}
        alt=""
        className="h-full w-full object-cover object-center"
      />
    </section>
  );
};

export default AnimatorAvatar;
