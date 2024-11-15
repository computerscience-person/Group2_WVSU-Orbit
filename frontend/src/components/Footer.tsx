import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-auto min-h-[256px] flex flex-col px-6 sm:px-12 py-6 sm:py-8 justify-center items-center">
      <div className="w-full flex-grow flex flex-col sm:flex-row justify-between items-center sm:px-16">
        <div className="flex flex-row justify-center items-center mb-4 sm:mb-0">
          <p className="font-content font-bold text-xl sm:text-2xl">LOGO</p>
          <div className="ml-4 sm:ml-6">
            <p className="font-content font-bold text-sm sm:text-base">
              WVSU Orbit
            </p>
            <p className="font-content text-xs sm:text-sm">
              Nothing is out of reach
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="flex flex-col justify-start items-start mr-0 sm:mr-8 mb-4 sm:mb-0">
            <button className="mb-2">
              <Link
                to="/"
                className="font-content text-sm sm:text-base hover:underline"
              >
                Home
              </Link>
            </button>

            <button className="mb-2">
              <Link
                to="/about"
                className="font-content text-sm sm:text-base hover:underline"
              >
                About Us
              </Link>
            </button>

            <button className="mb-2">
              <Link
                to="/orgs"
                className="font-content text-sm sm:text-base hover:underline"
              >
                Organizations
              </Link>
            </button>

            <button className="mb-2">
              <Link
                to="/events"
                className="font-content text-sm sm:text-base hover:underline"
              >
                Events
              </Link>
            </button>

            <button className="mb-2">
              <Link
                to="/contact"
                className="font-content text-sm sm:text-base hover:underline"
              >
                Contact Us
              </Link>
            </button>
          </div>

          <div className="flex flex-col sm:ml-8">
            <p className="font-content font-bold text-sm sm:text-base">
              Find us at
            </p>
            <p className="text-xs sm:text-sm">O O O</p>
          </div>
        </div>
      </div>

      <p className="font-content text-xs sm:text-sm mt-4 sm:mt-auto">
        © 2024 West Visayas State University Orbit. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
