function Stats() {
  const stats = [
    { number: "10K+", label: "Resumes Created" },
    { number: "95%", label: "ATS Success Rate" },
    { number: "25+", label: "Resume Templates" },
    { number: "50+", label: "Countries Reached" },
  ];

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
        {stats.map((item) => (
          <div key={item.label}>
            <h2 className="text-5xl font-bold">{item.number}</h2>
            <p className="mt-3 text-blue-100">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;