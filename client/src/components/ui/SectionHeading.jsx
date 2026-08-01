function SectionHeading({ title }) {
  return (
    <div className="mb-4 mt-8">
      <h2 className="text-lg font-bold uppercase tracking-wider text-blue-700">
        {title}
      </h2>

      <div className="h-1 w-16 bg-blue-600 rounded-full mt-2"></div>
    </div>
  );
}

export default SectionHeading;