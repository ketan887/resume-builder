function SelectField({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  required = false,
  disabled = false,
  error = "",
  helperText = "",
  name,
}) {
  return (
    <div className="space-y-2">

      {label && (
        <label
          htmlFor={name}
          className="flex items-center gap-1 text-sm font-semibold text-slate-700"
        >
          {label}

          {required && (
            <span className="text-red-500">*</span>
          )}
        </label>
      )}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full
          rounded-xl
          border
          bg-white
          px-4
          py-3
          text-sm
          text-slate-800
          shadow-sm
          outline-none
          transition-all
          duration-200
          cursor-pointer

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
      >

        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => {
          const optionValue =
            typeof option === "object"
              ? option.value
              : option;

          const optionLabel =
            typeof option === "object"
              ? option.label
              : option;

          return (
            <option
              key={optionValue}
              value={optionValue}
            >
              {optionLabel}
            </option>
          );
        })}

      </select>

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

export default SelectField;