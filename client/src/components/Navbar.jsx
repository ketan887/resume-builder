import { Link, NavLink } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resume Builder", path: "/builder" },
    { name: "Templates", path: "/templates" },
    { name: "ATS Checker", path: "/ats-checker" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <FaFileAlt />
          CareerLaunch
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/builder"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-700 transition"
          >
            Create Resume
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="p-4">
            <Link
              to="/builder"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg bg-blue-600 py-3 text-center text-white font-semibold"
            >
              Create Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;