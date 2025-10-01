export default function Button({
  children,
  onClick,
  variant = "primary",
  fullWidth = true,
  className = "",
}) {
  const baseClasses = `font-dm-sans text-sm sm:text-base ${
    fullWidth ? "w-full" : "w-fit"
  } py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`;

  const variants = {
    primary: "bg-[#3ECF4C] text-white",
    secondary: "bg-white text-[#3ECF4C] border border-[#3ECF4C]",
    thirdth: "bg-[#E2FCD9CC] text-[#3ECF4C]",
    google:
      "flex items-center justify-center gap-3 bg-white text-gray-500 font-bold border border-gray-200",
    subscribe: "bg-[#FFBD3A] text-white",
    danger: "bg-red-500 text-white",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
