import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import {
  MdEmail,
  MdLocationOn,
  MdPhone,
} from "react-icons/md";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Smart ATS
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Smart ATS is an AI-powered job portal that helps job
              seekers optimize resumes, discover opportunities,
              and simplify the hiring process.
            </p>

            <div className="flex gap-4 mt-6 text-2xl">

              <a href="#">
                <FaFacebook className="hover:text-indigo-400 transition" />
              </a>

              <a href="#">
                <FaLinkedin className="hover:text-indigo-400 transition" />
              </a>

              <a href="#">
                <FaGithub className="hover:text-indigo-400 transition" />
              </a>

              <a href="#">
                <FaInstagram className="hover:text-indigo-400 transition" />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>

              <li><Link to="/jobs" className="hover:text-indigo-400">Jobs</Link></li>

              <li><Link to="/login" className="hover:text-indigo-400">Login</Link></li>

              <li><Link to="/register" className="hover:text-indigo-400">Register</Link></li>

              <li><Link to="/dashboard" className="hover:text-indigo-400">Dashboard</Link></li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Resources
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/ats-analysis"
                  className="hover:text-indigo-400"
                >
                  ATS Resume Analysis
                </Link>
              </li>

              <li>
                <Link
                  to="/applications"
                  className="hover:text-indigo-400"
                >
                  My Applications
                </Link>
              </li>

              <li>
                <Link
                  to="/saved-jobs"
                  className="hover:text-indigo-400"
                >
                  Saved Jobs
                </Link>
              </li>

              <li>
                <Link
                  to="/profile"
                  className="hover:text-indigo-400"
                >
                  Profile
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3 items-center">

                <MdLocationOn className="text-indigo-400 text-xl" />

                <span>Lahore, Pakistan</span>

              </div>

              <div className="flex gap-3 items-center">

                <MdEmail className="text-indigo-400 text-xl" />

                <span>support@smartats.com</span>

              </div>

              <div className="flex gap-3 items-center">

                <MdPhone className="text-indigo-400 text-xl" />

                <span>+92 300 1234567</span>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Smart ATS. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <a href="#" className="hover:text-indigo-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-indigo-400">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;