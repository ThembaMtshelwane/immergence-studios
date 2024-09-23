const Hero = () => {
  return (
    <div className=" h-screen flex justify-center relative">
      <video
        src="hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover object-center"
      />
      <h1 className="absolute h-[50%] w-[90%] grid lg:gap-20 items-center justify-center text-center grid-rows-6 text-6xl font-ubuntuMono sm:text-7xl lg:text-9xl uppercase ">
        <span className="animate-slidein300 opacity-0  row-[2/4] md:row-[2/4]">
          Welcome
        </span>
        <span className="animate-slidein500 opacity-0  row-[4/5] md:row-[4/5]">
          to
        </span>
        <p className="text-glitch  row-[5/6] md:row-[5/7]">
          <span className="animate-slidein700 opacity-0 ">IMMERGENCE</span>
        </p>
      </h1>
    </div>
  );
};

export default Hero;
