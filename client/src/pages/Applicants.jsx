import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getApplicants,
  updateApplicationStatus,
} from "../services/applicationService";

const Applicants = () => {
  const { jobId } = useParams();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    try {
      const data = await getApplicants(jobId);
      setApplications(data.applications);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to load applicants");
    } finally {
      setLoading(false);
    }
  };

  const handleStatus = async (id, status) => {
    try {
      await updateApplicationStatus(id, status);
      fetchApplicants();
    } catch (error) {
      alert(error.response?.data?.message || "Update failed");
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "accepted":
        return "bg-green-100 text-green-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      case "reviewed":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-50">
        <h1 className="text-2xl font-semibold text-slate-600">
          Loading Applicants...
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
            Job Applicants
          </h1>

          <p className="text-slate-500 mt-2">
            Review applicants and manage their application status.
          </p>

        </div>

        {applications.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-md p-12 text-center">

            <div className="text-6xl mb-4">
              👥
            </div>

            <h2 className="text-2xl font-bold text-slate-700">
              No Applicants Yet
            </h2>

            <p className="text-slate-500 mt-3">
              Applicants will appear here once candidates apply.
            </p>

          </div>

        ) : (

          <div className="space-y-7">

            {applications.map((app) => (

              <div
                key={app._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8"
              >

                <div className="flex flex-col lg:flex-row justify-between gap-8">

                  {/* Applicant Info */}

                  <div className="flex-1">

                    <div className="flex flex-wrap justify-between gap-4">

                      <div>

                        <h2 className="text-3xl font-bold text-slate-800">
                          {app.applicant.fullName}
                        </h2>

                        <p className="text-indigo-600 mt-1">
                          {app.applicant.email}
                        </p>

                      </div>

                      <span
                        className={`px-5 py-2 rounded-full font-semibold h-fit ${getStatusColor(
                          app.status
                        )}`}
                      >
                        {app.status}
                      </span>

                    </div>

                    {/* Details */}

                    <div className="grid md:grid-cols-2 gap-5 mt-6">

                      <div>

                        <p className="text-sm text-slate-500">
                          Phone
                        </p>

                        <p className="font-medium">
                          {app.applicant.phone || "Not Provided"}
                        </p>

                      </div>

                      <div>

                        <p className="text-sm text-slate-500">
                          Location
                        </p>

                        <p className="font-medium">
                          {app.applicant.location || "Not Provided"}
                        </p>

                      </div>

                      <div>

                        <p className="text-sm text-slate-500">
                          Experience
                        </p>

                        <p className="font-medium">
                          {app.applicant.experience} Years
                        </p>

                      </div>

                    </div>

                    {/* Skills */}

                    <div className="mt-7">

                      <h3 className="font-semibold text-slate-700 mb-3">
                        Skills
                      </h3>

                      <div className="flex flex-wrap gap-2">

                        {app.applicant.skills?.length > 0 ? (
                          app.applicant.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))
                        ) : (
                          <span className="text-slate-500">
                            No skills listed.
                          </span>
                        )}

                      </div>

                    </div>

                    {/* Cover Letter */}

                    <div className="mt-7">

                      <h3 className="font-semibold text-slate-700 mb-3">
                        Cover Letter
                      </h3>

                      <div className="bg-slate-50 rounded-xl p-4 border">

                        <p className="text-slate-600 leading-7">
                          {app.coverLetter ||
                            "No cover letter provided."}
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Action Buttons */}

                  <div className="flex flex-col gap-3 lg:w-56">

                    {app.resume && (
                      <a
                        href={app.resume}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-center font-semibold transition"
                      >
                        View Resume
                      </a>
                    )}

                    <button
                      onClick={() =>
                        handleStatus(app._id, "Accepted")
                      }
                      className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                      Accept
                    </button>

                    <button
                      onClick={() =>
                        handleStatus(app._id, "Rejected")
                      }
                      className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                      Reject
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

export default Applicants;