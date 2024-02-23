"use client";
import React, { useState } from "react";
import Link from "next/link";


const Header = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 font-bold text-2xl text-center pb-2 sm:pb-0 text-blackish text-black pl-[-2rem]">
                <Link href="/">
                  <img
                    src="/assets/logo.png"
                    alt="logo"
                    className="h-34 sm:h-45 md:h-50 lg:h-55 xl:h-55 w-48"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-black hover:text-gray-500 font-bold rounded-lg p-2"
                >
                  Home
                </Link>
                <Link
                  href="/book"
                  className="text-black hover:text-gray-500 font-bold rounded-lg p-2"
                >
                  Books
                </Link>
                <Link
                  href="/about"
                  className="text-black hover:text-gray-500 font-bold rounded-lg p-2"
                >
                  About
                </Link>{" "}
                <Link
                  href="/contact"
                  className="text-black hover:text-gray-500 font-bold rounded-lg p-2"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-black   hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div>
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-0 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="text-black block hover:text-gray-400 font-bold rounded-lg p-2"
                >
                  Home
                </a>
                <a
                  href="/book"
                  className="text-black block hover:text-gray-400 font-bold rounded-lg p-2"
                >
                  Books
                </a>
                <a
                  href="/about"
                  className="text-black block hover:text-gray-400 font-bold rounded-lg p-2"
                >
                  About
                </a>{" "}
                <a
                  href="/contact"
                  className="text-black block hover:text-gray-400 font-bold rounded-lg p-2"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
