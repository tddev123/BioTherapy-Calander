import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-blue-900 text-white fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isShrunk ? "py-1" : "py-4"
      } shadow-lg`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center text-center">
            <img className="mr-2 h-8" src=".\Images\images.jpg" alt="Logo" />
            <h1 className="text-2xl md:text-3xl font-serif tracking-wide">
              Bio<span className="HeaderMax">Therapy</span>
            </h1>
          </a>
        </div>
        <nav className="hidden md:flex font-serif space-x-12">
          <a
            href="/"
            className="text-lg hover:text-blue-300 transition duration-100"
          >
            Home
          </a>
          <a
            href="#Therapies"
            className="text-lg hover:text-blue-300 transition duration-100"
          >
            Therapies
          </a>
          <a
            href="/Doctors"
            className="text-lg hover:text-blue-300 transition duration-100"
          >
            Doctors
          </a>
          <a
            href="/TherapyPrices"
            className="text-lg hover:text-blue-300 transition duration-100"
          >
            Pricing
          </a>
        </nav>
        <div className="hidden md:flex items-center space-x-4"></div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white mr-4 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Icon for mobile menu */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-black text-white absolute top-full left-0 w-full`}
      >
        <nav className="flex flex-col items-center py-4 space-y-2">
          <a
            href="/"
            className="text-lg hover:text-blue-300 transition duration-100"
          >
            Home
          </a>
          <a
            href="#Therapies"
            className="text-lg hover:text-blue-300 transition duration-100"
          >
            Therapies
          </a>
          <a
            href="/Doctors"
            className="text-lg hover:text-blue-300 transition duration-100"
          >
            Doctors
          </a>
          <a
            href="/TherapyPrices"
            className="text-lg hover:text-blue-300 transition duration-100"
          >
            Pricing
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
