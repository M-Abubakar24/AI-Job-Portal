import {
  FaFileAlt,
  FaSearch,
  FaBriefcase,
  FaUserShield,
  FaChartLine,
  FaBookmark,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaFileAlt size={32} />,
      title: "ATS Resume Analysis",
      description:
        "Improve your resume with intelligent ATS scoring and personalized suggestions.",
      color: "text-indigo-600",
      bg: "bg-indigo-100",
    },
    {
      icon: <FaSearch size={32} />,
      title: "Smart Job Search",
      description:
        "Find jobs instantly using advanced search filters and keyword matching.",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: <FaBriefcase size={32} />,
      title: "One-Click Apply",
      description:
        "Submit applications quickly using your saved profile and resume.",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: <FaBookmark size={32} />,
      title: "Save Opportunities",
      description:
        "Bookmark interesting jobs and revisit them whenever you're ready.",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      icon: <FaChartLine size={32} />,
      title: "Application Tracking",
      description:
        "Monitor every application from submission to interview and hiring.",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      icon: <FaUserShield size={32} />,
      title: "Secure Platform",
      description:
        "Your account and personal information remain protected with secure authentication.",
      color: "text-red-600",
      bg: "bg-red-100",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-indigo-600 font-semibold uppercase tracking-wider">
            Features
          </span>

          <h2 className="text-4xl font-bold mt-3 text-gray-800">
            Everything You Need to Land Your Next Job
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-7">
            Smart ATS combines AI-powered resume analysis, intelligent
            job matching, and seamless application management to help
            job seekers and recruiters connect more efficiently.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div
                className={`w-16 h-16 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center`}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6 text-gray-800">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;