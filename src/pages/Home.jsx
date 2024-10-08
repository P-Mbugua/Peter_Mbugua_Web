import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; // Import social media icons including GitHub
import { FcAbout } from 'react-icons/fc';


export default function Home() {
  return (
    <div className="bg-gray-100 pt-2  mt-24  sm:mt-16 md:mt-12 lg:mt-8 xl:mt-20 flex flex-col items-center justify-center relative overflow-hidden px-4">
      <div className="w-full max-w-7xl">
        {/* Home Card with Moving Welcome Text */}
        <div className="relative flex flex-col items-center  p-2 md:p-4 lg:p-6 xl:p-8 bg-white shadow-2xl rounded-xl mx-auto overflow-hidden animate-fall-in">
          {/* Moving Welcome Text */}
          <div className="absolute top-0 left-0 right-0 p-0 md:p-2 lg:p-4 text-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 z-10 animate-fall-in">
            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold animate-marquee color-changing">
              Welcome to My Page! 💖 I’m so glad you’re here! Explore and connect with me!
            </p>
          </div>

          <div className="pt-8 md:pt-12 lg:pt-16 xl:pt-24 flex flex-col md:flex-row items-center justify-center w-full">
            {/* Profile Photo Container with Dark Background */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full overflow-hidden bg-gray-900 shadow-lg flex items-center justify-center mb-4 md:mb-6 lg:mb-8 xl:mb-0 md:mr-4 lg:mr-6 xl:mr-8 animate-fall-in">
              <img 
                src="https://p-mbugua.github.io/Official-_Portfolio/peter.png" 
                alt="Profile Photo" 
                className="w-full h-full object-cover rounded-full border-4 border-gray-800"
              />
            </div>

            {/* Description and Buttons */}
            <div className="flex flex-col items-center md:items-start w-full text-center md:text-left">
            <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-4 md:mb-6 lg:mb-8 leading-relaxed text-gray-800 animate-fade-in">
                Hello there, I'm Peter Mbugua, a Junior Software Engineer passionate about crafting innovative and
                 user-friendly systems. With expertise in Full Stack Development, Software Applications, 
                 Website Development, and Graphic Design, I thrive on creating seamless digital experiences 
                 that marry functionality with aesthetics. Let's collaborate and build something amazing
                 together!
            </p>

            <Link
                to="/more-about-me"
                className="inline-block px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 text-xs md:text-sm lg:text-base xl:text-lg animate-fall-in"
                style={{ textDecoration: 'none' }} // Ensure the link text decoration is removed
                 >
                Learn More About Me
            </Link>

              
              {/* Social Media Section */}
              <div className="w-full text-center pt-10 mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gradient mb-2 animate-fall-in">
                  Connect with me on my social accounts
                </h2>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-4 md:mb-6 lg:mb-8 xl:mb-10 animate-fade-in">
                  Explore my coding techniques as a Junior Developer and stay updated on my latest projects. Let's
                   collaborate and innovate together!
                </p>


                {/* Social Media Buttons */}
                <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
                  <a 
                    href="https://api.whatsapp.com/send?phone=+254701571745&text=Hi%2C%20my%20name%20is%20Peter%20Mbugua.%20I%20would%20like%20to%20discuss%20something%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-300 animate-fall-in"
                  >
                    <FaWhatsapp className="mr-2 text-lg" />
                    WhatsApp
                  </a>

                  <a 
                    href="https://www.fb.com/l/6lp1kJRRR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-white bg-blue-700 rounded-full hover:bg-blue-800 transition duration-300 animate-fall-in"
                  >
                    <FaFacebook className="mr-2 text-lg" />
                    Facebook
                  </a>
                  <a 
                    href="https://twitter.com/pmbugua276"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-white bg-blue-400 rounded-full hover:bg-blue-500 transition duration-300 animate-fall-in"
                  >
                    <FaTwitter className="mr-2 text-lg" />
                    Twitter
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/peter-mbugua-a6351a262"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-white bg-blue-800 rounded-full hover:bg-blue-900 transition duration-300 animate-fall-in"
                  >
                    <FaLinkedin className="mr-2 text-lg" />
                    LinkedIn
                  </a>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-600 transition duration-300 animate-fall-in"
                  >
                    <FaInstagram className="mr-2 text-lg" />
                    Instagram
                  </a>
                  
                  {/* GitHub Button */}
                  <a 
                    href="https://github.com/P-Mbugua"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-900 transition duration-300 animate-fall-in"
                  >
                    <FaGithub className="mr-2 text-lg" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* View CV Button */}
              <a 
                href="/src/assets/PETER_MBUGUA_NGUMI_CURRICULUM%20_VITAE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 text-xs md:text-sm lg:text-base xl:text-lg animate-fall-in"
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
