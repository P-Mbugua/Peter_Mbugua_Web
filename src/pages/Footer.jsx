import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-8">
          {/* About Section */}
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <p className="text-3xl font-bold mb-2 text-yellow-300">Peter Mbugua</p>
            <p className="text-lg mb-4">Frontend Developer | UI/UX Enthusiast</p>
            <p className="text-base text-gray-400">
              Crafting user-centric designs and interactive experiences. Passionate about modern web technologies and creative solutions.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-8 mb-6 lg:mb-0">
            <a href="https://twitter.com/yourprofile" className="text-gray-400 hover:text-yellow-300 transition duration-300 ease-in-out">
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.685-.22.685-.49 0-.24-.008-.875-.012-1.715-2.782.602-3.37-1.338-3.37-1.338-.454-1.152-1.11-1.46-1.11-1.46-1.026-.703.078-.688.078-.688 1.135.08 1.732 1.165 1.732 1.165 1.007 1.724 2.643 1.225 3.29.93.103-.73.393-1.225.715-1.505-2.507-.285-5.14-1.257-5.14-5.59 0-1.236.442-2.245 1.166-3.035-.117-.285-.506-1.435.112-2.988 0 0 .945-.303 3.1 1.16A10.822 10.822 0 0112 6.51c.976 0 1.956.132 2.876.39 2.155-1.463 3.098-1.16 3.098-1.16.62 1.553.23 2.703.113 2.988.726.79 1.165 1.8 1.165 3.035 0 4.344-2.637 5.3-5.15 5.58.405.35.765 1.043.765 2.105 0 1.52-.013 2.745-.013 3.12 0 .27.18.583.69.483C19.138 20.166 22 16.415 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-gray-400 hover:text-yellow-300 transition duration-300 ease-in-out">
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.685-.22.685-.49 0-.24-.008-.875-.012-1.715-2.782.602-3.37-1.338-3.37-1.338-.454-1.152-1.11-1.46-1.11-1.46-1.026-.703.078-.688.078-.688 1.135.08 1.732 1.165 1.732 1.165 1.007 1.724 2.643 1.225 3.29.93.103-.73.393-1.225.715-1.505-2.507-.285-5.14-1.257-5.14-5.59 0-1.236.442-2.245 1.166-3.035-.117-.285-.506-1.435.112-2.988 0 0 .945-.303 3.1 1.16A10.822 10.822 0 0112 6.51c.976 0 1.956.132 2.876.39 2.155-1.463 3.098-1.16 3.098-1.16.62 1.553.23 2.703.113 2.988.726.79 1.165 1.8 1.165 3.035 0 4.344-2.637 5.3-5.15 5.58.405.35.765 1.043.765 2.105 0 1.52-.013 2.745-.013 3.12 0 .27.18.583.69.483C19.138 20.166 22 16.415 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="https://github.com/yourprofile" className="text-gray-400 hover:text-yellow-300 transition duration-300 ease-in-out">
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.685-.22.685-.49 0-.24-.008-.875-.012-1.715-2.782.602-3.37-1.338-3.37-1.338-.454-1.152-1.11-1.46-1.11-1.46-1.026-.703.078-.688.078-.688 1.135.08 1.732 1.165 1.732 1.165 1.007 1.724 2.643 1.225 3.29.93.103-.73.393-1.225.715-1.505-2.507-.285-5.14-1.257-5.14-5.59 0-1.236.442-2.245 1.166-3.035-.117-.285-.506-1.435.112-2.988 0 0 .945-.303 3.1 1.16A10.822 10.822 0 0112 6.51c.976 0 1.956.132 2.876.39 2.155-1.463 3.098-1.16 3.098-1.16.62 1.553.23 2.703.113 2.988.726.79 1.165 1.8 1.165 3.035 0 4.344-2.637 5.3-5.15 5.58.405.35.765 1.043.765 2.105 0 1.52-.013 2.745-.013 3.12 0 .27.18.583.69.483C19.138 20.166 22 16.415 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            <a href="/LICENSE" className="hover:underline text-yellow-300">License</a> | &copy; 2024 Peter Mbugua. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
