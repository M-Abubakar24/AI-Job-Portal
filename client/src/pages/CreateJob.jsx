import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createJob } from "../services/recruiterService";

const CreateJob = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    company: "",
    description: "",
    requirements: "",
    location: "",
    salary: "",
    employmentType: "Full-Time",
    experienceLevel: "Entry",
    skills: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createJob({
        ...form,
        requirements: form.requirements
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        skills: form.skills
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      });

      alert("Job created successfully!");

      navigate("/my-jobs");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed to create job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-800">
            Create New Job
          </h1>

          <p className="text-gray-500 mt-2">
            Fill in the job details below to publish a new vacancy.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* Basic Information */}

          <div>

            <h2 className="text-xl font-semibold mb-5">
              Basic Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="title"
                placeholder="Job Title"
                value={form.title}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />

              <input
                type="text"
                name="location"
                placeholder="Job Location"
                value={form.location}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />

              <input
                type="number"
                name="salary"
                placeholder="Annual Salary"
                value={form.salary}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />

            </div>

          </div>

          {/* Description */}

          <div>

            <h2 className="text-xl font-semibold mb-5">
              Job Description
            </h2>

            <textarea
              rows="6"
              name="description"
              placeholder="Describe the job responsibilities..."
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
              required
            />

          </div>

          {/* Requirements */}

          <div>

            <h2 className="text-xl font-semibold mb-5">
              Requirements
            </h2>

            <input
              type="text"
              name="requirements"
              placeholder="Bachelor's Degree, 2 Years Experience, Communication Skills"
              value={form.requirements}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <p className="text-sm text-gray-500 mt-2">
              Separate multiple requirements using commas.
            </p>

          </div>

          {/* Skills */}

          <div>

            <h2 className="text-xl font-semibold mb-5">
              Required Skills
            </h2>

            <input
              type="text"
              name="skills"
              placeholder="React, Node.js, MongoDB, Express"
              value={form.skills}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <p className="text-sm text-gray-500 mt-2">
              Separate multiple skills using commas.
            </p>

          </div>

          {/* Employment Details */}

          <div>

            <h2 className="text-xl font-semibold mb-5">
              Employment Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <select
                name="employmentType"
                value={form.employmentType}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>

              <select
                name="experienceLevel"
                value={form.experienceLevel}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option>Entry</option>
                <option>Mid</option>
                <option>Senior</option>
              </select>

            </div>

          </div>

          {/* Submit */}

          <div className="pt-4">

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition duration-300 disabled:bg-gray-400"
            >
              {loading ? "Publishing Job..." : "Publish Job"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default CreateJob;