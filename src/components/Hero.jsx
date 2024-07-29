import React from "react";
import hero from "../assets/me.png";

const socialMediaLinks = [
  {
    name: "logo-linkedin",
    url: "https://www.linkedin.com/in/altaf-pathan-7180a2205",
  },
  {
    name: "logo-github",
    url: "https://github.com/Altaf5850",
  },
  { name: "logo-whatsapp", url: "https://wa.me/9326337850" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="img" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-[#00FF33] md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Altaf Pathan</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Frontend Developer
          </h4>
          <a href="#contact" className="btn-primary mt-8 text-white">
            Contact Me
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {socialMediaLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white"
              >
                <ion-icon name={social.name}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
