import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  const response = await fetch(
  "https://backend-git-main-zulfiqaraliwds-projects.vercel.app/api/contact",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }
);

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        console.log(data);

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Server error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 mt-30">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md w-full"
        >

          <h2 className="text-2xl font-bold text-center mb-6">
            Contact Form
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-5">
            <label className="block text-gray-700 mb-2">
              Message
            </label>

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>

        </form>

        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Contact Information
          </h2>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Mail className="text-blue-600" size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>

                <a
                  href="mailto:zulfiqaraliwd@gmail.com"
                  className="text-gray-800 hover:text-blue-600 transition"
                >
                  zulfiqaraliwd@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Phone className="text-green-600" size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>

                <a
                  href="tel:+923435147766"
                  className="text-gray-800 hover:text-green-600 transition"
                >
                  +92 3435147766
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <MapPin className="text-red-600" size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>

                <p className="text-gray-800">
                  Pakistan
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Form;