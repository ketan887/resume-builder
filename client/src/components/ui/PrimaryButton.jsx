function PrimaryButton({
  children,
  onClick,
  type = "button",
  icon,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        inline-flex
        items-center
        gap-2
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        hover:from-blue-700
        hover:to-indigo-700
        hover:shadow-lg
        transition-all
        duration-200
        text-white
        px-5
        py-3
        rounded-xl
        font-semibold
      "
    >
      {icon}
      {children}
    </button>
  );
}

export default PrimaryButton;