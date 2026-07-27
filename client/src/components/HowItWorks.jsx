const steps = [
  "Fill Your Details",
  "Choose a Template",
  "Download PDF",
];

function HowItWorks() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (
            <div
              key={step}
              className="text-center rounded-2xl p-8 border hover:shadow-lg transition"
            >

              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-2xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {step}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;