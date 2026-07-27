import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-6">
              🚀 Free Resume Builder
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Build ATS-Friendly
              <span className="text-blue-600"> Resumes </span>
              That Get Interviews.
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              Create professional resumes in minutes using beautiful templates,
              download them as PDF, and increase your chances of getting hired.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/builder"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Create Resume
              </Link>

              <Link
                to="/templates"
                className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition"
              >
                Browse Templates
              </Link>

            </div>

            <div className="mt-10 space-y-3">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                ATS Optimized Templates
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Instant PDF Download
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Free to Start
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl p-8 border">

              <div className="h-8 w-40 rounded bg-blue-600 mb-8"></div>

              <div className="space-y-4">

                <div className="h-4 bg-gray-200 rounded w-3/4"></div>

                <div className="h-4 bg-gray-200 rounded"></div>

                <div className="h-4 bg-gray-200 rounded w-5/6"></div>

                <div className="h-4 bg-gray-200 rounded w-2/3"></div>

                <div className="h-20 bg-blue-100 rounded mt-6"></div>

                <div className="h-4 bg-gray-200 rounded"></div>

                <div className="h-4 bg-gray-200 rounded w-4/5"></div>

                <div className="h-4 bg-gray-200 rounded w-2/3"></div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;