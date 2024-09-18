/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    duration: {
      fast: "1s",
      normal: "3s",
      slow: "60s",
      md: "7s",
    },
    extend: {
      backgroundImage: {
        background: 'url("/background.png")',
        footerbg: 'url("/footer.jpg")',
      },
      fontFamily: {
        pixelify: ["Pixelify Sans", "sans-serif"],
        ubuntuMono: ["Ubuntu Mono", "sans-serif"],
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-50px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein300: "slidein 1s ease 300ms forwards",
        slidein500: "slidein 1s ease 700ms forwards",
        slidein700: "slidein 1s ease 1200ms forwards",
      },
      gridTemplateColumns: {
        flow: "repeat(auto-fit,100px)",
      },
      gridTemplateRows: {
        flow: "repeat(auto-fit,100px)",
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-glitch")],
};
