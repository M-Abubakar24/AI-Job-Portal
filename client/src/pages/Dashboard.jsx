import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaBriefcase,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaUserCircle,
  FaSearch,
  FaFileAlt,
} from "react-icons/fa";

import { getDashboard } from "../services/dashboardService";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const data = await getDashboard();
      setDashboard(data.dashboard);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600"></div>
      </div>
    );
  }

  const cards = [
    {
      title: "ATS Score",
      value: "92%",
      icon: <FaChartLine />,
      color: "from-indigo-600 to-blue-600",
      text: "Resume Optimized",
    },
    {
      title: "Applications",
      value: dashboard.totalApplications,
      icon: <FaBriefcase />,
      color: "from-blue-500 to-cyan-500",
      text: "Jobs Applied",
    },
    {
      title: "Pending",
      value: dashboard.pending,
      icon: <FaClock />,
      color: "from-yellow-500 to-orange-500",
      text: "Awaiting Response",
    },
    {
      title: "Reviewed",
      value: dashboard.reviewed,
      icon: <FaSearch />,
      color: "from-sky-500 to-indigo-500",
      text: "Applications Reviewed",
    },
    {
      title: "Accepted",
      value: dashboard.accepted,
      icon: <FaCheckCircle />,
      color: "from-green-500 to-emerald-600",
      text: "Congratulations!",
    },
    {
      title: "Rejected",
      value: dashboard.rejected,
      icon: <FaTimesCircle />,
      color: "from-red-500 to-pink-600",
      text: "Keep Applying",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-bold text-gray-800">
              Welcome back, {user?.fullName} 👋
            </h1>

            <p className="text-gray-500 mt-2">
              Here's an overview of your job search activity.
            </p>

          </div>

          <Link
            to="/jobs"
            className="mt-6 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition"
          >
            Browse Jobs
          </Link>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {cards.map((card, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >

              <div
                className={`bg-gradient-to-r ${card.color} text-white p-5`}
              >

                <div className="flex justify-between items-center">

                  <div>

                    <p className="text-lg">
                      {card.title}
                    </p>

                    <h2 className="text-4xl font-bold mt-2">
                      {card.value}
                    </h2>

                  </div>

                  <div className="text-4xl opacity-90">
                    {card.icon}
                  </div>

                </div>

              </div>

              <div className="p-5 text-gray-600">

                {card.text}

              </div>

            </div>

          ))}

        </div>

        {/* Progress */}

        <div className="bg-white rounded-2xl shadow-md mt-10 p-8">

          <h2 className="text-2xl font-bold mb-8">
            Application Progress
          </h2>

          <div className="space-y-6">

            <div>

              <div className="flex justify-between mb-2">
                <span>Applications</span>
                <span>{dashboard.totalApplications}</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-indigo-600 h-3 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">
                <span>Reviewed</span>
                <span>{dashboard.reviewed}</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">
                <span>Accepted</span>
                <span>{dashboard.accepted}</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>

            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <Link
              to="/profile"
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
            >

              <FaUserCircle className="text-5xl mx-auto text-indigo-600" />

              <h3 className="mt-4 font-semibold text-xl">
                Profile
              </h3>

              <p className="text-gray-500 mt-2">
                Manage your personal information.
              </p>

            </Link>

            <Link
              to="/ats-analysis"
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
            >

              <FaChartLine className="text-5xl mx-auto text-green-600" />

              <h3 className="mt-4 font-semibold text-xl">
                ATS Analysis
              </h3>

              <p className="text-gray-500 mt-2">
                Improve your resume score.
              </p>

            </Link>

            <Link
              to="/jobs"
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
            >

              <FaBriefcase className="text-5xl mx-auto text-blue-600" />

              <h3 className="mt-4 font-semibold text-xl">
                Browse Jobs
              </h3>

              <p className="text-gray-500 mt-2">
                Discover new opportunities.
              </p>

            </Link>

            <Link
              to="/applications"
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
            >

              <FaFileAlt className="text-5xl mx-auto text-purple-600" />

              <h3 className="mt-4 font-semibold text-xl">
                Applications
              </h3>

              <p className="text-gray-500 mt-2">
                View your application history.
              </p>

            </Link>

          </div>

        </div>

        {/* Career Tip */}

        <div className="mt-10 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-lg text-white p-8">

          <h2 className="text-2xl font-bold">
            💡 Career Tip
          </h2>

          <p className="mt-4 text-indigo-100 leading-7">
            Candidates with ATS-friendly resumes and complete profiles
            generally receive more interview opportunities. Keep your
            profile updated and apply consistently to maximize your
            chances of success.
          </p>

          <Link
            to="/ats-analysis"
            className="inline-block mt-6 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Improve Resume
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;