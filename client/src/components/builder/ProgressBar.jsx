function ProgressBar({ progress = 30 }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 mb-6">

      <div className="flex justify-between mb-3">
        <h3 className="font-semibold">
          Resume Completion
        </h3>

        <span>{progress}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">

        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>
  );
}

export default ProgressBar;