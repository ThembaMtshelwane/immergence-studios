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
      <h1 className="absolute h-full  w-[90%] grid  items-center justify-center text-center grid-rows-12 text-6xl font-ubuntuMono sm:text-7xl md:text-8xl lg:text-[130px] uppercase ">
        <span className="animate-slidein300 opacity-0  row-[2/4] md:row-[4/5]">
          Welcome
        </span>
        <span className="animate-slidein500 opacity-0  row-[4/5] md:row-[6/7] lg:row-[6/8]">
          to
        </span>
        <p className="text-glitch  row-[5/7] md:row-[8/9] lg:row-[9/10]">
          <span className="animate-slidein700 opacity-0 ">IMMERGENCE</span>
        </p>
      </h1>
    </div>
  );
};

export default Hero;
