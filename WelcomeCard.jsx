const WelcomeCard = ({ userName }) => {
  return (
    <div
      className="
        bg-gradient-to-r
        from-pink-200
        to-pink-300
        dark:from-slate-800
        dark:to-slate-900
        rounded-3xl
        p-8
        shadow-xl
        transition-all
        duration-300
      "
    >
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
        Welcome Back, {userName} 👋
      </h2>

      <p className="text-slate-700 dark:text-slate-300 mt-2">
        Ready to organize your day?
      </p>
    </div>
  );
};

export default WelcomeCard;