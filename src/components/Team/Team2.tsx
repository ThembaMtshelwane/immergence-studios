const Team2 = () => {
  return (
    <section className="border-2 flex flex-col items-center justify-center">
      <section className="py-10 border-2  grid lg:grid-rows-4 lg:grid-cols-4 w-[90%]">
        <section className="border-2 border-red-400 mx-auto lg:col-span-2 lg:row-span-2 h-[220px] w-full">
          <img
            src="/about.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </section>

        <section className="my-3 lg:col-span-2 lg:row-span-2 lg:mx-2">
          <h3 className="text-2xl">Name and Surname</h3>
          <h4 className="text-lg"> Role and art style</h4>
        </section>

        <section className="lg:col-span-4 lg:row-span-2 lg:my-3">
          <p className="text-justify w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            reiciendis odit dolorum ratione similique ullam aspernatur debitis
            minima aut molestiae!
          </p>
        </section>
      </section>
    </section>
  );
};

export default Team2;
