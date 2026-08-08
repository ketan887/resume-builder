  
import {
  Download,
  Sparkles,
  CheckCircle2,
  Eye,
  FileText,
} from "lucide-react";

import { downloadResume } from "../../utils/downloadResume";

function BuilderHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto max-w-[1920px] px-4 md:px-6 xl:px-8">

        <div className="flex h-16 items-center justify-between">

          {/* Logo / Title */}
          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
              <FileText size={22} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                ResumeBuilder Pro
              </h1>

              <p className="text-xs text-slate-500">
                Build ATS Friendly Resume
              </p>
            </div>

          </div>

          {/* Actions */}
          <div className="hidden items-center gap-4 md:flex">

            {/* Save Status */}
            <div className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle2 size={16} />
              <span>Saved just now</span>
            </div>

            {/* Preview */}
            <button
              type="button"
              className="
                flex items-center gap-2
                rounded-xl
                border border-slate-200
                bg-white
                px-4 py-2
                text-sm font-medium
                text-slate-700
                transition
                hover:bg-slate-100
              "
            >
              <Eye size={18} />
              Preview
            </button>

            {/* AI Improve */}
            <button
              type="button"
              className="
                flex items-center gap-2
                rounded-xl
                bg-violet-600
                px-4 py-2
                text-sm font-medium
                text-white
                shadow-sm
                transition
                hover:bg-violet-700
              "
            >
              <Sparkles size={18} />
              AI Improve
            </button>

            {/* Download PDF */}
            <button
              type="button"
              onClick={downloadResume}
              className="
                flex items-center gap-2
                rounded-xl
                bg-blue-600
                px-4 py-2
                text-sm font-medium
                text-white
                shadow-sm
                transition
                hover:bg-blue-700
                active:scale-95
              "
            >
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

