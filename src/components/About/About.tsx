const About = () => {
  return (
    <section className="h-screen relative flex items-center ">
      <section className="hidden md:block h-full w-[50%] ">
        <video src="3.mp4" loop className="h-full w-full object-cover"></video>
      </section>
      <section className="h-full w-full md:hidden">
        <img
          src="about.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </section>
      <section className="absolute text-white font-ubuntuMono p-5 w-[90%] md:relative md:w-[40%] mx-auto ">
        <h2>Immergence</h2>
        <p className="text-xl text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nam
          iste saepe rerum a eius, ex mollitia quasi at similique, et suscipit
          fugiat non rem, aliquam facere unde aspernatur error molestiae? Dolor
          rem laudantium suscipit, maxime soluta ab sint nobis quaerat similique
          cupiditate quam voluptatem aspernatur cumque dicta voluptas assumenda.
        </p>
      </section>
    </section>
  );
};

export default About;
