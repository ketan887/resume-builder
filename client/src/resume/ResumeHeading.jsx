function ResumeHeading({ children }) {
  return (
    <div className="mb-4">
      <h2 className="text-[17px] font-bold uppercase tracking-[2px] text-slate-800">
        {children}
      </h2>

      <div className="mt-2 h-[1px] w-full bg-slate-300"></div>
    </div>
  );
}

export default ResumeHeading;