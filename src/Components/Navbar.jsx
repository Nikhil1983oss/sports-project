import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun, FaHome, FaUserAlt, FaChartBar } from "react-icons/fa";

const Navbar = () => {
  const [dark, setDark] = useState(true);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setDark(saved !== "light");
  }, []);

  // Apply theme
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-red-500 px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold text-red-500">
        Cricket Analytics
      </h1>

      <div className="flex gap-6 text-gray-700 dark:text-gray-300">
        <NavLink to="/" className="flex gap-2 hover:text-yellow-400">
          <FaHome /> Home
        </NavLink>

        <NavLink to="/" className="flex gap-2 hover:text-yellow-400">
          <FaUserAlt /> Players
        </NavLink>

        <NavLink to="/stats" className="flex gap-2 hover:text-yellow-400">
          <FaChartBar /> Stats
        </NavLink>
      </div>

      <button
        onClick={() => setDark(!dark)}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
      >
        {dark ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;