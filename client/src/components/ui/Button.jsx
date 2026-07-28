function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",
    secondary:
      "bg-gray-100 hover:bg-gray-200 text-gray-800",
    danger:
      "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2 rounded-lg transition font-medium ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;