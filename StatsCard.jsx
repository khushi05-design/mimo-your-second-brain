const StatsCard = ({ emoji, title, value }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-100 hover:shadow-md transition-all">
      <div className="text-3xl mb-3">{emoji}</div>

      <p className="text-slate-500 text-sm">
        {title}
      </p>

      <h3 className="text-2xl font-bold text-slate-800 mt-1">
        {value}
      </h3>
    </div>
  );
};

export default StatsCard;