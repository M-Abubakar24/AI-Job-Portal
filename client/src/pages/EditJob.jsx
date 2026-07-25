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

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    requirements: "",
    location: "",
    salary: "",
    employmentType: "Full Time",
    experienceLevel: "Entry Level",
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
        requirements: data.job.requirements || "",
        location: data.job.location || "",
        salary: data.job.salary || "",
        employmentType: data.job.employmentType || "Full Time",
        experienceLevel: data.job.experienceLevel || "Entry Level",
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
      const jobData = {
        ...formData,
        skills: formData.skills
          .split(",")
          .map((skill) => skill.trim()),
      };

      await updateJob(id, jobData);

      alert("Job updated successfully!");

      navigate("/my-jobs");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update job.");
    }
  };

  if (loading) {
    return (
      <h1 className="text-center text-2xl mt-20">
        Loading Job...
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Edit Job
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg h-32"
            required
          />

          <textarea
            name="requirements"
            placeholder="Requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg h-28"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Contract</option>
            <option>Remote</option>
          </select>

          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option>Entry Level</option>
            <option>Mid Level</option>
            <option>Senior Level</option>
          </select>

          <input
            type="text"
            name="skills"
            placeholder="React, Node.js, MongoDB"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
          >
            Update Job
          </button>

        </form>

      </div>
    </div>
  );
};

export default EditJob;