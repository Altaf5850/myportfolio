import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "E-Commerce Web App",
      github_link: "https://github.com/Altaf5850/apecommerces",
      live_link: "https://apecommerces.netlify.app/",
    },
    {
      img: project2,
      name: "Tourism Web App",
      github_link: "https://github.com/Altaf5850/ptourist-",
      live_link: "https://pathantourist.netlify.app/",
    },
    // {
    //   img: project3,
    //   name: "Movie Web App",
    //   github_link: "https://github.com/Altaf5850/ptubemovies",
    //   live_link: "https://ptubemovies.netlify.app/",
    // },
    {
      img: project4,
      name: "Education Web App",
      github_link: "https://github.com/Altaf5850/Peducation",
      live_link: "https://apeducation.netlify.app/",
    },
    {
      img: project5,
      name: "Coffee Shop",
      github_link: "https://github.com/Altaf5850/coffeewebsite",
      live_link: "https://apcoffeeday.netlify.app/",
    },
    // {
    //   img: project6,
    //   name: "AI Tool for Desktop",
    //   github_link: "https://github.com/Altaf5850/desktopaitool",
    //   live_link: "https://desktopaitoolapp.netlify.app/",
    // },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-[#00FF33]">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex flex-col lg:flex-row max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="w-full lg:w-2/3">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img
                    src={project_info.img}
                    alt={project_info.name}
                    className="rounded-lg"
                  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00FF33] bg-gray-800 px-2 py-1 inline-block rounded-lg"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00FF33] bg-gray-800 px-2 py-1 inline-block rounded-lg"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:block lg:w-1/3">
          <img
            src="https://static.vecteezy.com/system/resources/previews/024/387/908/non_2x/3d-male-character-happy-working-on-a-laptop-free-png.png"
            alt="3D Character"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
