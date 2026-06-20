"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Gallery",
    "Testimonials",
    "Contact",
  ];

  const scrollToAppointment = () => {
    const section = document.getElementById("appointment");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  // Hide / Show Navbar on Scroll
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > 100
      ) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  // Lock Body Scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white/80 backdrop-blur-xl border-b border-slate-100`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-bold text-blue-900"
          >
            DentaCare
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="
                  relative
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:text-cyan-500

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-cyan-500
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <button
              onClick={scrollToAppointment}
              className="
                bg-blue-900
                text-white
                px-8
                py-3
                rounded-full
                font-medium
                hover:scale-105
                hover:bg-blue-800
                transition-all
                duration-300
              "
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-slate-100 px-6 py-6">

          <div className="flex flex-col">

            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="
                  py-4
                  text-lg
                  font-medium
                  text-slate-700
                  border-b
                  border-slate-100
                  hover:text-cyan-500
                  active:text-cyan-500
                  active:scale-95
                  transition-all
                "
              >
                {link}
              </a>
            ))}

            {/* Mobile Appointment Button */}
            <button
              onClick={scrollToAppointment}
              className="
                mt-6
                bg-blue-900
                text-white
                py-4
                rounded-full
                font-medium
                hover:bg-blue-800
                active:scale-95
                transition-all
              "
            >
              Book Appointment
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;