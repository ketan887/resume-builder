function ResumeHeading({ children }) {
  return (
    <div className="mb-1 border-b border-slate-300 pb-0.5">
      <h2 className="text-[11px] font-bold uppercase tracking-wide text-slate-800">
        {children}
      </h2>
    </div>
  );
}

export default ResumeHeading;