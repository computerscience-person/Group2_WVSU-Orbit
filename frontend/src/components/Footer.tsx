import { Link } from "react-router-dom";
import blackLogo from "../assets/logos/wvsu_orbit2.png";
const navPages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Organizations", path: "/orgs" },
  { name: "Events", path: "/events" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {
  return (
    <div className="h-auto min-h-[256px] flex flex-col px-6 sm:px-12 py-6 sm:py-8 justify-center items-center">
      <div className="w-full flex-grow flex flex-col sm:flex-row justify-between items-center sm:px-16">
        <div className="flex flex-row justify-center items-center mb-4 sm:mb-0">
          <Link to="/">
            <img src={blackLogo} className="sm:h-14 md:h-16 lg:h-20" />
          </Link>
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
            {navPages.map((page) => (
              <button className="mb-2">
                <Link
                  to={page.path}
                  className="font-content text-sm sm:text-base hover:underline"
                >
                  {page.name}
                </Link>
              </button>
            ))}
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
