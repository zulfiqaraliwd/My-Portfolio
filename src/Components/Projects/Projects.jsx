import React from "react";

import ecommerce from "../../assets/ecommerce.png"
import qr from "../../assets/QR code.png";
import chat from "../../assets/chatapp.png";
import typing from "../../assets/typing.webp";

function Projects() {
  return (
    <div className="pt-40">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Projects Container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img
              src={ecommerce}
              alt="Ecommerce"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold">Ecommerce Store</h2>

              <p className="text-gray-600 mt-2">
                Ecommerce Store using MUI and Redux Toolkit.
              </p>

              <button
                onClick={() =>
                  window.open(
                    "https://myecommercestore1.netlify.app/",
                    "_blank"
                  )
                }
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Project
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img
              src={qr}
              alt="MaintainX"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold">MaintainX</h2>

              <p className="text-gray-600 mt-2">
                Scan QR codes and submit complaints for products.
              </p>

              <button
                onClick={() =>
                  window.open(
                    "https://hackathonsaylani007.netlify.app/",
                    "_blank"
                  )
                }
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Project
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img
              src={chat}
              alt="Chat App"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold">Chat App</h2>

              <p className="text-gray-600 mt-2">
                Chat App using React and Firebase Authentication.
              </p>

              <button
                onClick={() =>
                  window.open("https://chat-app-57es.vercel.app/", "_blank")
                }
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Project
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img
              src={typing}
              alt="JavaScript Practice"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold">JavaScript Practice</h2>

              <p className="text-gray-600 mt-2">
                Collection of JavaScript practiced code and core concepts.
              </p>

              <button
                onClick={() =>
                  window.open(
                    "https://github.com/zulfiqaraliwd/webApp-journey-paractice-JS-",
                    "_blank"
                  )
                }
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Practice
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;