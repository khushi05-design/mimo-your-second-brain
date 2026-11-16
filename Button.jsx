const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
}) => {
  const baseStyles =
"px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95";
  const variants = {
    primary:
      "<bg-pink-4></bg-pink-4>00 text-white hover:bg-pink-400 hover:scale-105",

    secondary:
      "bg-white border border-pink-300 text-pink-500 hover:bg-pink-50",

    ghost:
      "bg-transparent text-pink-400 hover:bg-pink-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;