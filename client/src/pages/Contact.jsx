
import {
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "ResumeCraft Contact"
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n\n${formData.message}`
    );

    window.location.href =
      `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
            <MessageSquare size={30} />
          </div>

          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Get in Touch
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Have a question, feedback, or found something that
            needs improvement? We'd love to hear from you.
          </p>

        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              Contact ResumeCraft
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Whether you have a question about the resume builder
              or want to share feedback, you can reach us using
              the form or email below.
            </p>

            <div className="mt-8 flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Mail size={21} />
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Email
                </p>

                <a
                  href="mailto:your-email@example.com"
                  className="mt-1 block text-slate-600 hover:text-blue-600"
                >
                  lokhandeketan427@gmail.com
                </a>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8"
          >

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help?"
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}

export default Contact;

