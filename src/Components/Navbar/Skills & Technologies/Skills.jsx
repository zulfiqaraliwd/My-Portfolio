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

import { FaServer } from "react-icons/fa";

function Skills() {

    const skills = [ { name: "JavaScript", icon: <SiJavascript /> },
         { name: "TypeScript", icon: <SiTypescript /> },
          { name: "React", icon: <SiReact /> },
           { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "MongoDB", icon: <SiMongodb /> },
             { name: "Express.js", icon: <SiExpress /> },
              { name: "Next.js", icon: <SiNextdotjs /> },
               { name: "Redux", icon: <SiRedux /> },
                { name: "HTML5", icon: <SiHtml5 /> },
                 {  name: "CSS3", icon: <SiCss />  },
                  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                   { name: "Material UI", icon: <SiMui /> },
                    { name: "Firebase", icon: <SiFirebase /> },
                     { name: "Git", icon: <SiGit /> },
                      { name: "GitHub", icon: <SiGithub /> },
                       { name: "Python", icon: <SiPython /> },
                        { name: "REST API", icon: <FaServer /> },
                         { name: "PostgreSQL", icon: <SiPostgresql /> },
                         ];



  return (
    <div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

  <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiJavascript className="text-5xl text-yellow-400" />
    <p className="mt-3 font-semibold">JavaScript</p>
  </div>

  <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiReact className="text-5xl text-cyan-400" />
    <p className="mt-3 font-semibold">React</p>
  </div>

  <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiTypescript className="text-5xl text-blue-600" />
    <p className="mt-3 font-semibold">TypeScript</p>
  </div>

 <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiNodedotjs className="text-5xl text-green-600" />
    <p className="mt-3 font-semibold">Node.js</p>
  </div>

   <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiTypescript className="text-5xl text-blue-600" />
    <p className="mt-3 font-semibold">TypeScript</p>
  </div>

   <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiTypescript className="text-5xl text-blue-600" />
    <p className="mt-3 font-semibold">TypeScript</p>
  </div>

   <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiTypescript className="text-5xl text-blue-600" />
    <p className="mt-3 font-semibold">TypeScript</p>
  </div>

   <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiTypescript className="text-5xl text-blue-600" />
    <p className="mt-3 font-semibold">TypeScript</p>
  </div>

   <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiTypescript className="text-5xl text-blue-600" />
    <p className="mt-3 font-semibold">TypeScript</p>
  </div>

   <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiTypescript className="text-5xl text-blue-600" />
    <p className="mt-3 font-semibold">TypeScript</p>
  </div>

   <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiTypescript className="text-5xl text-blue-600" />
    <p className="mt-3 font-semibold">TypeScript</p>
  </div>

   <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiTypescript className="text-5xl text-blue-600" />
    <p className="mt-3 font-semibold">TypeScript</p>
  </div>
</div>
    </div>
  )
}

export default Skills
