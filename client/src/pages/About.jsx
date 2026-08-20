
import {
  FileText,
  Target,
  Sparkles,
  CheckCircle,
} from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
            <FileText size={32} />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Build a Resume That Gets Noticed
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            ResumeCraft is a modern resume builder designed to help
            job seekers create clean, professional, and ATS-friendly
            resumes without complicated formatting tools.
          </p>

        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Target size={24} />
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              Our Mission
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our goal is to make professional resume creation
              simple and accessible. Instead of spending hours
              worrying about formatting, users can focus on
              presenting their skills, experience, and projects.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <Sparkles size={24} />
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              AI-Powered Improvement
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              ResumeCraft includes AI-powered resume optimization
              to help improve wording, clarity, and ATS-friendly
              presentation while keeping the candidate's original
              information intact.
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Why ResumeCraft?
            </h2>

            <p className="mt-3 text-slate-600">
              Everything you need to create a better resume.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "ATS-friendly formatting",
              "Professional resume templates",
              "AI-powered content improvement",
              "Easy resume editing",
              "PDF export",
              "Responsive design",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-5"
              >
                <CheckCircle
                  size={20}
                  className="shrink-0 text-green-500"
                />

                <span className="font-medium text-slate-700">
                  {feature}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-blue-600 px-8 py-12 text-center text-white shadow-xl">

          <h2 className="text-3xl font-bold">
            Ready to build your resume?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Create a professional resume and take the next step
            toward your career goals.
          </p>

          <a
            href="/builder"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Start Building
          </a>

        </div>
      </section>

    </div>
  );
}

export default About;

