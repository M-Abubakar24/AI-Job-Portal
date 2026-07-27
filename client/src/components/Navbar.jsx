import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const navLink =
    "text-gray-700 dark:text-gray-200 hover:text-indigo-600 font-medium transition";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="text-3xl font-extrabold text-indigo-600"
          >
            Smart ATS
          </Link>

          {/* Navigation */}

          <div className="hidden md:flex items-center gap-8">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navLink} ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                `${navLink} ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Jobs
            </NavLink>

            {token && user?.role === "jobseeker" && (
              <>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `${navLink} ${
                      isActive ? "text-indigo-600 font-semibold" : ""
                    }`
                  }
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/applications"
                  className={({ isActive }) =>
                    `${navLink} ${
                      isActive ? "text-indigo-600 font-semibold" : ""
                    }`
                  }
                >
                  Applications
                </NavLink>
              </>
            )}

            {token && user?.role === "recruiter" && (
              <>
                <NavLink
                  to="/recruiter/dashboard"
                  className={({ isActive }) =>
                    `${navLink} ${
                      isActive ? "text-indigo-600 font-semibold" : ""
                    }`
                  }
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/my-jobs"
                  className={({ isActive }) =>
                    `${navLink} ${
                      isActive ? "text-indigo-600 font-semibold" : ""
                    }`
                  }
                >
                  My Jobs
                </NavLink>
              </>
            )}

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <ThemeToggle />

            {!token ? (
              <>
                <Link
                  to="/login"
                  className="font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-indigo-600"
                >
                  <FaUserCircle className="text-3xl" />

                  <span className="hidden lg:block font-medium">
                    {user?.fullName}
                  </span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
                >
                  Logout
                </button>
              </>
            )}

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;