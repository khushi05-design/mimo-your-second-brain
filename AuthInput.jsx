const AuthInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-5">

      <label className="block text-slate-700 font-medium mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          text-slate-800
          placeholder-slate-400
          outline-none
          focus:border-pink-300
          focus:ring-2
          focus:ring-pink-100
          transition
        "
      />

    </div>
  );
};

export default AuthInput;