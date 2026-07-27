import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  const [image, setImage] = useState("/src/assets/normal1.jpeg");

  // Image Hover Animation
  const handleMouseEnter = () => {
    gsap.to(imgRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      onComplete: () => {
        setImage("/src/assets/smile11.jpeg");

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
        setImage("/src/assets/normal1.jpeg");

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

  <h2 className="text-3xl font-bold text-blue-600 mb-6">
  <TypeAnimation
    sequence={[
      "Full Stack Developer", 1500,
      "MERN Stack Developer", 1500,
      "React.js Developer", 1500,
      "Next.js Developer", 1500,
      "CEO and Founder of Solve 10x",2000
    ]}
    speed={60}
    repeat={Infinity}
    cursor={true}
  />
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
              ref={imgRef}
              src={image}
              alt="Zulfiqar Ali"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="w-96 h-96 rounded-xl object-cover shadow-[0_0_40px_rgba(59,130,246,0.7)] cursor-pointer transition-all duration-300"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-10 mt-10 text-2xl">
          <FaGithub className="cursor-pointer hover:text-gray-500" />
          <FaLinkedin className="cursor-pointer hover:text-blue-500" />
          <MdEmail className="cursor-pointer hover:text-red-500" />
          <FaWhatsapp className="cursor-pointer hover:text-green-500" />
        </div>
      </section>
    </div>
  );
}

export default Hero;