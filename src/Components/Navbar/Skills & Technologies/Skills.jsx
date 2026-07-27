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
    <SiHtml5 className="text-5xl text-orange-600" />
    <p className="mt-3 font-semibold">HTML5</p>
  </div>

  <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiCss className="text-5xl text-blue-500" />
    <p className="mt-3 font-semibold">CSS</p>
  </div>


  <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiJavascript className="text-5xl text-yellow-400" />
    <p className="mt-3 font-semibold">JavaScript</p>
  </div>


      <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiGit className="text-5xl text-orange-600" />
    <p className="mt-3 font-semibold">Git</p>
  </div>

    <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiGithub className="text-5xl text-gray-900" />
    <p className="mt-3 font-semibold">Github</p>
  </div>

  <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiFirebase className="text-5xl text-yellow-500" />
    <p className="mt-3 font-semibold">Firebase</p>
  </div>


  <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiReact className="text-5xl text-cyan-400" />
    <p className="mt-3 font-semibold">React</p>
  </div>

  <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiRedux className="text-5xl text-purple-600" />
    <p className="mt-3 font-semibold">Redux</p>
  </div>


  <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiTypescript className="text-5xl text-blue-600" />
    <p className="mt-3 font-semibold">TypeScript</p>
  </div>

    <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiTailwindcss className="text-5xl text-cyan-500" />
    <p className="mt-3 font-semibold">Tailwind CSS</p>
  </div>


   <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiMui  className="text-5xl text-blue-500" />
    <p className="mt-3 font-semibold">Material UI</p>
  </div>

   <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiNextdotjs className="text-5xl text-black" />
    <p className="mt-3 font-semibold">Next.js</p>
  </div>


 <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiNodedotjs className="text-5xl text-green-600" />
    <p className="mt-3 font-semibold">Node.js</p>
  </div>


<div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiExpress className="text-5xl text-gray-800" />
    <p className="mt-3 font-semibold">Express</p>
  </div>


 <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <FaServer className="text-5xl text-green-600" />
    <p className="mt-3 font-semibold">REST API</p>
  </div>

   <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiMongodb className="text-5xl text-green-500" />
    <p className="mt-3 font-semibold">MongoDB</p>
  </div>

     <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiPython className="text-5xl text-blue-500" />
    <p className="mt-3 font-semibold">Python</p>
  </div>

   

  <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
    <SiPostgresql className="text-5xl text-blue-700" />
    <p className="mt-3 font-semibold">PostgreSQL</p>
  </div>

  

  </div>
</div>
  
  )
}

export default Skills
