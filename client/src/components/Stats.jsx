import {
  Briefcase,
  Building2,
  Users,
  BadgeCheck,
} from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <Briefcase size={34} />,
      number: "10K+",
      title: "Jobs Posted",
      color: "text-indigo-600",
      bg: "bg-indigo-100",
    },
    {
      icon: <Building2 size={34} />,
      number: "2.5K+",
      title: "Companies",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: <Users size={34} />,
      number: "20K+",
      title: "Candidates",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: <BadgeCheck size={34} />,
      number: "95%",
      title: "ATS Success",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-800">
            Trusted by Thousands
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals and companies using
            Smart ATS to streamline hiring and job searching.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div
                className={`w-16 h-16 mx-auto rounded-full ${item.bg} flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>

              <h2 className="mt-6 text-4xl font-bold text-gray-800">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600 font-medium">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;