import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecruiterDashboard } from "../services/recruiterService";

const RecruiterDashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const data = await getRecruiterDashboard();
      setDashboard(data.dashboard);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    {
      title: "Jobs Posted",
      value: dashboard?.totalJobs,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      icon: "💼",
    },
    {
      title: "Applications",
      value: dashboard?.totalApplications,
      color: "text-blue-600",
      bg: "bg-blue-100",
      icon: "📄",
    },
    {
      title: "Pending",
      value: dashboard?.pending,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      icon: "⏳",
    },
    {
      title: "Reviewed",
      value: dashboard?.reviewed,
      color: "text-purple-600",
      bg: "bg-purple-100",
      icon: "👀",
    },
    {
      title: "Accepted",
      value: dashboard?.accepted,
      color: "text-green-600",
      bg: "bg-green-100",
      icon: "✅",
    },
    {
      title: "Rejected",
      value: dashboard?.rejected,
      color: "text-red-600",
      bg: "bg-red-100",
      icon: "❌",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-semibold text-slate-600">
          Loading Dashboard...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-slate-800">
            Recruiter Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Monitor job postings, manage applicants, and track recruitment
            progress from one place.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6"
            >

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${stat.bg}`}
              >
                {stat.icon}
              </div>

              <p className="text-slate-500 mt-5 text-sm">
                {stat.title}
              </p>

              <h2 className={`text-4xl font-bold mt-2 ${stat.color}`}>
                {stat.value}
              </h2>

            </div>

          ))}

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-2xl shadow-md mt-10 p-8">

          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Quick Actions
          </h2>

          <p className="text-slate-500 mb-8">
            Access your most frequently used recruiter tools.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <Link
              to="/create-job"
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl p-6 text-center transition duration-300"
            >
              <div className="text-3xl mb-3">➕</div>

              <h3 className="text-lg font-semibold">
                Create Job
              </h3>

              <p className="text-sm text-indigo-100 mt-2">
                Publish a new job opening.
              </p>
            </Link>

            <Link
              to="/my-jobs"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-6 text-center transition duration-300"
            >
              <div className="text-3xl mb-3">📋</div>

              <h3 className="text-lg font-semibold">
                My Jobs
              </h3>

              <p className="text-sm text-blue-100 mt-2">
                View and manage posted jobs.
              </p>
            </Link>

            <Link
              to="/profile"
              className="bg-green-600 hover:bg-green-700 text-white rounded-xl p-6 text-center transition duration-300"
            >
              <div className="text-3xl mb-3">👤</div>

              <h3 className="text-lg font-semibold">
                Profile
              </h3>

              <p className="text-sm text-green-100 mt-2">
                Update recruiter information.
              </p>
            </Link>

            <Link
              to="/jobs"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl p-6 text-center transition duration-300"
            >
              <div className="text-3xl mb-3">🌐</div>

              <h3 className="text-lg font-semibold">
                Browse Jobs
              </h3>

              <p className="text-sm text-purple-100 mt-2">
                View all available job listings.
              </p>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
};

export default RecruiterDashboard;