const faqs = [
  {
    q: "Is the resume builder free?",
    a: "Yes. You can create and download resumes for free."
  },
  {
    q: "Are the templates ATS-friendly?",
    a: "Yes. All templates are designed for Applicant Tracking Systems."
  },
  {
    q: "Can I edit my resume later?",
    a: "Yes. Later we'll allow saving resumes and editing them anytime."
  },
];

function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="border rounded-xl p-6"
            >
              <h3 className="font-bold text-xl">
                {faq.q}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;