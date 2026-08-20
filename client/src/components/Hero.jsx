
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaFileAlt,
  FaDownload,
  FaMagic,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <FaMagic className="text-blue-600" />
              AI-Powered Resume Builder
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">

              Create a Resume That
              <span className="block text-blue-600">
                Gets You Noticed.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Build a professional, ATS-friendly resume in minutes.
              Improve your content with AI, keep your information
              organized, and download your finished resume as a
              polished PDF.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/builder"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                <FaFileAlt />
                Create My Resume
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
              >
                Explore Features
              </a>

            </div>

            {/* Benefits */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <FaCheckCircle className="shrink-0 text-green-500" />
                ATS-friendly formatting
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <FaCheckCircle className="shrink-0 text-green-500" />
                AI-powered improvements
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <FaCheckCircle className="shrink-0 text-green-500" />
                Instant PDF download
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <FaCheckCircle className="shrink-0 text-green-500" />
                Free to get started
              </div>

            </div>

          </div>

          {/* ================= RIGHT RESUME PREVIEW ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Floating AI badge */}
            <div className="absolute -left-3 top-10 z-10 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block lg:-left-8">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                  <FaMagic />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    AI IMPROVEMENT
                  </p>

                  <p className="text-sm font-bold text-slate-900">
                    Resume optimized
                  </p>
                </div>

              </div>

            </div>

            {/* Resume Card */}
            <div className="w-full max-w-md rotate-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10 transition duration-500 hover:rotate-0 hover:scale-[1.01] sm:p-8">

              {/* Resume Header */}
              <div className="border-b border-slate-200 pb-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <FaFileAlt />
                  </div>

                  <div className="flex-1">

                    <div className="h-4 w-36 rounded bg-slate-800" />

                    <div className="mt-2 h-3 w-24 rounded bg-blue-500" />

                  </div>

                </div>

                <div className="mt-4 flex gap-3">
                  <div className="h-2 w-24 rounded bg-slate-200" />
                  <div className="h-2 w-20 rounded bg-slate-200" />
                  <div className="h-2 w-28 rounded bg-slate-200" />
                </div>

              </div>

              {/* Summary */}
              <div className="mt-6">

                <div className="mb-3 h-3 w-28 rounded bg-blue-600" />

                <div className="space-y-2">
                  <div className="h-2 rounded bg-slate-200" />
                  <div className="h-2 w-11/12 rounded bg-slate-200" />
                  <div className="h-2 w-4/5 rounded bg-slate-200" />
                </div>

              </div>

              {/* Experience */}
              <div className="mt-6">

                <div className="mb-3 h-3 w-24 rounded bg-blue-600" />

                <div className="space-y-2">
                  <div className="h-3 w-40 rounded bg-slate-700" />
                  <div className="h-2 w-28 rounded bg-slate-300" />
                  <div className="h-2 rounded bg-slate-200" />
                  <div className="h-2 w-11/12 rounded bg-slate-200" />
                  <div className="h-2 w-4/5 rounded bg-slate-200" />
                </div>

              </div>

              {/* Skills */}
              <div className="mt-6">

                <div className="mb-3 h-3 w-16 rounded bg-blue-600" />

                <div className="flex flex-wrap gap-2">

                  <div className="h-6 w-16 rounded-md bg-blue-50" />
                  <div className="h-6 w-20 rounded-md bg-blue-50" />
                  <div className="h-6 w-14 rounded-md bg-blue-50" />
                  <div className="h-6 w-20 rounded-md bg-blue-50" />

                </div>

              </div>

            </div>

            {/* Floating PDF badge */}
            <div className="absolute -bottom-5 -right-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:-right-6">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <FaDownload />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    READY TO DOWNLOAD
                  </p>

                  <p className="text-sm font-bold text-slate-900">
                    Resume.pdf
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;

