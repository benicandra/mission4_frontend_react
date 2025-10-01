import React, { useState, useEffect } from "react";

const FooterAccordion = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleOpen = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="w-full">
      <h3
        className="font-bold text-gray-800 flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        {title}
        {isMobile && (
          <img
            src="/arrow.png"
            alt="Toggle"
            className={`h-5 w-5 transform transition-transform duration-200 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        )}
      </h3>

      <ul
        className={`space-y-2 overflow-hidden transition-all duration-300 ${
          isMobile
            ? isOpen
              ? "max-h-40 opacity-100"
              : "max-h-0 opacity-0"
            : "max-h-full opacity-100"
        }`}
      >
        {links.map((link, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterAccordion;
