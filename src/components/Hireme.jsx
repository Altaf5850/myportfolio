import React from "react";
import Img from "../assets/me3.webp";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-[#00FF33]">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[25rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center shadow-lg shadow-white">
        <div className="shadow-2xl p-5">
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6 mb-4">
            Looking for a skilled web developer? Do you want any work from me?
            With a solid understanding of HTML, CSS, JavaScript, and React JS,
            and experience working with APIs, MongoDB, Tailwind CSS, and GitHub,
            I am ready to bring your projects to life. Let’s collaborate and
            create something amazing together!
          </p>
          <a
            href="#contact"
            className="btn-primary py-2 px-2
             rounded-xl m-3 bg-[#00FF33] text-black hover:text-white hover:bg-transparent hover:scale-90 duration-200 ease-in-out"
          >
            Say Hello
          </a>
        </div>

        <img
          src={Img}
          alt="img"
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-20 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
