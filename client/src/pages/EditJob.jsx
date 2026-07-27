import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getJobById,
  updateJob,
} from "../services/recruiterService";

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
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

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const data = await getJobById(id);

      setFormData({
        title: data.job.title || "",
        company: data.job.company || "",
        description: data.job.description || "",
        requirements: Array.isArray(data.job.requirements)
          ? data.job.requirements.join(", ")
          : data.job.requirements || "",
        location: data.job.location || "",
        salary: data.job.salary || "",
        employmentType: data.job.employmentType || "Full-Time",
        experienceLevel: data.job.experienceLevel || "Entry",
        skills: data.job.skills
          ? data.job.skills.join(", ")
          : "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Failed to load job.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      await updateJob(id, {
        ...formData,

        requirements: formData.requirements
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        skills: formData.skills
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      });

      alert("Job updated successfully!");

      navigate("/my-jobs");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update job.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
        Loading Job...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Edit Job
          </h1>

          <p className="text-gray-500 mt-2">
            Update the job information below.
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
                value={formData.title}
                onChange={handleChange}
                placeholder="Job Title"
                className="border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />

              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="Salary"
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
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the role..."
              className="w-full border rounded-xl p-4 resize-none focus:ring-2 focus:ring-indigo-500 outline-none"
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
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Bachelor's Degree, React, Communication Skills"
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <p className="text-sm text-gray-500 mt-2">
              Separate requirements with commas.
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
              value={formData.skills}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB"
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <p className="text-sm text-gray-500 mt-2">
              Separate skills with commas.
            </p>

          </div>

          {/* Employment */}

          <div>

            <h2 className="text-xl font-semibold mb-5">
              Employment Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Internship</option>
                <option>Contract</option>
                <option>Remote</option>
              </select>

              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option>Entry</option>
                <option>Mid</option>
                <option>Senior</option>
              </select>

            </div>

          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold transition disabled:bg-gray-400"
          >
            {saving ? "Updating Job..." : "Update Job"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default EditJob;