import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaDollarSign,
} from "react-icons/fa";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      {/* Company Logo */}
      <div className="flex justify-between items-start">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-600">
            {job.company.charAt(0)}
          </div>

          <div>

            <h3 className="text-xl font-bold text-gray-800">
              {job.title}
            </h3>

            <p className="text-indigo-600 font-semibold">
              {job.company}
            </p>

          </div>

        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
          {job.type}
        </span>

      </div>

      {/* Job Details */}

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-3 text-gray-600">

          <FaMapMarkerAlt className="text-indigo-500" />

          <span>{job.location}</span>

        </div>

        <div className="flex items-center gap-3 text-gray-600">

          <FaDollarSign className="text-green-500" />

          <span>{job.salary}</span>

        </div>

        <div className="flex items-center gap-3 text-gray-600">

          <FaBriefcase className="text-orange-500" />

          <span>{job.type}</span>

        </div>

      </div>

      {/* Skills */}

      <div className="flex flex-wrap gap-2 mt-6">

        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
          React
        </span>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          Node.js
        </span>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          MongoDB
        </span>

      </div>

      {/* Button */}

      <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
        Apply Now
      </button>

    </div>
  );
};

export default JobCard;