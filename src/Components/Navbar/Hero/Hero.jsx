import React from 'react'

function Hero() {
  return (
    <div>
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex justify-between items-center">
          {/* Left Side */}
          <div className="w-1/2">
            <h3 className="text-2xl text-gray-600 mb-3">
              Hi, I'm
            </h3>

            <h1 className="text-6xl font-bold mb-4">
              Zulfiqar Ali
            </h1>

            <h2 className="text-3xl font-semibold text-blue-600 mb-6">
              Full Stack Developer
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              I build modern, responsive and scalable web applications
              using React, Next.js, Node.js, Express.js and MongoDB.
            </p>

            <div className="flex gap-5">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get In Touch
              </button>

              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                View Projects
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 flex justify-center">
            <img
            src="/src/assets/my pic.jpeg"
              alt="Zulfiqar Ali"
              className="w-96 h-96 object-cover rounded-full shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
