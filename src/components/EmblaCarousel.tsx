import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel({ projects }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla border-2" ref={emblaRef}>
      <div className="embla__container border-2 h-[70vh] max-h-screen sm:h-screen border-pink-300 ">
        {projects.map((project: string, index: number) => (
          <div className="embla__slide" key={index}>
            <video
              src={project}
              loop
              autoPlay
              muted
              className="h-full w-full object-cover object-center"
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
}
