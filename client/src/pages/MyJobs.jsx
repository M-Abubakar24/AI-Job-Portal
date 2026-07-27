import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyJobs, deleteJob } from "../services/recruiterService";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getMyJobs();
      setJobs(data.jobs);
    } catch (error) {
      console.log(error);
      alert("Failed to load your jobs.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (jobId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    try {
      await deleteJob(jobId);
      alert("Job deleted successfully.");
      fetchJobs();
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-50">
        <h1 className="text-2xl font-semibold text-slate-600">
          Loading Jobs...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">

          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              My Jobs
            </h1>

            <p className="text-slate-500 mt-2">
              Manage all your posted job openings from one place.
            </p>
          </div>

          <Link
            to="/create-job"
            className="mt-5 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            + Create Job
          </Link>

        </div>

        {jobs.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">

            <div className="text-6xl mb-4">
              💼
            </div>

            <h2 className="text-2xl font-bold text-slate-700">
              No Jobs Posted Yet
            </h2>

            <p className="text-slate-500 mt-3">
              Start hiring by creating your first job posting.
            </p>

            <Link
              to="/create-job"
              className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition"
            >
              Create Your First Job
            </Link>

          </div>
        ) : (
          <div className="grid gap-7">

            {jobs.map((job) => (

              <div
                key={job._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8"
              >

                <div className="flex flex-col lg:flex-row justify-between gap-8">

                  {/* Left */}

                  <div className="flex-1">

                    <h2 className="text-3xl font-bold text-slate-800">
                      {job.title}
                    </h2>

                    <p className="text-indigo-600 font-semibold mt-2">
                      {job.company}
                    </p>

                    <div className="grid md:grid-cols-2 gap-5 mt-6">

                      <div>
                        <p className="text-sm text-slate-500">
                          Location
                        </p>

                        <p className="font-semibold">
                          {job.location}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">
                          Salary
                        </p>

                        <p className="font-semibold">
                          ${job.salary}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">
                          Employment
                        </p>

                        <p className="font-semibold">
                          {job.employmentType}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">
                          Posted
                        </p>

                        <p className="font-semibold">
                          {new Date(job.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Right */}

                  <div className="flex flex-col gap-3 w-full lg:w-56">

                    <Link
                      to={`/applicants/${job._id}`}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-center font-semibold transition"
                    >
                      View Applicants
                    </Link>

                    <Link
                      to={`/edit-job/${job._id}`}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl text-center font-semibold transition"
                    >
                      Edit Job
                    </Link>

                    <button
                      onClick={() => handleDelete(job._id)}
                      className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                      Delete Job
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

export default MyJobs;