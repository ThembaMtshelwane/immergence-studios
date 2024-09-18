const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" mt-20 backdrop-blur-sm">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 sm:w-[80%]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              IMMERGENCE
            </span>
          </a>
          <ul className=" flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#products" className="hover:underline me-4 md:me-6">
                Products
              </a>
            </li>
            <li>
              <a href="#artists" className="hover:underline me-4 md:me-6">
                Artists
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <h3 className="text-2xl mb-4">Disclaimer</h3>
        <p className="mb-4 text-xl text-justify">
          I do not own any of the images, videos ang gifs used in this website.
          This website is not for commercial use. It is purely to demonstrate
          frontend capabilities. Credit for the visual content is listed in the{" "}
          <a
            href="https://github.com/ThembaMtshelwane/immergence-studios"
            className="text-red-600"
          >
            github
          </a>
        </p>
        <span className="block text-md text-gray-500  dark:text-gray-400 mb-auto text-center ">
          © {currentYear}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            ThembaMM3
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
