import { AnimatorIcon } from "../../definitions";

type Props = {
  data: AnimatorIcon;
  setProjects: (projectsn: string[]) => void;
};

const AnimatorAvatar = ({ data, setProjects }: Props) => {
  return (
    <section
      className="relative h-[100px] cursor-pointer hover:scale-105 flex items-center justify-center"
      onClick={() => setProjects(data.projects)}
    >
      <img
        src={data.avatar}
        alt=""
        className="h-full w-full object-cover object-center"
      />
      <h3 className="absolute text-3xl skew-y-[17deg]  ">{data.service}</h3>
    </section>
  );
};

export default AnimatorAvatar;
