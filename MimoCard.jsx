const MimoCard = ({ tasks, userName }) => {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const progress =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  const getMimoMessage = () => {
    if (total === 0) {
      return "🌸 Add a task and let's make today productive!";
    }

    if (progress === 100) {
      return `🎉 Amazing, ${userName}! You completed everything today!`;
    }

    if (total - completed === 1) {
      return "💪 You're almost there! Just one task left!";
    }

    if (progress >= 50) {
      return `✨ You're doing great, ${userName}! Keep going!`;
    }

    return "🌱 One small step at a time. You can do this!";
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6">

      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-4xl">
          🤖
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Mimo AI
          </h2>

          <p className="text-sm text-green-500">
            ● Online
          </p>
        </div>

      </div>

      <div className="mt-6 p-4 rounded-2xl bg-pink-50 dark:bg-slate-800">

        <p className="text-slate-700 dark:text-slate-200">
          {getMimoMessage()}
        </p>

      </div>

      <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">

        📊 Your progress: {progress}%

      </div>

    </div>
  );
};

export default MimoCard;