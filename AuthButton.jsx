const AuthButton = ({
  children,
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        py-3
        rounded-xl
        bg-pink-400
        text-white
        font-semibold
        hover:bg-pink-500
        transition
        duration-300
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
    >
      {children}
    </button>
  );
};

export default AuthButton;