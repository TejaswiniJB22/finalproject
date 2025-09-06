import React from "react";

const Header = () => {
  return (
    <header className="absolute top-6 left-0 w-full z-20 px-4">
      <nav className="bg-orange-400 rounded-3xl w-full max-w-[95%] mx-auto py-3">
        <ul className="flex justify-center">
          <li>
            <a
              href="#home"
              className="text-white text-lg font-medium"
            >
              Home
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
