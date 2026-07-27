import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Dashboard from "./pages/Dashboard";
import ATSAnalysis from "./pages/ATSAnalysis";
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import CreateJob from "./pages/CreateJob";
import ProtectedRoute from "./components/ProtectedRoute";
import MyJobs from "./pages/MyJobs";
import Applicants from "./pages/Applicants";
import Notifications from "./pages/Notifications";
import EditJob from "./pages/EditJob";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        {/* Jobseeker Routes */}
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute role="jobseeker">
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute role="jobseeker">
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/applications"
  element={
    <ProtectedRoute role="jobseeker">
      <Applications />
    </ProtectedRoute>
  }
/>

<Route
  path="/ats-analysis"
  element={
    <ProtectedRoute role="jobseeker">
      <ATSAnalysis />
    </ProtectedRoute>
  }
/>

        {/* Recruiter Dashboard */}
       <Route
  path="/recruiter/dashboard"
  element={
    <ProtectedRoute role="recruiter">
      <RecruiterDashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/create-job"
  element={
    <ProtectedRoute role="recruiter">
      <CreateJob />
    </ProtectedRoute>
  }
/>

<Route
  path="/my-jobs"
  element={
    <ProtectedRoute role="recruiter">
      <MyJobs />
    </ProtectedRoute>
  }
/>

<Route
  path="/edit-job/:id"
  element={
    <ProtectedRoute role="recruiter">
      <EditJob />
    </ProtectedRoute>
  }
/>

<Route
  path="/applicants/:jobId"
  element={
    <ProtectedRoute role="recruiter">
      <Applicants />
    </ProtectedRoute>
  }
/>

<Route
  path="/notifications"
  element={
    <ProtectedRoute role="recruiter">
      <Notifications />
    </ProtectedRoute>
  }
/>
<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>
<Route
  path="/reset-password/:token"
  element={<ResetPassword />}
/>

{/* 404 Route */}
<Route
  path="*"
  element={
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-600">
          404
        </h1>
        <p className="mt-4 text-gray-600">
          Page Not Found
        </p>
      </div>
    </div>
  }
/>

</Routes>
</BrowserRouter>
);
}

export default App;