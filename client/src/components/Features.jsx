import {
  FaFileAlt,
  FaRobot,
  FaDownload,
  FaPalette,
} from "react-icons/fa";

const features = [
  {
    icon: <FaFileAlt size={32} />,
    title: "Professional Templates",
    description:
      "Choose from modern, recruiter-approved resume templates.",
  },
  {
    icon: <FaRobot size={32} />,
    title: "ATS Friendly",
    description:
      "Designed to pass Applicant Tracking Systems used by employers.",
  },
  {
    icon: <FaDownload size={32} />,
    title: "PDF Download",
    description:
      "Export your resume as a high-quality PDF with one click.",
  },
  {
    icon: <FaPalette size={32} />,
    title: "Easy Customization",
    description:
      "Personalize colours, fonts and layouts without any design skills.",
  },
];

function Features() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Build resumes that recruiters love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border p-8 hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;