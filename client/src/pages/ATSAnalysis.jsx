import { useState } from "react";
import { analyzeResume } from "../services/authService";

const ATSAnalysis = () => {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      const data = await analyzeResume();

      setAnalysis(data.analysis);
    } catch (error) {
      alert(error.response?.data?.message || "Analysis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Resume ATS Analysis
          </h1>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Analyze your uploaded resume and receive an ATS compatibility
            score, detected skills, recommended improvements, and suggestions
            to strengthen your resume.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="px-10 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition duration-300 disabled:bg-gray-400"
          >
            {loading ? "Analyzing Resume..." : "Analyze Resume"}
          </button>
        </div>

        {analysis && (
          <div className="mt-12 space-y-8">

            {/* ATS Score */}
            <div className="bg-indigo-50 rounded-2xl p-10 text-center shadow-sm">

              <h2 className="text-2xl font-bold text-gray-800">
                ATS Compatibility Score
              </h2>

              <p className="text-7xl font-extrabold text-indigo-600 mt-5">
                {analysis.score}%
              </p>

              <p className="text-gray-500 mt-4">
                Your resume's compatibility with modern Applicant Tracking
                Systems.
              </p>

            </div>

            {/* Skills Found */}
            <div className="bg-white border rounded-2xl p-8 shadow-sm">

              <h2 className="text-2xl font-semibold text-green-700 mb-5">
                ✓ Skills Detected
              </h2>

              <div className="flex flex-wrap gap-3">

                {analysis.detectedSkills.length > 0 ? (
                  analysis.detectedSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500">
                    No skills detected.
                  </p>
                )}

              </div>

            </div>

            {/* Missing Skills */}
            <div className="bg-white border rounded-2xl p-8 shadow-sm">

              <h2 className="text-2xl font-semibold text-red-700 mb-5">
                Recommended Skills
              </h2>

              <div className="flex flex-wrap gap-3">

                {analysis.missingSkills.length > 0 ? (
                  analysis.missingSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500">
                    Great! No missing skills detected.
                  </p>
                )}

              </div>

            </div>

            {/* Suggestions */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">

              <h2 className="text-2xl font-semibold text-yellow-700 mb-5">
                Resume Improvement Tips
              </h2>

              {analysis.suggestions.length > 0 ? (
                <ul className="list-disc pl-6 space-y-3 text-gray-700">

                  {analysis.suggestions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}

                </ul>
              ) : (
                <p className="text-gray-600">
                  Excellent! Your resume doesn't require any major improvements.
                </p>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default ATSAnalysis;