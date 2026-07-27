import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Section */}
          <div>

            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 AI-Powered Job Portal
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Find Your
              <span className="block text-yellow-300">
                Dream Job Faster
              </span>
            </h1>

            <p className="mt-6 text-lg text-indigo-100 leading-8">
              Build an ATS-friendly resume, discover jobs that match
              your skills, monitor your applications, and connect with
              top companies—all from one powerful platform.
            </p>

            {/* Search */}
            <div className="mt-10 flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-2xl">

              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                className="flex-1 px-5 py-4 text-gray-700 outline-none"
              />

              <button className="bg-indigo-800 hover:bg-indigo-900 transition px-8 py-4 font-semibold">
                Search
              </button>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/jobs"
                className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Browse Jobs
              </Link>

              <Link
                to="/register"
                className="border-2 border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition"
              >
                Get Started
              </Link>

            </div>

          </div>

          {/* Right Section */}
          <div className="flex justify-center">

            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-gray-800">

              <h2 className="text-2xl font-bold">
                ATS Resume Score
              </h2>

              <div className="mt-6 flex justify-center">

                <div className="w-36 h-36 rounded-full border-[12px] border-green-500 flex items-center justify-center">

                  <span className="text-4xl font-bold text-green-600">
                    92%
                  </span>

                </div>

              </div>

              <p className="mt-6 text-center text-gray-600">
                Your resume is highly optimized and ready for Applicant
                Tracking Systems.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between">
                  <span>Keywords</span>
                  <span className="font-semibold text-green-600">
                    Excellent
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Formatting</span>
                  <span className="font-semibold text-green-600">
                    Excellent
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Readability</span>
                  <span className="font-semibold text-yellow-500">
                    Good
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;