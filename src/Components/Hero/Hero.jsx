import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { gsap } from "gsap";
import { TypeAnimation } from "react-type-animation";

import firstImage from "../../assets/nnnnnnnnnnnnn.jpeg";
import secondImage from "../../assets/sssssssssssssss.jpeg";

function Hero() {
  const imgRef = useRef(null);

  const [image, setImage] = useState(firstImage);

  const handleMouseEnter = () => {
    gsap.to(imgRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      onComplete: () => {
        setImage(secondImage);

        gsap.fromTo(
          imgRef.current,
          {
            opacity: 0,
            scale: 1.1,
            rotate: -5,
          },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.5,
            ease: "power3.out",
          }
        );
      },
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      onComplete: () => {
        setImage(firstImage);

        gsap.fromTo(
          imgRef.current,
          {
            opacity: 0,
            scale: 1.1,
            rotate: 5,
          },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.5,
            ease: "power3.out",
          }
        );
      },
    });
  };



  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8">

          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">

            <h3 className="text-xl sm:text-2xl text-gray-600 mb-3">
              Hi, I'm
            </h3>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Zulfiqar Ali
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "MERN Stack Developer",
                  1500,
                  "React.js Developer",
                  1500,
                  "Next.js Developer",
                  1500,
                ]}
                speed={60}
                repeat={Infinity}
                cursor={true}
              />
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 mb-8 max-w-xl mx-auto md:mx-0">
              I build modern, responsive and scalable web applications
              using React, Next.js, Node.js, Express.js and MongoDB.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-5">

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get In Touch
              </button>

              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                View Projects
              </button>

            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex justify-center">

            <img
              ref={imgRef}
              src={image}
              alt="Zulfiqar Ali"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="
                w-64 h-64
                sm:w-72 sm:h-72
                md:w-80 md:h-80
                lg:w-96 lg:h-96
                rounded-xl
                object-cover
                shadow-[0_0_40px_rgba(59,130,246,0.7)]
                cursor-pointer
                transition-all
                duration-300
              "
            />

          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-7 sm:gap-10 mt-10 text-2xl">

          <FaGithub className="cursor-pointer hover:text-gray-500 transition" />

          <FaLinkedin className="cursor-pointer hover:text-blue-500 transition" />

          <MdEmail className="cursor-pointer hover:text-red-500 transition" />

          <FaWhatsapp className="cursor-pointer hover:text-green-500 transition" />

        </div>

      </section>
    </div>
  );
}

export default Hero;