import { AnimatorIcon } from "../../definitions";

type Team2Props = {
  animator: AnimatorIcon | undefined;
};

const Team2 = ({ animator }: Team2Props) => {
  return (
    <>
      {animator && (
        <section className="border-2 flex flex-col items-center justify-center">
          <section className="py-10 border-2  grid lg:grid-rows-4 lg:grid-cols-4 w-[90%]">
            <section className="border-2 border-red-400 mx-auto lg:col-span-2 lg:row-span-2 h-[220px] w-full">
              <img
                src={animator.imageURL}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </section>

            <section className="my-3 lg:col-span-2 lg:row-span-2 lg:mx-2">
              <h3 className="text-2xl">{animator.name}</h3>
              <h4 className="text-lg"> {animator.role}</h4>
            </section>

            <section className="lg:col-span-4 lg:row-span-2 lg:my-3">
              <p className="text-justify w-[90%]">{animator.description}</p>
            </section>
          </section>
        </section>
      )}
    </>
  );
};

export default Team2;
