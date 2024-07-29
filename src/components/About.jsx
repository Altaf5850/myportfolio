import React from "react";
import aboutImg from "../assets/me2.png";
import cvFile from "../assets/AltafPathan.pdf"; // Ensure this path is correct

const About = () => {
  const info = [
    { text: "Years experience", count: "Fresher" },
    { text: "Completed Projects", count: "5" },
    { text: "Companies Work", count: "0" },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-[#00FF33]">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am a fresher with a solid understanding of HTML, CSS,
                JavaScript, and React JS. I have experience working with APIs
                and am familiar with MongoDB, Tailwind CSS, and GitHub. I'm
                eager to start my career in web development.
              </p>
              <div className="flex mt-10 items-center justify-around">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-2xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-[#00FF33]">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href={cvFile} download>
                <button className="btn-primary py-3 px-3 rounded-xl bg-[#00FF33] text-black hover:text-white hover:bg-transparent hover:scale-90 duration-200 ease-in-out">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt="img"
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
