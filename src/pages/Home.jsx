import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; // Import social media icons including GitHub

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen mt-24 sm:mt-16 md:mt-12 lg:mt-8 xl:mt-6 flex flex-col items-center justify-center relative overflow-hidden px-4">
      <div className="w-full max-w-7xl">
        {/* Home Card with Moving Welcome Text */}
        <div className="relative flex flex-col items-center p-4 md:p-8 bg-white shadow-2xl rounded-xl mx-auto overflow-hidden">
          {/* Moving Welcome Text */}
          <div className="absolute top-0 left-0 right-0 p-4 md:p-6 text-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 z-10">
            <p className="text-lg md:text-3xl font-semibold animate-marquee color-changing">
              Welcome to My Page! 💖 I’m so glad you’re here! Explore and connect with me!
            </p>
          </div>

          <div className="pt-16 md:pt-24 flex flex-col md:flex-row items-center justify-center w-full">
            {/* Profile Photo Container with Dark Background */}
            <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden bg-gray-900 shadow-lg flex items-center justify-center mb-6 md:mb-0 md:mr-8">
              <img 
                src="https://p-mbugua.github.io/Official-_Portfolio/peter.png" 
                alt="Profile Photo" 
                className="w-full h-full object-cover rounded-full border-4 border-gray-800"
              />
            </div>

            {/* Description and Buttons */}
            <div className="flex flex-col items-center md:items-start w-full text-center md:text-left">
              <p className="text-sm md:text-lg mb-4 leading-relaxed text-gray-800">
                Hi, I'm Peter Mbugua, a Junior Software Engineer passionate about developing cool and user-friendly systems. 
                I thrive on working with [specific types of projects or technologies]. My background includes website development.
              </p>
              <Link to="/more-about-me" className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 mb-4 text-sm md:text-lg">
                Learn More About Me
              </Link>
              
              {/* Social Media Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <a 
                  href="https://api.whatsapp.com/send?phone=0701571745&text=Hi%2C%20my%20name%20is%20Peter%20Mbugua.%20I%20would%20like%20to%20discuss%20something%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-300"
                >
                  <FaWhatsapp className="mr-2 text-lg" />
                  WhatsApp
                </a>

                <a 
                  href="https://www.facebook.com/[YourProfile]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-white bg-blue-700 rounded-full hover:bg-blue-800 transition duration-300"
                >
                  <FaFacebook className="mr-2 text-lg" />
                  Facebook
                </a>
                <a 
                  href="https://twitter.com/[YourProfile]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-white bg-blue-400 rounded-full hover:bg-blue-500 transition duration-300"
                >
                  <FaTwitter className="mr-2 text-lg" />
                  Twitter
                </a>
                <a 
                  href="https://www.linkedin.com/in/[YourProfile]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-white bg-blue-800 rounded-full hover:bg-blue-900 transition duration-300"
                >
                  <FaLinkedin className="mr-2 text-lg" />
                  LinkedIn
                </a>
                <a 
                  href="https://www.instagram.com/[YourProfile]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-600 transition duration-300"
                >
                  <FaInstagram className="mr-2 text-lg" />
                  Instagram
                </a>
                
                {/* GitHub Button */}
                <a 
                  href="https://github.com/[YourProfile]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-900 transition duration-300"
                >
                  <FaGithub className="mr-2 text-lg" />
                  GitHub
                </a>
              </div>

              {/* View CV Button */}
              <a 
                href="https://drive.google.com/file/d/1MwyqRGN-Qr-UH_oMc7gJP7b7t8QidfsV/view" // Adjust the URL to your actual CV file path
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security measure
                className="inline-block px-6 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition duration-300 text-sm md:text-lg"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
