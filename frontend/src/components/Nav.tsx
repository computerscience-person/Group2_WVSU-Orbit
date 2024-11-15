import { Link } from "react-router-dom";

const Nav = () => {
  return (
    /* Transparent Navbar */
    <div>
      {/* Navbar height and width */}
      <nav className="w-full h-12 px-12">
        {/* Div for Logo and Page labels */}
        <div className="h-full w-full flex justify-between items-center">
          {/* Placeholder for Logo */}
          <h1 className="font-content font-bold text-lg">LOGO</h1>
          {/* Page Labels */}
          <div className="justify-center flex space-x-4 items-center">
            <button>
              <Link className="font-content" to="/">
                Home
              </Link>
            </button>
            <button>
              <Link className="font-content" to="/about">
                About Us
              </Link>
            </button>
            <button>
              <Link className="font-content" to="/orgs">
                Organizations
              </Link>
            </button>
            <button>
              <Link className="font-content" to="/events">
                Events
              </Link>
            </button>
            <button>
              <Link className="font-content" to="/contact">
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
