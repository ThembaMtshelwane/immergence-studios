import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("contact_service", "contact_form", form.current, {
          publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Message sent");
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Error: Message not sent");
          }
        );
    }
    form.current?.reset();
  };

  return (
    <section className="min-h-screen flex mt-14" id="contact">
      <div className=" my-auto py-8 lg:pt-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-12 text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a project you wish to bring to life? Contact us, let us be part of
          your journey.
        </p>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-8 flex flex-col"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-300 sm:text-xl"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="emailAddress"
              className="bg-[#1d2221] rounded-lg w-full p-4 text-lg"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 font-medium text-gray-300 sm:text-xl"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="bg-[#1d2221] rounded-lg w-full p-4 text-lg"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-gray-300 sm:text-xl"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="bg-[#1d2221] rounded-lg w-full p-4 text-lg"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 mx-auto sm:text-xl font-medium text-center text-white rounded-lg bg-[#ff1800] sm:w-fit hover:bg-[#d91500] "
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
