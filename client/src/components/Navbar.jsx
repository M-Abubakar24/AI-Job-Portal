import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-indigo-600"
        >
          Smart ATS
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition"
          >
            Home
          </Link>

          <Link
            to="/jobs"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition"
          >
            Jobs
          </Link>

          <Link
            to="/login"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Register
          </Link>

          {/* Dark / Light Toggle */}
          <ThemeToggle />

        </div>

      </div>
    </nav>
  );
};

export default Navbar;