import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/assets/bg.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Welcome to Our Library
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8">
            Discover and contribute to our vast collection of books
          </p>
          <div className="flex justify-center space-x-4 ">
            <Link href="/book">
              <button className="text-black bg-gray-300 hover:bg-gray-600 font-semibold py-2 px-4 rounded-lg">
                Explore Books
              </button>
            </Link>
            <Link href="/admin">
              <button className="bg-gray-300 hover:bg-gray-500 text-black font-semibold py-2 px-4 rounded-lg">
                Admin Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero