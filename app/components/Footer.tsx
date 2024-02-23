import Link from "next/link";
import Image from "next/image";
// import FooterLogo from "../assets/oh_snacker_logo.png";
// import Instagram from "../assets/instagram.png";
// import Whatsapp from "../assets/whatsapp.png";
// import Gmail from "../assets/gmail.png";
import "../globals.css";

const Footer = () => {
  return (
    <footer className="bg-gray-100 font-bold">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">{/* footer name */}</div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-400">
                Resources
              </h2>
              <ul className="text-gray-700 dark:text-white font-bold">
                <li className="mb-4">
                  <Link href="/" className=" hover:text-red-400 text-black">
                    Newly Added Books
                  </Link>
                </li>
                <li>
                  <Link href="/" className=" hover:text-red-500 text-black">
                    Research Papers
                  </Link>
                </li>

                <li className="pt-4">
                  <Link href="/" className=" hover:text-red-500 text-black">
                    E-Books
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-400">
                More
              </h2>
              <ul className="text-gray-500 dark:text-white font-bold">
                <li className="mb-4">
                  <Link href="link" className="hover:text-red-500 text-black">
                    Upcoming Books
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-red-500 text-black">
                    Upcoming E-books
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400">
                Infomation
              </h2>
              <ul className="text-gray-500 dark:text-gray-100 font-bold">
                <li className="mb-4">
                  <Link href="/about" className="hover:text-red-500 text-black">
                    About us
                  </Link>
                </li>

                <li className="mb-4">
                  <Link href="/tc" className="hover:text-red-500 text-black">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between dark:text-gray-400">
          <span className="text-sm sm:text-center ">
            © 2024{" "}
            <Link href="/" className="hover:text-red-500">
              ShelfMinder!™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
