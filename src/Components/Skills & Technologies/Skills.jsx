import React from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMui,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import gsap from "gsap";

import { FaServer } from "react-icons/fa";

function Skills() {

   <div
  className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition"
  onMouseEnter={(e) => {
    gsap.to(e.currentTarget.querySelector(".skill-icon"), {
      rotation: 360,
      duration: 0.8,
      ease: "power2.out",
    });
  }}
  onMouseLeave={(e) => {
    gsap.to(e.currentTarget.querySelector(".skill-icon"), {
      rotation: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }}
>
  <SiReact className="skill-icon text-5xl text-cyan-400" />
  <p className="mt-3 font-semibold">React</p>
</div>
const skills = [
  { name: "HTML5", icon: <SiHtml5 className="skill-icon text-5xl text-orange-600" /> },
  { name: "CSS3", icon: <SiCss className="skill-icon text-5xl text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="skill-icon text-5xl text-yellow-400" /> },
  { name: "Git", icon: <SiGit className="skill-icon text-5xl text-orange-600" /> },
  { name: "GitHub", icon: <SiGithub className="skill-icon text-5xl text-gray-900" /> },
  { name: "Firebase", icon: <SiFirebase className="skill-icon text-5xl text-yellow-500" /> },
  { name: "React", icon: <SiReact className="skill-icon text-5xl text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="skill-icon text-5xl text-purple-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="skill-icon text-5xl text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon text-5xl text-cyan-500" /> },
  { name: "Material UI", icon: <SiMui className="skill-icon text-5xl text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="skill-icon text-5xl text-black" /> },
  { name: "Node.js", icon: <SiNodedotjs className="skill-icon text-5xl text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="skill-icon text-5xl text-gray-800" /> },
  { name: "REST API", icon: <FaServer className="skill-icon text-5xl text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="skill-icon text-5xl text-green-500" /> },
  { name: "Python", icon: <SiPython className="skill-icon text-5xl text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="skill-icon text-5xl text-blue-700" /> },
];




  return (
    
    <div>
           <div className="text-center mb-12 pt-40">
  <h1 className="text-4xl font-bold">
    Skills & Technologies
  </h1>
  <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
</div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
      onMouseEnter={(e) => {
        gsap.to(e.currentTarget.querySelector(".skill-icon"), {
          rotation: 360,
          duration: 0.8,
          ease: "power2.out",
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(e.currentTarget.querySelector(".skill-icon"), {
          rotation: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }}
    >
      {skill.icon}
      <p className="mt-3 font-semibold">{skill.name}</p>
    </div>
  ))}
</div>
        <div>


  </div>
</div>
  
  );
}

export default Skills
