const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <section className="min-h-screen bg-[#FFFCFD] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          {title}
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          {subtitle}
        </p>

        {children}

      </div>

    </section>
  );
};

export default AuthLayout;