import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Projects = {
  projects: string[];
};
export function EmblaCarousel({ projects }: Projects) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla b" ref={emblaRef}>
      <div className="embla__container h-[70vh] max-h-screen sm:h-screen ">
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
