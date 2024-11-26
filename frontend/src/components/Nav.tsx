import React from "react";
import { Link, useLocation } from "react-router-dom";
import blackLogo from "../assets/logos/wvsu_orbit2.png";

const Nav = () => {
  const location = useLocation();
  // Define an array of paths to check against
  const navPages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Organizations", path: "/orgs" },
    { name: "Events", path: "/events" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Helper function to check if current path matches
  const isActive = (path: string) => location.pathname === path;

  return (
    <div>
      <nav className="w-full h-12 px-12">
        <div className="h-full w-full flex justify-between items-center">
          <Link to="/">
            <img src={blackLogo} className="sm:h-6 md:h-8 lg:h-10" />
          </Link>
          <div className="justify-center flex space-x-4 items-center">
            {navPages.map((page) => (
              <button
                key={page.path}
                className={`inline-flex items-center justify-center h-8 px-4 rounded-xl ${
                  isActive(page.path) ? "bg-black" : ""
                }`}
              >
                <Link
                  className={`font-content ${
                    isActive(page.path) ? "text-white" : ""
                  }`}
                  to={page.path}
                >
                  {page.name}
                </Link>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
