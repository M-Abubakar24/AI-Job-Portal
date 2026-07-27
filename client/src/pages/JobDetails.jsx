import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaBriefcase,
  FaStar,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

import { getJobById } from "../services/jobService";
import { applyJob } from "../services/applicationService";

const JobDetails = () => {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const data = await getJobById(id);
      setJob(data.job);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async () => {
    try {
      setApplying(true);

      await applyJob(job._id);

      alert("Application submitted successfully!");

    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Application failed"
      );
    } finally {
      setApplying(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold">
          Job Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-6xl mx-auto px-6">

        {/* Hero */}

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl shadow-xl text-white p-10">

          <div className="flex flex-col md:flex-row justify-between items-center">

            <div>

              <h1 className="text-5xl font-bold">
                {job.title}
              </h1>

              <div className="flex items-center gap-3 mt-4 text-lg">

                <FaBuilding />

                {job.company}

              </div>

            </div>

            <div className="w-24 h-24 rounded-full bg-white text-indigo-600 flex items-center justify-center text-5xl font-bold mt-8 md:mt-0">

              {job.company?.charAt(0)}

            </div>

          </div>

        </div>

        {/* Main */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Left */}

          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-2xl shadow-md p-8">

              <h2 className="text-2xl font-bold mb-6">
                Job Overview
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="flex gap-3 items-center">

                  <FaMapMarkerAlt className="text-red-500 text-xl" />

                  <div>

                    <p className="text-gray-500">
                      Location
                    </p>

                    <p className="font-semibold">
                      {job.location}
                    </p>

                  </div>

                </div>

                <div className="flex gap-3 items-center">

                  <FaDollarSign className="text-green-600 text-xl" />

                  <div>

                    <p className="text-gray-500">
                      Salary
                    </p>

                    <p className="font-semibold">
                      ${job.salary}
                    </p>

                  </div>

                </div>

                <div className="flex gap-3 items-center">

                  <FaBriefcase className="text-blue-600 text-xl" />

                  <div>

                    <p className="text-gray-500">
                      Employment
                    </p>

                    <p className="font-semibold">
                      {job.employmentType}
                    </p>

                  </div>

                </div>

                <div className="flex gap-3 items-center">

                  <FaStar className="text-yellow-500 text-xl" />

                  <div>

                    <p className="text-gray-500">
                      Experience
                    </p>

                    <p className="font-semibold">
                      {job.experienceLevel}
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Description */}

            <div className="bg-white rounded-2xl shadow-md p-8">

              <h2 className="text-2xl font-bold mb-5">
                Job Description
              </h2>

              <p className="text-gray-600 leading-8">
                {job.description}
              </p>

            </div>

            {/* Requirements */}

            <div className="bg-white rounded-2xl shadow-md p-8">

              <h2 className="text-2xl font-bold mb-6">
                Requirements
              </h2>

              <div className="space-y-4">

                {job.requirements?.map((req, index) => (

                  <div
                    key={index}
                    className="flex gap-3 items-start"
                  >

                    <FaCheckCircle className="text-green-500 mt-1" />

                    <p>{req}</p>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="bg-white rounded-2xl shadow-md p-8 sticky top-10">

              <h2 className="text-2xl font-bold">
                Required Skills
              </h2>

              <div className="flex flex-wrap gap-3 mt-6">

                {job.skills?.map((skill, index) => (

                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium"
                  >
                    {skill}
                  </span>

                ))}

              </div>

              <button
                onClick={handleApply}
                disabled={applying}
                className="w-full mt-10 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold transition disabled:bg-gray-400"
              >

                {applying
                  ? "Applying..."
                  : "Apply Now"}

              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Your application will be sent directly to the recruiter.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default JobDetails;