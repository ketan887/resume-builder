import {
  Download,
  Sparkles,
  CheckCircle2,
  Eye,
  FileText,
} from "lucide-react";

function BuilderHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">

      <div className="max-w-[1920px] mx-auto px-4 md:px-6 xl:px-8">

        {/* Top Row */}
        <div className="h-16 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
              <FileText size={22} />
            </div>

            <div>
              <h1 className="font-bold text-xl text-slate-900">
                ResumeBuilder Pro
              </h1>

              <p className="text-xs text-slate-500">
                Build ATS Friendly Resume
              </p>
            </div>

          </div>

          {/* Right */}

          <div className="hidden md:flex items-center gap-6">

            <div className="flex items-center gap-2 text-green-600 text-sm">

              <CheckCircle2 size={16} />

              Saved just now

            </div>

            <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 hover:bg-slate-100 transition">

              <Eye size={18} />

              Preview

            </button>

            <button className="flex items-center gap-2 rounded-xl bg-violet-600 text-white px-4 py-2 hover:bg-violet-700 transition">

              <Sparkles size={18} />

              AI Improve

            </button>

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition">

              <Download size={18} />

              Download PDF

            </button>

          </div>

        </div>

      </div>

    </header>
  );
}

export default BuilderHeader;