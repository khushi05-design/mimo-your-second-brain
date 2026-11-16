const ProgressCard = ({ tasks, userName }) => {
  const total = tasks.length;

  const completed = tasks.filter(task => task.completed).length;

  const remaining = total - completed;

  const progress =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        📊 Today's Progress
      </h2>

      {/* Progress Bar */}
      <div className="w-full h-4 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <div
          className="h-full bg-yellow-400 rounded-full transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between mt-3">
        <span className="font-semibold text-slate-900 dark:text-white">
          {completed} / {total} Tasks
        </span>

        <span className="font-bold text-pink-400 dark:text-pink-300">
          {progress}%
        </span>
      </div>

      <div className="mt-8 space-y-4 text-slate-700 dark:text-slate-200">

        <div className="flex justify-between">
          <span>✅ Completed</span>
          <span>{completed}</span>
        </div>

        <div className="flex justify-between">
          <span>📝 Remaining</span>
          <span>{remaining}</span>
        </div>

        <div className="flex justify-between">
          <span>🎯 Total</span>
          <span>{total}</span>
        </div>

      </div>

      <div className="mt-8 p-4 rounded-2xl bg-pink-100 dark:bg-pink-100/20 border border-pink-300 dark:border-pink-500">

        <p className="font-semibold text-center text-pink-400 dark:text-white">
          🌸 Keep Going,{userName}!
        </p>

        <p className="text-center text-sm text-slate-600 dark:text-slate-300 mt-2">
          Small progress every day leads to big results.
        </p>

      </div>

    </div>
  );
};

export default ProgressCard;