import React, { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onclick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between w-full h-24 bg-gray-900 px-16 items-center">
        <div className="text-white font-bold">LOGO</div>
        <div className="hidden lg:flex flex-row space-x-10 text-sm">
          <div className="text-white">
            <a href="/" className="cursor-pointer">
              {" "}
              Features
            </a>
          </div>
          <div className="text-white">
            <a href="/" className="cursor-pointer">
              {" "}
              Pricing
            </a>
          </div>
          <div className="text-white">
            <a href="/" className="cursor-pointer">
              {" "}
              Team
            </a>
          </div>
        </div>
        <div className="hidden lg:flex bg-emerald-600 text-white h-12 w-24 items-center place-content-center rounded-md hover:bg-emerald-700 shadow-md">
          Sign up
        </div>
        <button
          className="flex lg:hidden text-white hover:text-emerald-600"
          onClick={onclick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="py-4 px-6 bg-gray-900">
          <ul className="space-y-3 text-white">
            <li>
              <a className="hover:text-emerald-600" href="/">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-600" href="/">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-600" href="/">
                Team
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-600" href="/">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
