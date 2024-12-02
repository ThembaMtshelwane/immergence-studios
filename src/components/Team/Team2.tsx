import { AnimatorIcon } from "../../definitions";

type Team2Props = {
  animator: AnimatorIcon | undefined;
};

const Team2 = ({ animator }: Team2Props) => {
  return (
    <>
      {animator && (
        <section className="flex flex-col items-center justify-center h-full w-full">
          <section className="grid lg:grid-cols-4 grid-rows-[350px_0.5fr_2fr] w-[90%] max-w-[550px] lg:grid-rows-2  h-fit">
            <section className="mx-auto lg:col-span-2 lg:row-span-2 w-full h-full py-4">
              <img
                src={animator.imageURL || "/artists/placeholder.png"}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </section>

            <section className="my-3 lg:col-span-2  lg:mx-2 lg:row-span-2 lg:my-auto">
              <h3 className="text-2xl xl:text-4xl">{animator.name}</h3>
              <h4 className="text-xl"> {animator.role}</h4>
            </section>

            <section className="lg:col-span-4 lg:row-span-2 lg:my-3 h-[250px]">
              <p className="text-justify text-[17px] lg:text-lg xl:text-xl">
                {animator.description}
              </p>
            </section>
          </section>
        </section>
      )}
    </>
  );
};

export default Team2;
