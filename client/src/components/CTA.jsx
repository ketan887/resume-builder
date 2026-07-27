import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-24 bg-blue-600 text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Build Your Dream Resume?
        </h2>

        <p className="mt-6 text-blue-100 text-lg">
          Start building a professional resume today and stand out to recruiters.
        </p>

        <Link
          to="/builder"
          className="inline-block mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          Create Resume Now
        </Link>

      </div>

    </section>
  );
}

export default CTA;