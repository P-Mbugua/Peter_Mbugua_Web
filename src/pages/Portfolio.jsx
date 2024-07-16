import React, { useState } from 'react';

export default function Portfolio() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">Peter Mbugua</h1>
          <p className="mt-2 text-lg md:text-2xl">Full Stack Developer & UI/UX Enthusiast</p>
        </div>
      </header>

      {/* Projects Overview Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Project Highlights</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            I have worked on a variety of projects that showcase my skills in web development and design. Below are some highlights that demonstrate my expertise in creating innovative and user-centric solutions.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Project One",
                description: "A dynamic web application built with React and Node.js, offering real-time data updates and a seamless user interface.",
                link: "https://example.com/project-one",
                imgSrc: "https://via.placeholder.com/500x300"
              },
              {
                title: "Project Two",
                description: "An e-commerce platform featuring custom backend and frontend with advanced authentication and payment integration.",
                link: "https://example.com/project-two",
                imgSrc: "https://via.placeholder.com/500x300"
              },
              {
                title: "Project Three",
                description: "A mobile-friendly application with responsive design and enhanced user accessibility, designed for collaborative use.",
                link: "https://example.com/project-three",
                imgSrc: "https://via.placeholder.com/500x300"
              },
              {
                title: "Project Four",
                description: "A real-time chat application utilizing WebSocket technology for instant messaging, ensuring a smooth user experience.",
                link: "https://example.com/project-four",
                imgSrc: "https://via.placeholder.com/500x300"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="relative bg-gray-200 p-6 rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-48 md:h-64 object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-center text-white p-6">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-xs md:text-sm mb-6">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm md:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            I’d love to hear from you! Whether you have a question about my work, a potential collaboration, or just want to connect, feel free to reach out using the form below.
          </p>
          <button
            onClick={() => setShowContactForm(true)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-lg md:text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
          >
            Open Contact Form
          </button>
          {showContactForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
              <div className="bg-white p-6 md:p-10 rounded-lg shadow-2xl relative w-full max-w-md md:max-w-lg mx-4 transition-transform transform scale-100 hover:scale-105">
                {/* Close Button */}
                <button
                  onClick={() => setShowContactForm(false)}
                  className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900">Get in Touch</h3>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm md:text-base font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Your Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm md:text-base font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      required
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Your Message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
