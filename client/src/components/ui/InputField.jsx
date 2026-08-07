function InputField({
  label,
  placeholder = "",
  value,
  onChange,
  type = "text",
  required = false,
  disabled = false,
  error = "",
  helperText = "",
  name,
}) {
  return (
    <div className="space-y-2">

      {label && (
        <label className="flex items-center gap-1 text-sm font-semibold text-slate-700">
          {label}

          {required && (
            <span className="text-red-500">*</span>
          )}
        </label>
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={`
          w-full
          rounded-xl
          border
          px-4
          py-3
          text-sm
          bg-white
          text-slate-800
          placeholder:text-slate-400
          shadow-sm
          transition-all
          duration-200
          outline-none

          ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
              : "border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          }

          ${
            disabled
              ? "cursor-not-allowed bg-slate-100 text-slate-400"
              : ""
          }
        `}
      />

      {helperText && !error && (
        <p className="text-xs text-slate-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}

    </div>
  );
}

export default InputField;