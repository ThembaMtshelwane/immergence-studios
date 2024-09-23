const About = () => {
  return (
    <section className="h-screen relative flex items-center" id="about">
      <section className="hidden md:block h-full w-[50%] ">
        <video
          src="artists/1/2.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        ></video>
      </section>
      <section className="h-full w-full md:hidden">
        <img
          src="about.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </section>
      <section className="absolute text-white font-ubuntuMono p-5 flex flex-col items-center md:relative md:w-[40%] mx-auto ">
        <h2>About</h2>
        <p className="text-xl text-justify border-2">
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
