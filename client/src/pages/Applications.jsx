import { useEffect, useState } from "react";
import {
  getMyApplications,
  withdrawApplication,
} from "../services/applicationService";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const data = await getMyApplications();
      setApplications(data.applications);
    } catch (error) {
      console.log(error);
      alert("Failed to load applications.");
    } finally {
      setLoading(false);
    }
  };

  const handleWithdraw = async (id) => {
    const confirmWithdraw = window.confirm(
      "Are you sure you want to withdraw this application?"
    );

    if (!confirmWithdraw) return;

    try {
      await withdrawApplication(id);
      alert("Application withdrawn successfully.");
      fetchApplications();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong.");
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "accepted":
        return "bg-green-100 text-green-700";
      case "reviewed":
        return "bg-blue-100 text-blue-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-semibold text-slate-600">
          Loading Applications...
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
            My Applications
          </h1>

          <p className="text-slate-500 mt-2">
            Track and manage all your submitted job applications.
          </p>
        </div>

        {applications.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">

            <div className="text-6xl mb-4">
              📄
            </div>

            <h2 className="text-2xl font-semibold text-slate-700">
              No Applications Yet
            </h2>

            <p className="text-slate-500 mt-3">
              Once you apply for jobs, they'll appear here.
            </p>

          </div>
        ) : (
          <div className="space-y-6">

            {applications.map((application) => (

              <div
                key={application._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8"
              >

                <div className="flex flex-col lg:flex-row justify-between gap-8">

                  {/* Left */}

                  <div className="flex-1">

                    <div className="flex flex-wrap justify-between gap-3">

                      <div>

                        <h2 className="text-2xl font-bold text-slate-800">
                          {application.job.title}
                        </h2>

                        <p className="text-indigo-600 font-semibold mt-1">
                          {application.job.company}
                        </p>

                      </div>

                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                          application.status
                        )}`}
                      >
                        {application.status}
                      </span>

                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-6">

                      <div>
                        <p className="text-slate-500 text-sm">
                          Location
                        </p>

                        <p className="font-medium">
                          {application.job.location}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-500 text-sm">
                          Salary
                        </p>

                        <p className="font-medium">
                          ${application.job.salary}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-500 text-sm">
                          Employment
                        </p>

                        <p className="font-medium">
                          {application.job.employmentType}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-500 text-sm">
                          Experience
                        </p>

                        <p className="font-medium">
                          {application.job.experienceLevel}
                        </p>
                      </div>

                    </div>

                    <div className="mt-6 border-t pt-4">

                      <p className="text-sm text-slate-500">
                        Applied on{" "}
                        <span className="font-medium text-slate-700">
                          {new Date(
                            application.createdAt
                          ).toLocaleDateString()}
                        </span>
                      </p>

                    </div>

                  </div>

                  {/* Right */}

                  <div className="flex lg:flex-col justify-end">

                    <button
                      onClick={() =>
                        handleWithdraw(application._id)
                      }
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium transition"
                    >
                      Withdraw
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default Applications;