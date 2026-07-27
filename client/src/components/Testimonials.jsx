const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    text: "CareerLaunch helped me create a professional resume in less than 15 minutes.",
  },
  {
    name: "Priya Patel",
    role: "MCA Student",
    text: "The ATS-friendly templates helped me get shortlisted for interviews.",
  },
  {
    name: "Aman Verma",
    role: "Frontend Developer",
    text: "Simple, modern and incredibly easy to use.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            What Our Users Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <p className="text-gray-600 italic">
                "{item.text}"
              </p>

              <h3 className="mt-6 font-bold text-xl">
                {item.name}
              </h3>

              <p className="text-blue-600">
                {item.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;