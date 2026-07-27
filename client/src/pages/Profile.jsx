import { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUserTag,
  FaFilePdf,
  FaUpload,
} from "react-icons/fa";

import {
  getProfile,
  uploadResume,
} from "../services/authService";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [resume, setResume] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = async () => {
    if (!resume) {
      alert("Please select a PDF file.");
      return;
    }

    try {
      setUploading(true);

      await uploadResume(resume);

      alert("Resume uploaded successfully!");

      fetchProfile();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Upload failed"
      );
    } finally {
      setUploading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl shadow-xl p-10 text-white">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="w-32 h-32 rounded-full bg-white text-indigo-600 flex items-center justify-center text-7xl">

              <FaUserCircle />

            </div>

            <div>

              <h1 className="text-4xl font-bold">
                {user.fullName}
              </h1>

              <p className="text-indigo-100 mt-2 text-lg">
                {user.role}
              </p>

              <p className="mt-4">
                Welcome to your Smart ATS profile.
              </p>

            </div>

          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Left */}

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-2xl font-bold mb-8">
              Personal Information
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <FaEnvelope className="text-indigo-600 text-xl" />

                <div>

                  <p className="text-gray-500">
                    Email
                  </p>

                  <p className="font-semibold">
                    {user.email}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <FaPhone className="text-green-600 text-xl" />

                <div>

                  <p className="text-gray-500">
                    Phone
                  </p>

                  <p className="font-semibold">
                    {user.phone || "Not Added"}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <FaMapMarkerAlt className="text-red-500 text-xl" />

                <div>

                  <p className="text-gray-500">
                    Location
                  </p>

                  <p className="font-semibold">
                    {user.location || "Not Added"}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <FaUserTag className="text-purple-600 text-xl" />

                <div>

                  <p className="text-gray-500">
                    Role
                  </p>

                  <p className="font-semibold capitalize">
                    {user.role}
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-8">

            {/* Resume */}

            <div className="bg-white rounded-2xl shadow-md p-8">

              <h2 className="text-2xl font-bold mb-6">
                Resume
              </h2>

              {user.resume ? (
                <a
                  href={user.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-red-600 font-semibold hover:underline"
                >
                  <FaFilePdf />
                  View Current Resume
                </a>
              ) : (
                <p className="text-gray-500">
                  No resume uploaded yet.
                </p>
              )}

              <input
                type="file"
                accept=".pdf"
                onChange={(e) =>
                  setResume(e.target.files[0])
                }
                className="mt-6 w-full"
              />

              <button
                onClick={handleUpload}
                disabled={uploading}
                className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition flex justify-center items-center gap-3"
              >
                <FaUpload />

                {uploading
                  ? "Uploading..."
                  : "Upload Resume"}
              </button>

            </div>

            {/* Profile Completion */}

            <div className="bg-white rounded-2xl shadow-md p-8">

              <h2 className="text-2xl font-bold">
                Profile Status
              </h2>

              <div className="mt-6">

                <div className="flex justify-between mb-2">

                  <span>Completion</span>

                  <span>80%</span>

                </div>

                <div className="bg-gray-200 rounded-full h-3">

                  <div className="bg-green-500 h-3 rounded-full w-4/5"></div>

                </div>

              </div>

              <p className="text-gray-500 mt-5">
                Add your phone number, location,
                skills, and resume to complete
                your profile.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;