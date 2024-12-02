const About = () => {
  return (
    <section
      className="h-screen py-10 md:py-0 lg:h-screen relative flex items-center"
      id="about"
    >
      <section className="hidden md:flex md:h-full  w-[50%] lg:w-[50%]">
        <video
          src="artists/surreal/2.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        ></video>
      </section>
      <section className="absolute  h-full w-full md:hidden">
        <img
          src="about.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </section>
      <section className="h-full z-10 text-white font-ubuntuMono p-3 flex flex-col items-center justify-center  md:relative xsm:w-[80%] md:w-[45%] mx-auto max-w-[650px]">
        <h2>About</h2>
        <p className="text-lg text-justify lg:text-xl">
          Immergence Studios, found
          <span className="hidden-msg">e</span>d in 2030 and based in the heart
          of South Africa, is a trailblazing {""}{" "}
          <span className="hidden-msg">c</span>
          reative powerhouse known for its cutting-edge storytelling. With a
          team of {""} <span className="hidden-msg">m</span>asterful animators,
          we bring bold, award-winning projects to life, including our flagship
          show Immergence. Our studio thrives on a spirit of {""}{" "}
          <span className="hidden-msg">e</span>xcellence, pushing the boundaries
          of animation to craft immersive worlds. From daring visual effects to
          deeply e<span className="hidden-msg">m</span>otional {""}{" "}
          <span className="hidden-msg">n</span>arratives, we turn {""}{" "}
          <span className="hidden-msg">i</span>magination into reality.
          {""} <span className="hidden-msg">R</span>evolutionary ideas meet
          artistry here, ensuring never-before-seen quality and captivating
          stories that resonate worldwide. Our exp
          <span className="hidden-msg">e</span>rt team drives innovation across
          the <span className="hidden-msg">g</span>
          lobe.
        </p>
      </section>
    </section>
  );
};

export default About;
