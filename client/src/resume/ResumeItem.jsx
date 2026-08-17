function ResumeItem({
  title,
  subtitle,
  rightText,
  description,
}) {
  return (
    <div className="mb-2 last:mb-0">

      <div className="flex items-start justify-between gap-4">

        <div className="min-w-0 flex-1">
          <h3 className="text-[14px] font-semibold text-slate-900">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-0.5 text-[12px] text-slate-600">
              {subtitle}
            </p>
          )}
        </div>

        {rightText && (
          <span className="shrink-0 whitespace-nowrap text-[11px] text-slate-500">
            {rightText}
          </span>
        )}

      </div>

      {description && (
        <p className="mt-1 text-[12px] leading-5 text-slate-700 whitespace-pre-line">
          {description}
        </p>
      )}

    </div>
  );
}

export default ResumeItem;