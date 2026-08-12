import React from 'react'
import { FaBookOpen } from "react-icons/fa";


function About() {
  return (
 <div className="max-w-6xl mx-auto py-16 px-6">

  {/* Heading */}
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold">About Me</h1>
    <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Who I Am Card */}
    <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Who I Am
      </h2>

      <p className="text-gray-600 leading-7">
        I am a passionate Full Stack Developer with experience in
        React, Next.js, Node.js, Express.js and MongoDB. I enjoy
        building modern, responsive and user-friendly web applications.
      </p>
    </div>

    {/* Education Card */}
    <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">

<h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-4">
  <FaBookOpen className='font-bold text-blue-400' />
  Education
</h2>

      <p className="text-gray-600 leading-7">
         Sindh Madressatul Islam University <br />
        BS Computer Science <br />
       2022-2026
      </p>

      <p className="text-gray-600 mt-4 leading-7">
        💻 Web & Mobile Application Development <br />
        SMIT (Saylani Mass IT Training)
      </p>
    </div>

  </div>

</div>
  )
}

export default About
