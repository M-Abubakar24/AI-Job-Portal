import JobCard from "./JobCard";

const FeaturedJobs = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Canada",
      salary: "$90,000",
      type: "Full Time",
    },
    {
      title: "Backend Developer",
      company: "Microsoft",
      location: "Remote",
      salary: "$100,000",
      type: "Full Time",
    },
    {
      title: "UI/UX Designer",
      company: "Adobe",
      location: "USA",
      salary: "$85,000",
      type: "Hybrid",
    },
    {
      title: "Software Engineer",
      company: "Amazon",
      location: "Germany",
      salary: "$110,000",
      type: "Full Time",
    },
    {
      title: "DevOps Engineer",
      company: "Netflix",
      location: "Remote",
      salary: "$120,000",
      type: "Remote",
    },
    {
      title: "Data Analyst",
      company: "Spotify",
      location: "Sweden",
      salary: "$80,000",
      type: "Hybrid",
    },
    {
      title: "Mobile App Developer",
      company: "Apple",
      location: "USA",
      salary: "$115,000",
      type: "Full Time",
    },
    {
      title: "Cloud Engineer",
      company: "IBM",
      location: "UK",
      salary: "$105,000",
      type: "Remote",
    },
    {
      title: "Cyber Security Analyst",
      company: "Cisco",
      location: "Australia",
      salary: "$95,000",
      type: "Full Time",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

  <h2 className="text-4xl font-bold text-gray-800">
    Featured Opportunities
  </h2>

  <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
    Explore some of the latest opportunities from leading companies
    around the world and take the next step in your career.
  </p>

</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 hover:shadow-lg transition">
            View All Jobs
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedJobs;