import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pl-4 text-white py-8 w-full  relative  bottom-0 left-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="ml-4">
          <div className="text-3xl font-serif flex items-center tracking-wide mb-4">
            <img
              className="mr-2 w-8 h-8"
              src=".\Images\images.jpg"
              alt="NeuroMax Logo"
            />
            <h1>
              Bio<span className="text-blue-700">Therapy</span>
            </h1>
          </div>
          <p className="text-gray-400">
            At Biotherapy, we offer the latest biomedical technology to keep you
            healthy and in top shape!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <nav className="flex flex-col space-y-2">
            <a href="/" className="hover:text-gray-300 transition duration-300">
              Home
            </a>
            <a
              href="#about"
              className="hover:text-gray-300 transition duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-gray-300 transition duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition duration-300"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400">Email: support@BioTherapy.com</p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <img
                src="./Images/icons8-facebook-48.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <img
                src=".\Images\icons8-x-48 (1).png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <img
                src=".\Images\icons8-instagram-48.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500">
        &copy; 2024 BioTherapy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
