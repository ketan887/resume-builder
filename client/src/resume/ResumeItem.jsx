function ResumeItem({
  title,
  subtitle,
  rightText,
  description,
}) {
  return (
    <div className="mb-6 last:mb-0">

      <div className="flex justify-between items-start gap-6">

        <div className="flex-1">

          <h3 className="text-base font-semibold text-slate-900">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-1 text-[15px] text-slate-600">
              {subtitle}
            </p>
          )}

        </div>

        {rightText && (
          <span className="text-sm text-slate-500 whitespace-nowrap">
            {rightText}
          </span>
        )}

      </div>

     {description && (
  <p className="mt-2 text-[15px] leading-7 text-slate-700 whitespace-pre-line">
    {description}
  </p>
)}

    </div>
  );
}

export default ResumeItem;