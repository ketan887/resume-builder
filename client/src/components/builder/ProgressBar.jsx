function ProgressBar({ progress }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 mb-6">

      <div className="flex justify-between mb-3">

        <span className="font-semibold text-slate-700">
          Resume Completion
        </span>

        <span className="font-bold text-blue-600">
          {progress}%
        </span>

      </div>

      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">

        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-700"
        />

      </div>

    </div>
  );
}

export default ProgressBar;