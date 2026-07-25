import API from "../api/axios";

// Recruiter Dashboard
export const getRecruiterDashboard = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/dashboard/recruiter", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Get My Jobs
export const getMyJobs = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/jobs/my", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Delete Job
export const deleteJob = async (jobId) => {
  const token = localStorage.getItem("token");

  const response = await API.delete(`/jobs/${jobId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
export const createJob = async (jobData) => {
  const token = localStorage.getItem("token");

  const response = await API.post("/jobs", jobData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
export const getJobById = async (id) => {
  const response = await API.get(`/jobs/${id}`);
  return response.data;
};

export const updateJob = async (id, jobData) => {
  const token = localStorage.getItem("token");

  const response = await API.put(
    `/jobs/${id}`,
    jobData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};