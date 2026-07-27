import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaDollarSign,
  FaStar,
  FaBuilding,
} from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, [keyword]);

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const data = await getJobs(keyword);

      setJobs(data.jobs);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero */}

      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Find Your Next Opportunity
          </h1>

          <p className="mt-4 text-indigo-100 text-lg">
            Browse thousands of jobs from trusted companies.
          </p>

          <div className="mt-8 relative">

            <FaSearch className="absolute left-5 top-4 text-gray-500" />

            <input
              type="text"
              placeholder="Search jobs, companies, skills..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full pl-14 pr-5 py-4 rounded-xl text-gray-700 outline-none shadow-lg"
            />

          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Available Jobs
          </h2>

          <p className="text-gray-600">
            {jobs.length} Jobs Found
          </p>

        </div>

        {loading ? (

          <div className="flex justify-center py-24">

            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600"></div>

          </div>

        ) : jobs.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">

            <h2 className="text-3xl font-bold">
              📭 No Jobs Found
            </h2>

            <p className="text-gray-500 mt-4">
              Try another keyword or check back later.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {jobs.map((job) => (

              <div
                key={job._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >

                <div className="bg-indigo-600 text-white p-6">

                  <div className="flex justify-between items-center">

                    <div>

                      <h2 className="text-2xl font-bold">
                        {job.title}
                      </h2>

                      <p className="mt-2 flex items-center gap-2">

                        <FaBuilding />

                        {job.company}

                      </p>

                    </div>

                    <div className="w-14 h-14 rounded-full bg-white text-indigo-600 flex items-center justify-center text-2xl font-bold">

                      {job.company?.charAt(0)}

                    </div>

                  </div>

                </div>

                <div className="p-6">

                  <div className="space-y-3 text-gray-700">

                    <p className="flex items-center gap-2">

                      <FaMapMarkerAlt className="text-red-500" />

                      {job.location}

                    </p>

                    <p className="flex items-center gap-2">

                      <FaDollarSign className="text-green-600" />

                      ${job.salary}

                    </p>

                    <p className="flex items-center gap-2">

                      <FaBriefcase className="text-blue-600" />

                      {job.employmentType}

                    </p>

                    <p className="flex items-center gap-2">

                      <FaStar className="text-yellow-500" />

                      {job.experienceLevel}

                    </p>

                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">

                    {job.skills?.map((skill, index) => (

                      <span
                        key={index}
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                  <button
                    onClick={() => navigate(`/jobs/${job._id}`)}
                    className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition font-semibold"
                  >
                    View Details
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Jobs;