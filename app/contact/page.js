"use client";

import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = "New message from the Team 846 website";
    const body = [
      `Name: ${formData.get("firstName")} ${formData.get("lastName")}`,
      `Email: ${formData.get("email")}`,
      "",
      "Message:",
      formData.get("message"),
    ].join("\n");

    window.location.href = `mailto:LynbrookRobotics846@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="contact-page-background min-h-screen px-[6vw] pb-24 pt-[10rem]">
      <Navbar />
      <section className="mx-auto w-full max-w-4xl">
        <h1 className="dk-prince-frog text-[clamp(5rem,11vw,10rem)] leading-[85%]">
          Contact Us
        </h1>
        
        <form className="mt-16 flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 poppins text-lg font-medium">
              First Name
              <input
                name="firstName"
                type="text"
                required
                className="border-2 border-[#333122] bg-white px-4 py-3 outline-none transition-colors focus:border-[#FFDA15]"
              />
            </label>
            <label className="flex flex-col gap-2 poppins text-lg font-medium">
              Last Name
              <input
                name="lastName"
                type="text"
                required
                className="border-2 border-[#333122] bg-white px-4 py-3 outline-none transition-colors focus:border-[#FFDA15]"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 poppins text-lg font-medium">
            Email Address
            <input
              name="email"
              type="email"
              required
              className="border-2 border-[#333122] bg-white px-4 py-3 outline-none transition-colors focus:border-[#FFDA15]"
            />
          </label>
          <label className="flex flex-col gap-2 poppins text-lg font-medium">
            Message
            <textarea
              name="message"
              required
              rows={6}
              className="resize-y border-2 border-[#333122] bg-white px-4 py-3 outline-none transition-colors focus:border-[#FFDA15]"
            />
          </label>
          <div className="flex items-center gap-5">
            <button
              type="submit"
              className="poppins w-fit bg-[#FFDA15] px-9 py-4 text-lg font-bold text-[#806D0B] transition-transform hover:-translate-y-1"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
