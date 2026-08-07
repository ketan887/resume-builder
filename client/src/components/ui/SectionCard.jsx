function SectionCard({ children }) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-sm
      border
      border-slate-200
      p-6
      space-y-4"
    >
      {children}
    </div>
  );
}

export default SectionCard;