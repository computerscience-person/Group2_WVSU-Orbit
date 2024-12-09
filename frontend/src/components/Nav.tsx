import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import blackLogo from "../assets/logos/wvsu_orbit2.png";
import "../styles.css";

const Nav = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, [location]);

  const navPages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Organizations", path: "/orgs" },
    { name: "Events", path: "/events" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`nav-wrapper ${isVisible ? "enter" : "exit"}`}>
      <nav className="w-full h-32 px-12 pb-16">
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
