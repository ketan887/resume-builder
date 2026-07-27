import { Link } from "react-router-dom";

const templates = [
  {
    name: "Modern",
    color: "bg-blue-100",
  },
  {
    name: "Professional",
    color: "bg-green-100",
  },
  {
    name: "Minimal",
    color: "bg-yellow-100",
  },
];

function TemplatesPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Resume Templates
          </h2>

          <p className="mt-4 text-gray-600">
            Choose a professionally designed template.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {templates.map((template) => (
            <div
              key={template.name}
              className="rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition"
            >

              <div className={`h-80 ${template.color} flex items-center justify-center`}>

                <div className="bg-white w-52 h-64 rounded-lg shadow-md p-4">

                  <div className="h-5 bg-blue-500 rounded w-24 mb-4"></div>

                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5"></div>

                    <div className="mt-6 h-20 bg-gray-100 rounded"></div>

                    <div className="mt-4 h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>

                </div>

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {template.name}
                </h3>

                <Link
                  to="/templates"
                  className="inline-block mt-5 text-blue-600 font-semibold"
                >
                  View Template →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TemplatesPreview;