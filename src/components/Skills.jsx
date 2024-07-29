import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaCloud,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "API", icon: <FaCloud className="text-gray-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
];

const Skills = () => {
  return (
    <div className="container mx-auto py-12" id="skills">
      <h1 className="text-4xl font-bold text-center mb-8 hover:scale-95 duration-300 text-white">
        My <span className="text-[#00FF33]">Skills</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-white">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="text-6xl mb-4 hover:scale-110 duration-300">
              {skill.icon}
            </div>
            <h2 className="text-2xl font-semibold">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
